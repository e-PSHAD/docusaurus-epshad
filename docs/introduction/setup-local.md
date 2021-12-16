---
sidebar_position: 2
---
# Setup Local

## Principe
On va utiliser WSL, une intégration Linux directement sous Windows, pour installer et gérer les fichiers.

On utilise le projet moodle-docker (Docker+compose) pour lancer les services de l'application Moodle (serveur web + base de données mysql)
Les services Moodle sont sous Linux, et les fichiers Moodle sont hébergés sur un système de fichier Linux, pour avoir de bonnes performances (si on garde des fichiers sous Windows, cela risque de dégrader les performances et mener à un échec à l'installation par exemple)
intégration avec git et Visual Studio Code pour les devs

## Docker Desktop et WSL (Windows Subsystem for Linux)

Installer **Docker Desktop** https://www.docker.com/products/docker-desktop

Suivre le tuto Windows **pour la config WSL** pour développeurs : https://docs.microsoft.com/en-us/windows/wsl/setup/environment
(autre ref : https://docs.docker.com/desktop/windows/wsl/#develop-with-docker-and-wsl-2 )

Dans une ligne de commande, on va installer une Ubuntu sous WSL et la définir comme système par défaut :
```
wsl --set-default-version 2
wsl --install -d Ubuntu
wsl -s Ubuntu
```
:::danger Attention
Activer l'intégration Ubuntu dans les paramètres Docker Desktop (pour que la CLI docker puisse marcher sous Ubuntu). Voir : https://moodle.org/mod/forum/discuss.php?d=420197 
:::
:::tip Optionnel
Installation de Windows terminal : https://docs.microsoft.com/en-us/windows/terminal/
:::


## Intégration Visual Studio Code et WSL
Cela permet d'accéder indifféremment à du code hébergé sous WSL, avec l'interface VS Code sous Windows. Voir le tuto https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode
Installation de VScode + extension VSCode remote sous Windows
Installation de VS Code server sous WSL, depuis un terminal wsl, taper :
```
code .
```

## Installation de Git sous WSL
Voir tuto https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git
mettre à jour la dernière version de Git sous Ubuntu : voir https://git-scm.com/download/linux for latest release
configuration de Git et de GCM
A voir : config de gitattributes https://code.visualstudio.com/docs/remote/troubleshooting#_resolving-git-line-ending-issues-in-containers-resulting-in-many-modified-files


## Installation du code Moodle sous WSL et des services Docker

Récupération du code Moodle  et moodle-docker dans un répertoire Linux WSL, `/home/$HOMEDIR/projets` par exemple :
```
git clone Moodle  git clone --branch MOODLE_311_STABLE git://git.moodle.org/moodle.git
git clone https://github.com/moodlehq/moodle-docker
```

Lancement des services **Moodle sous Docker**
```
export MOODLE_DOCKER_WWWROOT=/home/<<<<YOUR DIR>>>>/moodle
export MOODLE_DOCKER_DB=mysql
cp config.docker-template.php $MOODLE_DOCKER_WWWROOT/config.php
bin/moodle-docker-compose up -d  
```

Installation de Moodle : visiter le site [http://localhost:8000](http://localhost:8000) pour lancer/finaliser l'installation (check, installation des modules, config admin...) - voir ici sinon https://docs.moodle.org/311/en/Installing_Moodle#Start_Moodle_install


## Développement Moodle sous VS Code
Voir les extensions et instructions pour le développement Moodle sous VS Code (debugger, linter, etc)
