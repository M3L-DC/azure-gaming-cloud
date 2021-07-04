# Azure Gaming 🎮💻

## Le contexte 📚
Projet Azure qui a pour but de créer un Cloud Gaming sur Azure.

#### Consignes
Le déroulé du projet est le suivant:
* Le joueur s’identifie sur son portail web
* Une fois authentifié, si il n’est pas autorisé, il ne peut pas lancer le jeu
* Si il est autorisé, il a un bouton ou un lien pour lancer le jeu
* Le lancement du jeu va démarrer une VM sur Azure et y déployer le jeu
* L’utilisateur peut alors accéder au jeu via une interface.
* Une fois la partie terminée, ou une fois le joueur déconnecté, ou après un
timeout définit par avance, la VM est éteinte dans le cloud.

#### Livrable
Le délivrable est en deux parties:
* Le site du portail web, ainsi que deux identifiants et mots de passe pour
pouvoir tester le projet. Un des identifiants ne doit pas permettre l’accès au
jeu.
* Un accès au code source du projet, avec sa documentation pour l’installer.

---

## Le projet 📦🎓

#### Technologies utilisé 📕
* VueJS => front
* NodeJS => API
* Azure cloud => gestion des VMs

#### Décomposition du projet 🧐
Le projet est decomposé en plusieurs partie :
* le frontend : qui contient l'application 
* le backend : qui contient l'api

---

## Project setup (Front) 🚀

#### Installation
```
yarn install
```

#### Lancer le front
```
yarn serve
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Project setup (Back) 🛸

#### Installation
```
npm install
```

#### Lancement de l'api
```
nodemon server.js
```
ou 
```
node server.js
```

---

## Login credentials 🔑
 - Identifiant : user
 - Mot de passe : password


---

## FAQ ❓❔❓ et autre infos sympa 😉👍
1 - Shutdown automatique 

Un shutdown automatique de la vm est realisé à 00:00 chaque jour. Merci de realisé les tests avant cette heure ci.

2 - Que se passe t-il quand je clique sur play ?

Un premier message indiquant que la machine virtuelle s'allume s'affche.
Puis un deuxième apparaitra lorsque celle ci sera allumé.
Et enfin, un dernier message s'affichera avec les identifiants et l'ip de la vm pour se connecter a distance (avec le rdp)

3 - Que se passe t-il quand je clique sur stop ?

Un premier message indiquant que la machine virtuelle s'étteind s'affche.
Puis un deuxième apparaitra lorsque celle ci sera etteinte.
