---
sidebar_position: 1
---
# Déploiement d'une nouvelle instance

## Prérequis

Voir les prérequis de [Moodle 3.11](https://docs.moodle.org/dev/Moodle_3.11_release_notes#Server_requirements).

En résumé :
- serveur Apache installé avec module PHP (PHP 7.3.x ou PHP 7.4.x)
- base de données MariaDB installé, 10.2.29 <= version <= 10.5

> PHP version: minimum PHP 7.3.0. PHP 7.4.x is supported too. PHP 8.0 support is not ready for production yet.
> - PHP extension sodium is recommended.
> - PHP setting max_input_vars is recommended to be >= 5000 for PHP 7.x installations.

:::caution MariaDB 10.6
Moodle utilise une configuration marquée comme dépréciée dans MariaDB 10.6. "The setting ROW_FORMAT=COMPRESSED is deprecated in MariaDB 10.6." - voir https://tracker.moodle.org/browse/MDL-72131
:::

## Déploiement Pad+ avec Ansible

Ansible est un outil de configuration et déploiement automatique avec un minimum de prérequis. Il faut un accès SSH sur les machines cibles. Voir le [guide d'installation Ansible](https://docs.ansible.com/ansible/latest/installation_guide/index.html). Basiquement cela se fait avec pip (Python 3.8+ sur la machine de contrôle).

Les étapes de ce premier déploiement sont définis dans le [playbook moodle_install](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/moodle_install.yml). Le playbook définit les principales étapes d'une [installation Moodle](https://docs.moodle.org/311/en/Installing_Moodle) en s'appuyant sur le script `admin/cli/install.php`. Ce playbook exécute les étapes suivantes :

- création d'un dossier `moodledata` (cache, stockage de données) avec les droits de l'utilisateur web (Apache...)
- récupération d'une [archive tagguée de code PAD+](https://github.com/e-PSHAD/PAD) et extraction dans le répertoire d'installation web du site
- lancement du script d'installation automatique avec les paramètres configurés (création du config.php, initialisation de la base de données Moodle)
- configuration du job cron pour Moodle

Avant d'exécuter le playbook, il faut donc créer un [fichier d'inventaire Ansible](https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#intro-inventory) avec la machine cible (serveur web Apache) et la configuration customisée.

Exemple de fichier d'inventaire `my-pad.hosts.yml` avec configuration customisée :

```yaml
all:
  children:
    webservers:
      hosts:
        XXX # adresse du serveur web
      vars:
        moodle: # paramètres Moodle
          hostname: XXX # nom du dossier où est hébergé le site, e.g. https://www.<hostname>
          version_tag: XXX # tag de la version à télécharger sur le dépôt git https://github.com/e-PSHAD/PAD
          fullname: XXX # nom du site Moodle
          shortname: XXX # nom court du site
          adminuser: admin # login de l'administrateur principal Moodle
          adminpass: XXX # mot de passe de l'administrateur principal Moodle
          adminemail: XXX # email de l'administrateur principal Moodle
          upgrade_key: XXX # clé de protection lors des mises à jour Moodle https://docs.moodle.org/311/en/Upgrade_key
        db: # paramètres base de données
          host: XXX # serveur de la base de données
          name: XXX # nom de la base de données
          user: XXX # utilisateur de la base de données
          pass: XXX # mot de passe de l'utilisateur base de données
```

D'autres [options de configuration plus génériques](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/group_vars/all.yml) sont disponibles et peuvent être surchargées dans la configuration d'inventaire ou d'hôte (voir la [doc Ansible sur les variables](https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#adding-variables-to-inventory)).

Exécuter le playbook `moodle_install.yml` dans le répertoire `ansible_playbooks`. Exemple avec un fichier d'inventaire `my-pad.hosts.yml` et l'utilisateur root en SSH :

```
ansible-playbook moodle_install.yml -i my-pad.hosts.yml -u root
```

:::caution
L'installation peut prendre plusieurs minutes pour la création de la base de données. Une fois finie, il est recommandé de **sauvegarder le fichier `config.php`** généré (avec le fichier d'inventaire).
:::

## Etapes post-installation automatique

Il existe d'autres [étapes à vérifier/compléter](https://docs.moodle.org/311/en/Installing_Moodle#Final_configuration) pour après installation, à adapter suivant l'environnement de production :

- mise en place des [backups](https://docs.moodle.org/311/en/Site_backup)
- mise en place des [systèmes de cache](https://docs.moodle.org/311/en/Caching) et autres [conseils de performance](https://docs.moodle.org/311/en/Performance)
- conseils de [sécurité](https://docs.moodle.org/311/en/Security)
- création de [comptes utilisateurs](https://docs.moodle.org/311/en/Managing_accounts)
