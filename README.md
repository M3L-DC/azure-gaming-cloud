# azure-gaming

## Contexte
Projet Azure qui a pour but de créer un Cloud Gaming sur Azure.

## Consigne
Le déroulé du projet est le suivant:
* Le joueur s’identifie sur son portail web
* Une fois authentifié, si il n’est pas autorisé, il ne peut pas lancer le jeu
* Si il est autorisé, il a un bouton ou un lien pour lancer le jeu
* Le lancement du jeu va démarrer une VM sur Azure et y déployer le jeu
* L’utilisateur peut alors accéder au jeu via une interface.
* Une fois la partie terminée, ou une fois le joueur déconnecté, ou après un
timeout définit par avance, la VM est éteinte dans le cloud.

## Livrable
Le délivrable est en deux parties:
* Le site du portail web, ainsi que deux identifiants et mots de passe pour
pouvoir tester le projet. Un des identifiants ne doit pas permettre l’accès au
jeu.
* Un accès au code source du projet, avec sa documentation pour l’installer.

---
## Technologies utilisé
* VueJS => front
* NodeJS => API
* Azure cloud => gestion des VMs

## Décomposition du projet
Le projet est decomposé en plusieurs partie :
* le frontend : qui contient l'application 
* le backend : qui contient l'api

---

## Project setup (Front)
```
yarn install
```

### Lancer le front
```
yarn serve
```

### Créer/Lancer une production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Project setup (Back)
### Installation
```
npm install
```

### Lancement de l'api
```
nodemon server.js
```
ou 
```
node server.js
```
