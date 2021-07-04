var util = require('util');
var async = require('async');
var msRestAzure = require('ms-rest-azure');
var ComputeManagementClient = require('azure-arm-compute');

var clientId = '8d5f64fd-8a3f-498d-9a77-d160e61395f5';
var domain = 'b7b023b8-7c32-4c02-92a6-c8cdaa1d189c';
var secret = 'wlg-i.x9.AH_DdI2u86Z89.OH0s6AA86w4';
var subscriptionId = 'ec13ab47-7db1-409f-9f63-891704b0a823';
var resourceGroupName = 'azure-gaming-cloud';
var vmName = 'azureGamingCloud';

module.exports = {
  stop: function () {
    msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain, function (err, credentials, subscriptions) {
      if (err) return console.log(err);
      computeClient = new ComputeManagementClient(credentials, subscriptionId);
      
      async.series([
        function (callback) {
          ////////////////////////
          /// Poweroff the VM. ///
          ////////////////////////
          console.log('\n>>>>>>> Start poweroff the VM: ' + vmName);
          computeClient.virtualMachines.powerOff(resourceGroupName, vmName, function (err, result) {
            if (err) {
              console.log(util.format('\n/!\ Error: while powering off the VM:\n%s', 
                util.inspect(err, { depth: null })));
              callback(err);
            } else {
              console.log(util.format('\n>>>>>>> Poweroff the VM is successful.\n%s', 
                util.inspect(result, { depth: null })));
              callback(null, result);
            }
          });
        },
        function (callback) {
          //////////////////////////
          /// Deallocate the VM. ///
          //////////////////////////
          console.log('\n>>>>>>> Start deallocating the VM: ' + vmName);
          computeClient.virtualMachines.deallocate(resourceGroupName, vmName, function (err, result) {
            if (err) {
              console.log(util.format('\n/!\ Error: while deallocating the VM:\n%s', 
                util.inspect(err, { depth: null })));
              callback(err);
            } else {
              console.log(util.format('\n>>>>>>> Deallocate the VM is successful.\n%s', 
                util.inspect(result, { depth: null })));
              callback(null, result);
            }
          });
        },
      ],
      //final callback to be run after all the tasks
      function (err, results) {
        if (err) {
          console.log(util.format('\n/!\ Error occurred in one of the operations.\n%s', 
            util.inspect(err, { depth: null })));
        } else {
          console.log(util.format('\n>>>>>>> All the operations have completed successfully. ' + 
            'The final set of results are as follows:\n%s', util.inspect(results, { depth: null })));
        }
        return;
      });
    })
  }
};