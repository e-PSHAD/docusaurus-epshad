---
sidebar_position: 3
---
# Configuration post-installation

La plupart des options de configuration ne deviennent disponibles qu'une fois l'installation initiale faite. Les étapes ci-dessous finalisent donc l'installation avec la configuration standard de la PAD+ et d'autres configurations manuelles.

## Configuration automatique

La configuration automatique standard de la PAD+ est décrite dans le [fichier pad_config_vars.yml](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/vars/pad_config_vars.yml). Ce fichier est exploité par le [playbook Ansible moosh_config_set.yml](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/moosh_config_set.yml) pour configurer le serveur Moodle à distance avec l'outil [Moosh](https://moosh-online.com/) (installé automatiquement par le playbook). Il faut aussi utiliser le fichier d'inventaire créé pour le déploiement (e.g. `my-pad.hosts.yml`).

```
ansible-playbook moosh_config_set.yml -i my-pad.hosts.yml -u root
```

Cela permet par exemple de configurer le fuseau horaire, activer la recherche globale, désactiver des options des menus... Pour identifier un paramètre, voir [l'explication de la configuration automatique](https://github.com/e-PSHAD/pad-infra/blob/main/moosh-config.md).


## Configuration manuelle

Il existe d'autres [étapes à vérifier/compléter](https://docs.moodle.org/311/en/Installing_Moodle#Final_configuration) après installation, à adapter suivant l'environnement de production :

- mise en place des [backups](https://docs.moodle.org/311/en/Site_backup)
- mise en place des [systèmes de cache](https://docs.moodle.org/311/en/Caching) et autres [conseils de performance](https://docs.moodle.org/311/en/Performance)
- conseils de [sécurité](https://docs.moodle.org/311/en/Security)


## Création des comptes utilisateurs et attribution des rôles

Il existe plusieurs méthodes pour [ajouter des utilisateurs sur le site](https://docs.moodle.org/311/en/Authentication), via connexion à un annuaire, [enregistrement manuel](https://docs.moodle.org/3x/fr/Cr%C3%A9ation_manuelle_de_comptes), [import d'un fichier CSV](https://docs.moodle.org/3x/fr/Importer_des_utilisateurs)...

Dans un premier temps, après création, il peut être utile de désigner **d'autres comptes comme administrateurs**, en plus de l'administrateur principal créé à l'installation. Cela se fait uniquement via la [page dédiée de l'interface d'administration](https://docs.moodle.org/3x/fr/Administrateur).

D'autres [rôles peuvent être attribués](https://docs.moodle.org/3x/fr/Attribution_des_r%C3%B4les) dans les contextes globaux du site ou des catégories de cours. Il s'agit des rôles [Gestionnaire et Créateur de cours](https://docs.moodle.org/3x/fr/R%C3%B4les_standards). Les rôles formateurs et stagiaires n'ont de sens que dans le contexte d'un cours par exemple. L'attribution de ces rôles est donc différente des administrateurs. Elle peut se faire après création du compte mais plus généralement après inscription à un cours (pour les stagiaires par exemple).
