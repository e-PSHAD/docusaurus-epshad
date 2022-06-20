---
sidebar_position: 3
---
# Configuration post-installation

La plupart des options de configuration ne deviennent disponibles qu'une fois l'installation initiale faite. Les étapes ci-dessous finalisent donc l'installation avec la configuration standard de la PAD+ et d'autres configurations manuelles.

## Configuration automatique

La configuration automatique standard de la PAD+ est décrite dans le [fichier pad_config_vars.yml](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/vars/pad_config_vars.yml). Ce fichier est exploité par le [playbook Ansible moosh_config_set.yml](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/moosh_config_set.yml) pour configurer le serveur Moodle à distance avec l'outil [Moosh](https://moosh-online.com/) (installé automatiquement par le playbook). Il faut utiliser le fichier d'inventaire créé pour le déploiement (e.g. `my-pad.hosts.yml`) pour lancer le playbook :

```
ansible-playbook moosh_config_set.yml -i my-pad.hosts.yml -u root
```

Cela permet par exemple de configurer le fuseau horaire, activer la recherche globale, désactiver des options des menus... Pour identifier un paramètre, voir [l'explication de la configuration automatique](https://github.com/e-PSHAD/pad-infra/blob/main/moosh-config.md).

La configuration automatique change aussi certaines permissions par défaut. Par exemple elle interdit la modification du tableau de bord pour les usagers mais surtout elle fixe les [permissions des rôles dans une organisation PAD+](/organisation/contenu).

## Configuration manuelle

Suivant l'environnement de production, il reste plusieurs options de base à vérifier ou configurer :

- configuration du [tableau de bord PAD+ par défaut](#configuration-tableau-de-bord) (ci-dessous)
- configuration du [serveur de mail sortant (MoodleDoc)](https://docs.moodle.org/311/en/Mail_configuration#Outgoing_mail_configuration) dans *Administration du site / Serveur / (Courriel) / Configuration du courriel sortant*, pour l'envoi des rappels, notifications, etc.
- mise en place des [backups (MoodleDoc)](https://docs.moodle.org/311/en/Site_backup)
- gestion des [sessions (MoodleDoc)](https://docs.moodle.org/311/en/Session_handling) dans `config.php` : par défaut dans des fichiers, il est recommandé [d'utiliser un serveur Redis (MoodleDoc)](https://docs.moodle.org/311/en/Session_handling#Redis_session_driver) pour des installations performantes
- configuration d'un [proxy ou autre option (MoodleDoc)](https://docs.moodle.org/311/en/Installing_Moodle#Final_configuration)

La documentation Moodle contient de nombreux éléments pour la [gestion d'un site Moodle (MoodleDoc)](https://docs.moodle.org/311/en/Managing_a_Moodle_site). Voici quelques pointeurs pour approfondir le sujet :

- [conseils de performance (MoodleDoc)](https://docs.moodle.org/311/en/Performance), en particulier gestion des [systèmes de cache (MoodleDoc)](https://docs.moodle.org/311/en/Caching)
- conseils de [sécurité (MoodleDoc)](https://docs.moodle.org/311/en/Security)

### Configuration du tableau de bord par défaut {#configuration-tableau-de-bord}

Après connexion, l'usager arrive directement sur son tableau de bord. Il est donc important de configurer le **tableau de bord par défaut** pour ne garder que l'essentiel à afficher. La configuration ci-dessous sera appliquée au tableau de bord de tous les nouveaux utilisateurs (et aux anciens utilisateurs si requis).

La **configuration standard d'un tableau de bord PAD+** contient les 4 blocs suivant :

- PAD+ progression stagiaire ("Mon parcours", **à ajouter**, visible uniquement pour les stagiaires)
- Vue d'ensemble des séquences (présent par défaut, toutes les séquences auxquelles il participe en tant que stagiaire, formateur ou autre)
- Événements à venir (présent par défaut, colonne de droite)
- PAD+ visioconférence (**à ajouter**, visible uniquement pour les professionnels)

Tous les autres blocs par défaut de Moodle sont donc **à enlever**.

Vue en mode édition du tableau de bord par défaut configurée pour la PAD+ :
![Configuration standard du tableau de bord PAD+](/img/installation/dashboard-config.png)

#### Guide pas-à-pas de configuration du tableau de bord par défaut

1. Allez dans l'administration à la page *Administration du site / Présentation / **Tableau de bord par défaut**.*
1. Cliquez sur le bouton "Activer l'édition des blocs".
1. Cliquez sur le bouton "Ajouter un bloc" dans le menu latéral.
1. Choisir le bloc **"PAD+ progression stagiaire"** dans la liste.

![Choix du bloc "PAD+ progression stagiaire" dans la liste d'ajout des blocs](/img/installation/dashboard-addblock.png)

5. Le **déplacer en tête de page** en utilisant l'icône "drag and drop" (par défaut, il est ajouté tout en bas de la colonne de droite).
1. Ajouter aussi le bloc **"PAD+ visioconférence"** [si vous avez la visioconférence](/installation/visioconference).

Il faut ensuite enlever tous les blocs ci-dessous, car ils ne font pas partie de la configuration standard.

- Plans de formation (dans la partie principale)
- Séquences consultées récemment (dans la partie principale)
- Chronologie
- Fichiers personnels
- Utilisateurs en ligne
- Derniers badges
- Calendrier

7. Cliquez sur l'icône de paramètres d'un bloc pour ouvrir son menu déroulant.
1. Sélectionnez l'option "Supprimer le bloc ..." et confirmez la suppression.

![Option de suppression dans le menu de paramètre d'un bloc](/img/installation/dashboard-deleteblock.png)

9. Répétez pour chaque bloc à supprimer.
1. Pour appliquer les changements à tous les usagers déjà existant, cliquez sur **Réinitialiser le tableau de bord de tous les utilisateurs** en haut.
1. Cliquez sur le bouton "Désactiver l'édition des blocs" pour sortir du mode.


#### Vues des tableaux de bord standards

Vue du tableau de bord d'un stagiaire. Celui-ci voit le bloc de progression mais pas le bloc visioconférence.

![Vue du tableau de bord d'un stagiaire](/img/installation/dashboard-student.png)


Vue du tableau de bord d'un gestionnaire ou d'un professionnel. Celui-ci voit le bloc visioconférence mais pas le bloc de progression.

![Vue du tableau de bord d'un gestionnaire ou d'un professionnel](/img/installation/dashboard-visio.png)

:::info
- Le thème PAD+ a été travaillé pour la configuration standard du tableau de bord. L'intégration graphique des blocs non standards peut donc être perfectible.
- L'étape [configuration automatique](#configuration-automatique) enlève la permission aux utilisateurs de modifier leur propre tableau de bord.
- Voir la [documentation générique sur le  tableau de bord (MoodleDoc)](https://docs.moodle.org/3x/fr/Tableau_de_bord).
:::

## Etapes suivantes

Il y a encore plusieurs étapes pour rendre une instance PAD+ fonctionnelle : vous pouvez consulter la page d'[organisation du contenu](/organisation/contenu) qui explique le modèle PAD+ pour héberger plusieurs sites sur la même instance ; puis la page [Création et import de données](/organisation/donnees) pour faciliter la création ou la migration initiale des données.

La page suivante explique les [possibilités d'intégration d'un serveur de visioconférence BigBlueButton](/installation/visioconference) dans la PAD+.

Vous pouvez aussi voir comment [créer des comptes utilisateurs (MoodleDoc)](https://docs.moodle.org/311/en/Authentication), via connexion à un annuaire, [enregistrement manuel (MoodleDoc)](https://docs.moodle.org/3x/fr/Cr%C3%A9ation_manuelle_de_comptes), [import d'un fichier CSV (MoodleDoc)](https://docs.moodle.org/3x/fr/Importer_des_utilisateurs)... Il faudra ensuite procéder à [l'attribution des rôles](/organisation/roles) pour ajouter par exemple d'autres administrateurs.
