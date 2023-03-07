# StarWars front-end Application
## Introduction

Cette application a été développée pour permettre le recrutement de rebelles pour en faire des pilotes et les intégrer dans une mission.

## Architecture

L'application utilise une architecture microservice.
L'application est divisée en deux parties: une partie front end côté client codée en Angular et une partie back end en Spring
fournissant des services web REST API.
Le frontend utilise le framework Angular 15

## Prérequis

Node.js et npm installés sur votre ordinateur
Java 8 ou supérieur installé sur votre ordinateur
Maven
IDE (IntelliJ, Eclipse, etc.)

## Installation

### Front End

Cloner le dépôt Git qui contient le code source Angular 
    `https://github.com/iliasse-e/star-wars-front-end`
Se déplacer dans le répertoire du projet avec la ligne de commande.
Exécuter la commande npm install pour installer toutes les dépendances requises.
Exécuter la commande ng serve pour démarrer le serveur de développement.
Ouvrir un navigateur web et accéder à l'URL 
    `http://localhost:4200/`

### Back End

Cloner le dépôt Git qui contient le code source Spring.
    `https://github.com/iliasse-e/star-wars-back-end`
Ouvrir le projet avec votre IDE (Eclipse, IntelliJ, etc.).
Importer les dépendances requises en utilisant Maven.
Exécuter le projet en tant qu'application Java.
Vérifier que le service REST est en cours d'exécution en accédant à l'URL http://localhost:8080/.

## Fonctionnalités de l'application front-end

* Inscription de rebelles pour le recrutement en tant que pilote.
* Inscription de nouveau chasseurs
* Affectation des chasseurs
* Création de missions
* Affectation des pilotes dans les missions

## Documentation API REST

La documentation de l'API REST peut être trouvée en accédant à l'URL 
    `http://localhost:8080/swagger-ui.html` 
une fois le service REST en cours d'exécution.

## Description technique 

L'application utilise Angular pour créer une SPA, permettant de créer un site web dynamique, décomposé en composants réutilisables.
</br>
L'application s'organise selon le découpage suivant :

### Les composants (ex: boutton, barre de navigation, formulaires)
### Les pages : qui vont imbriquer un ensemble de composants (formulaires, bouton, navigation, ...)
### Les services : correspond aux méthodes qui vont consommer les API (missions, rebelles, chasseurs)
### Interfaces : typage des données qui seront manipulés (va servir à la robustesse de l'application)
### Routing : Permet la mise en place de la navigation d'une page à l'autre
### Fichier app.module : fichier de configuration permettant d'importer l'ensemble des composants, services et bibliothèques
