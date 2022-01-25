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

### Installation du paquetage de langue 'Français'

Le paquetage de langue 'French / Français (fr)' doit être installé depuis l'interface Moodle, sous *Administration > Site administration > Language > Language packs*. Après sélection du paquetage, cliquer sur le bouton *Install selected language pack(s)* :

![Interface d'installation des langues](/img/installation/language_pack_install.png)

La PAD+ est configurée par défaut pour utiliser le français. Le langage par défaut peut être réglé sous *Site administration > Language > Language settings*. Plus d'informations sur la [gestion des paquetages de langue](https://docs.moodle.org/3x/fr/Paquetages_de_langue).

### Installation du paquetage de langue personnalisé pour la PAD+

Une fois le paquetage de langue français installé, il reste à importer le paquetage personnalisé avec les termes de la PAD+, qui modifient certains noms (stagiaires, formateurs, séquences...) et corrigent des intitulés pour l'accessibilité.

Avant de commencer, **téléchargez [l'archive du paquetage personnalisé](https://github.com/e-PSHAD/pad-infra/lang/customlang_fr.zip)**. L'installation se fait ensuite dans l'interface *Administration du site / Langue / Personnalisation de la langue*.

1. Choisissez la langue 'Francais (fr)'.
1. Cliquez sur *Importer des chaînes personnalisées*.
1. Après chargement du paquetage de langue, cliquez sur *Continuer*.
1. Sélectionnez ou déposez le fichier d'archive déjà téléchargé *customlang_fr.zip* pour la personnalisation.
1. Gardez le choix "Créer ou mettre à jour toutes les chaînes..." dans le *Mode d'importation*.
1. Cliquez sur *Importer le fichier*.

![Interface d'installation du paquetage spécialisé](/img/installation/custom_language_pack_install.png)

7. Après le chargement, cliquez sur *Continuer*.
1. Cliquez sur *Enregistrer les chaînes dans le paquetage de langue*.
1. Confirmez l'import en cliquant sur *Continuer*.

L'interface est alors mise à jour avec les chaînes personnalisées.

### Configuration du tableau de bord

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

![Configuration standard du tableau de bord PAD+ avec 3 blocs](/img/installation/dashboard-pad-default.png)

:::info
- Le thème PAD+ a été travaillé pour la configuration standard du tableau de bord. L'intégration graphique des blocs non standards peut donc être perfectible.
- L'étape [configuration automatique](#configuration-automatique) enlève la permission aux utilisateurs de modifier leur propre tableau de bord.
- Voir la [documentation officielle sur le  tableau de bord](https://docs.moodle.org/3x/fr/Tableau_de_bord).
:::

## Création des comptes utilisateurs et attribution des rôles

Il existe plusieurs méthodes pour [ajouter des utilisateurs sur le site](https://docs.moodle.org/311/en/Authentication), via connexion à un annuaire, [enregistrement manuel](https://docs.moodle.org/3x/fr/Cr%C3%A9ation_manuelle_de_comptes), [import d'un fichier CSV](https://docs.moodle.org/3x/fr/Importer_des_utilisateurs)...

Dans un premier temps, après création, il peut être utile de désigner **d'autres comptes comme administrateurs**, en plus de l'administrateur principal créé à l'installation. Cela se fait uniquement via la [page dédiée de l'interface d'administration](https://docs.moodle.org/3x/fr/Administrateur).

D'autres [rôles peuvent être attribués](https://docs.moodle.org/3x/fr/Attribution_des_r%C3%B4les) dans les contextes globaux du site ou des catégories de cours. Il s'agit des rôles [Gestionnaire et Créateur de cours](https://docs.moodle.org/3x/fr/R%C3%B4les_standards). Les rôles formateurs et stagiaires n'ont de sens que dans le contexte d'un cours par exemple. L'attribution de ces rôles est donc différente des administrateurs. Elle peut se faire après création du compte mais plus généralement après inscription à un cours (pour les stagiaires par exemple).
