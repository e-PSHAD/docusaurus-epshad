---
sidebar_position: 1
---
# Environnement local

Le [dépôt principal PAD+](https://github.com/e-PSHAD/PAD) contient une configuration [Docker Compose](https://docs.docker.com/compose/) pour lancer facilement un environnement de développement en local. Les prérequis sont donc [git](https://git-scm.com/) et [Docker](https://www.docker.com/) (version Desktop par exemple).

## Installation locale PAD+

Sous Windows, il est vivement recommandé de faire cette **[installation sous WSL](#environnement-windows-wsl) (Windows Subsystem for Linux)**.

### Récupération du dépôt de code

Récupérez le dépôt de code de la PAD+ dans un répertoire projets, `/home/$HOMEDIR/projets` par exemple. Cela créera le dépôt `/home/$HOMEDIR/projets/PAD` en local.

```
git clone https://github.com/e-PSHAD/PAD.git
```

:::caution Windows et performances
Sous Windows, il faut que ce dossier soit hébergé dans le **système de fichiers WSL** et pas dans le système de fichiers natif Windows pour obtenir des performances correctes (si on garde des fichiers sous Windows, cela risque de dégrader les performances et mener à un échec à l'installation par exemple, car les services Docker sont sous Linux). Pour cela, ouvrir un terminal WSL et taper `cd $HOME` pour se placer dans son répertoire personnel WSL. On peut ouvrir un explorateur Windows avec `explorer.exe .` à cet endroit.
:::

### Lancement des services sous Docker

Le fichier `docker-compose.yml` définit les trois services essentiels au fonctionnement de la PAD+ :

- `webserver` : un serveur Apache configuré pour PHP 7.4
- `db` : une base de données MariaDB en 10.5
- `mailhog`: un service de mail catcher

Les étapes :

1. Copiez le fichier `config-docker.php` en `config.php` (configuration spécialisée pour prendre en charge les variables d'environnement du projet Docker)
2. Copiez le fichier `.env.example` en `.env` (contient les variables propres à votre environnement Docker, chargé automatiquement par Docker Compose)
3. Editez le fichier `.env` pour configurer la variable `MOODLE_DOCKER_WWWROOT` (les autres variables peuvent être laissées par défaut)

```
MOODLE_DOCKER_WWWROOT=/home/$HOMEDIR/projets/PAD
```

Ceci permet à Docker de trouver le code source dans votre système de fichiers.

4. Lancez Docker compose avec `docker compose up -d` dans le dossier des sources
5. Allez sur http://localhost:8000 pour tester les services et finaliser l'installation Moodle via l'interface web

Pour arrêter les services Docker, tapez `docker compose stop` depuis le dossier des sources. Pour détruire les services (recommencer à zéro), tapez `docker compose down`.

:::caution Droits des fichiers
Comme la configuration Docker utilise le système de fichiers local dans son environnement, cela peut poser des **problèmes de droits d'accès** si vous utilisez l'UI Moodle pour installer des fichiers en local (plugins, thèmes...). Par exemple, pour permettre à n'importe quel usager d'écrire dans le dossier thème, on peut utiliser `chmod a+w theme`.
:::

Le service `webserver` est customisé pour aider au développement :
- Fichier config `custom-php.ini` avec 100Mo par défaut pour `upload_max_filesize` et `post_max_size`
- [extension Xdebug](https://xdebug.org/) pour PHP chargée
- [outil Moosh](https://moosh-online.com/) (MOOdle SHell) installé


:::info
La configuration Docker est largement basée sur le [projet moodle-docker](https://github.com/moodlehq/moodle-docker) en le simplifiant.
:::


## Environnement Windows WSL

Instructions pour la préparation de l'environnement WSL (Windows Subsystem for Linux) avec Docker + Visual Studio Code + git.

### Docker Desktop et WSL

- Installer [Docker Desktop](https://www.docker.com/products/docker-desktop).
- Suivre le tutorial Windows pour la [configuration WSL pour développeurs](https://docs.microsoft.com/en-us/windows/wsl/setup/environment) (Autre [référence chez Docker](https://docs.docker.com/desktop/windows/wsl/#develop-with-docker-and-wsl-2)).

Dans une ligne de commande, on va installer une Ubuntu sous WSL et la définir comme système par défaut :
```
wsl --set-default-version 2
wsl --install -d Ubuntu
wsl -s Ubuntu
```
:::caution Attention
Activer l'intégration avec Ubuntu WSL dans les [paramètres Docker Desktop](https://moodle.org/mod/forum/discuss.php?d=420197) (pour que la CLI Docker puisse marcher sous Ubuntu).
:::

:::tip Optionnel
Installation de Windows terminal : https://docs.microsoft.com/en-us/windows/terminal/
:::


### Intégration Visual Studio Code et WSL
Cela permet d'accéder au code hébergé sous WSL avec [l'interface VS Code sous Windows (tutorial)](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode).

- Installation de VScode + extension VSCode remote sous Windows.
- Installation de VS Code server sous WSL, taper `code .` dans un terminal WSL.

### Installation de Git sous WSL
Voir le [tutorial Git sous WSL](https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-git) pour :
- mettre à jour la dernière version de Git sous Ubuntu
- la configuration de Git et de Git Credential Manager

:::info
Vous pouvez maintenant lancer [l'installation PAD+ sous WSL](#installation-locale-pad).
:::

### Développement Moodle sous VS Code
Voir les extensions et instructions pour le [développement Moodle sous VS Code](https://docs.moodle.org/dev/Setting_up_VSCode) (debugger, linter, etc).

L'extension *[Php Sniffer](https://marketplace.visualstudio.com/items?itemName=wongjn.php-sniffer)* demande une configuration spéciale pour utiliser le style de code Moodle :

- [Installer le plugin CodeChecker](https://docs.moodle.org/dev/CodeSniffer#Installing_codechecker) comme plugin local à Moodle
- [Installer le plugin MoodleCheck](https://github.com/moodlehq/moodle-local_moodlecheck) (optionnel, pour la vérification phpdoc)
- **Ne pas commiter ces plugins !** Ajouter les chemins `/local/codechecker/` and `/local/moodlecheck/` dans le fichier `.git/info/exclude` (même effet qu'un ajout dans `.gitignore` sans changer la version locale)
- Suivre les [instructions CodeChecker](https://github.com/moodlehq/moodle-local_codechecker#information) pour configurer le chemin vers l'exécutable `phpcs` sous `local/codechecker/phpcs/bin`, par exemple en changeant le `PATH` sous `~/.profile` ou `.bashrc` :

```shell
# <PAD_HOME> est le chemin d'accès au code PAD
PATH="<PAD_HOME>/local/codechecker/phpcs/bin:$PATH"
```

- Il faut enregistrer le chemin de CodeChecker pour ajouter le standard Moodle dans phpcs  :

```shell
# enregistrer le standard Moodle dans phpcs
phpcs --config-set installed_paths <PAD_HOME>/local/codechecker
# configurer le standard Moodle comme défaut pour phpcs
phpcs --config-set default_standard moodle
# vérifier avec
phpcs -i
```

- Sous VS Code, configurer *PHP Sniffer* pour utiliser le standard Moodle :

```json
    "phpSniffer.standard": "moodle",
```

- si *PHP Sniffer* ne trouve pas phpcs ou le standard moodle, changer dans les settings :

```json
    "phpSniffer.executablesFolder": "<PAD_HOME>/local/codechecker/phpcs/bin"
```
