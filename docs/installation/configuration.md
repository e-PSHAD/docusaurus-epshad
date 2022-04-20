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

La configuration automatique change aussi certaines permissions par défaut. Par exemple elle interdit la modification du tableau de bord pour les usagers.

## Configuration manuelle

Il existe d'autres [étapes à vérifier/compléter](https://docs.moodle.org/311/en/Installing_Moodle#Final_configuration) après installation, à adapter suivant l'environnement de production :

- mise en place des [backups](https://docs.moodle.org/311/en/Site_backup)
- mise en place des [systèmes de cache](https://docs.moodle.org/311/en/Caching) et autres [conseils de performance](https://docs.moodle.org/311/en/Performance)
- conseils de [sécurité](https://docs.moodle.org/311/en/Security)

### Configuration standard du tableau de bord

Les éléments du tableau de bord par défaut doivent être configurés pour tous les utilisateurs de la plateforme avant leur première connexion.

1. Allez dans l'administration à la page *Administration du site / Présentation / **Tableau de bord par défaut**.*
1. Cliquez sur le bouton "Activer l'édition des blocs".
1. Cliquez sur l'icône de paramètres d'un bloc pour ouvrir son menu déroulant.

![Option de suppression dans le menu de paramètre d'un bloc](/img/installation/dashboard-deleteblock.png)

4. Sélectionnez l'option "Supprimer le bloc ..." et confirmez la suppression.
5. Répétez pour chaque bloc à supprimer.
6. Pour appliquer les changements à tous les usagers déjà existant, cliquez sur **Réinitialiser le tableau de bord de tous les utilisateurs** en haut.
7. Cliquez sur le bouton "Désactiver l'édition des blocs" pour sortir du mode.

L'objectif de cette étape est de limiter l'information affichée à l'utilisateur pour conserver l'essentiel. En effet le tableau de bord est la page par défaut après connexion de l'utilisateur.

La liste des blocs à enlever est donc :

- Plans de formation (dans la partie principale)
- Chronologie
- Fichiers personnels
- Utilisateurs en ligne
- Derniers badges
- Calendrier

La **configuration standard d'un tableau de bord PAD+** contient donc les 3 blocs suivant :

- Cours consultés récemment
- Vue d'ensemble des cours (tous les cours auxquels il participe en tant que stagiaire, formateur ou autre)
- Événements à venir (colonne de droite)

![Configuration standard du tableau de bord PAD+ pour un stagiaire](/img/installation/dashboard-pad-default.png)

Si la visioconférence est installée, alors il est aussi possible [d'ajouter le bloc visioconférence](/installation/visioconference#tableau-de-bord) dans le tableau de bord par défaut. Le bloc d'affichera uniquement pour les usagers avec les permissions adéquates, soit les gestionnaires et les professionnels.

![Configuration standard du tableau de bord PAD+ avec la visioconférence](/img/installation/dashboard-visio.png)

:::info
- Le thème PAD+ a été travaillé pour la configuration standard du tableau de bord. L'intégration graphique des blocs non standards peut donc être perfectible.
- L'étape [configuration automatique](#configuration-automatique) enlève la permission aux utilisateurs de modifier leur propre tableau de bord.
- Voir la [documentation officielle sur le  tableau de bord](https://docs.moodle.org/3x/fr/Tableau_de_bord).
:::

## Etapes suivantes

Il y a encore plusieurs étapes pour rendre une instance PAD+ fonctionnelle : vous pouvez consulter la page d'[organisation du contenu](/organisation/contenu) qui explique le modèle PAD+ pour héberger plusieurs sites sur la même instance ; puis la page [Création et import de données](/organisation/donnees) pour faciliter la création ou la migration initiale des données.

Vous pouvez aussi voir comment [créer des comptes utilisateurs](https://docs.moodle.org/311/en/Authentication), via connexion à un annuaire, [enregistrement manuel](https://docs.moodle.org/3x/fr/Cr%C3%A9ation_manuelle_de_comptes), [import d'un fichier CSV](https://docs.moodle.org/3x/fr/Importer_des_utilisateurs)... Il faudra ensuite procéder à l'[attribution des rôles](/organisation/roles) pour ajouter par exemple d'autres administrateurs.
