############################################
### Script to stop the vm on azure cloud ###
############################################

from azure.mgmt.compute import ComputeManagementClient

# Resource Group
GROUP_NAME = 'azure-gaming-cloud'
VM_NAME = 'azureGamingClou'

def stop_game():
  try:
    stop_vm()
    return jsonify({'message': 'vm stopped'}), 200
  except Exception:
    return jsonify({'message': 'something went wrong'}), 400

def get_credentials():
  subscription_id = 'ec13ab47-7db1-409f-9f63-891704b0a823'
  credentials = ClientSecretCredential(
    client_id='8d5f64fd-8a3f-498d-9a77-d160e61395f5',
    client_secret='wlg-i.x9.AH_DdI2u86Z89.OH0s6AA86w4',
    tenant_id='b7b023b8-7c32-4c02-92a6-c8cdaa1d189c'
  )
  # subscription_id = '848cb7db-a25d-4e28-abbf-50853f6b0437'
  # credentials = ClientSecretCredential(
  #     client_id='d4ab77c9-3187-40d9-b0ec-cd840925c0d8',
  #     client_secret='XXff8m-H5i3_78J2h.4FnsS26q.n21HK95',
  #     tenant_id='b7b023b8-7c32-4c02-92a6-c8cdaa1d189c'
  # )
  return credentials, subscription_id

def stop_vm():
  credentials, subscription_id = get_credentials()
  compute_client = ComputeManagementClient(credentials, subscription_id)
  async_vm_start = compute_client.virtual_machines.begin_power_off(GROUP_NAME, VM_NAME)
  async_vm_start.wait()

if __name__ == "__main__":
    stop_game()
