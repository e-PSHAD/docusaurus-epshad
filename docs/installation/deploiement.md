---
sidebar_position: 2
---
# Déploiement initial


## Déploiement Pad+ avec Ansible

Ansible est un outil de configuration et déploiement automatique avec un minimum de prérequis. Il faut un accès SSH sur les machines cibles. Voir le [guide d'installation Ansible](https://docs.ansible.com/ansible/latest/installation_guide/index.html). Basiquement cela se fait avec pip (Python 3.8+ sur la machine de contrôle).

Les étapes de ce premier déploiement sont définis dans le [playbook moodle_install](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/moodle_install.yml). Le playbook définit les principales étapes d'une [installation Moodle](https://docs.moodle.org/311/en/Installing_Moodle) en s'appuyant sur le script `admin/cli/install.php`. Ce playbook exécute les étapes suivantes :

- création d'un dossier `moodledata` (cache, stockage de données) avec les droits de l'utilisateur web (Apache...)
- récupération d'une [archive tagguée de code PAD+](https://github.com/e-PSHAD/PAD) et extraction dans le répertoire d'installation web du site
- lancement du script d'installation automatique avec les paramètres configurés (création du config.php, initialisation de la base de données Moodle)
- installation du [paquetage de langue 'Français'](https://download.moodle.org/langpack/3.11/) et du [paquetage de langue personnalisé pour la PAD+](https://github.com/e-PSHAD/pad-infra/raw/main/lang/)
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

:::caution Durée de l'installation
L'installation peut prendre plusieurs minutes pour la création de la base de données. Une fois finie, il est recommandé de **sauvegarder le fichier `config.php`** généré (avec le fichier d'inventaire).
:::
