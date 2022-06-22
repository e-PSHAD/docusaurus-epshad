---
sidebar_position: 3
---
# Attribution manuelle des rôles

Cette section explique les procédures manuelles pour attribuer des rôles au niveau de l'instance et des catégories aux utilisateurs. Ces procédures s'adressent aux administrateurs et gestionnaires. Elles sont une alternative à la [procédure scriptée d'attribution](donnees#users-categories).


## Désignation d'un administrateur {#administrateur}

La désignation d'un utilisateur comme [administrateur (MoodleDoc)](https://docs.moodle.org/3x/fr/Administrateur) ne peut se faire que via l'interface *Administration du site / Utilisateurs / (Permissions) / Administrateurs du site*. Un administrateur ne peut être désigné que par un autre administrateur. Pour rappel, un administrateur a **tous les droits sur le site**, y compris celui de modifier des options techniques. C'est donc un rôle réservé à des utilisateurs avertis.

![Interface de désignation des administrateurs](/img/organisation/ajout_administrateur.png)


## Gestionnaire d'instance {#gestionnaire-instance}

Le gestionnaire d'instance a tous les droits pour consulter le site, modifier le contenu, créer des comptes et attribuer des rôles (hors administrateur). Il n'a pas accès aux options techniques contrairement à l'administrateur. C'est donc un rôle réservé à des utilisateurs avertis.

> En tant qu'administrateur ou gestionnaire d'instance
> - Je gère les droits d'accès des professionnels à leur site et aux ressources professionnelles.
> - J'organise l'arborescence générale des sites et celle des ressources professionnelles en particulier.
> - J'ai accès à la consultation et à l'édition de toutes les séquences.

L'attribution se fait dans *Administration du site / Utilisateurs / (Permissions) / Attribution des rôles système*.

- Cliquez sur le rôle **Gestionnaire**
- Recherchez et ajoutez l'utilisateur dans la liste des gestionnaires.

    ![Interface d'attribution du rôle gestionnaire d'instance](/img/organisation/ajout_gestionnaire_instance.png)

:::caution Rôle système et autres rôles
Le gestionnaire d'instance doit être le **seul rôle attribué au niveau "Système"** dans le modèle PAD+, ce qui veut dire que ses droits s'appliquent partout. Les rôles décrits ci-dessous sont restreints au niveau de quelques catégories (gestionnaire, contributeur, stagiaire pour l'accès aux ateliers complémentaires) ou des séquences (intervenant, intervenant non éditeur, stagiaire).
:::


## Gestionnaire de site

Le gestionnaire de site peut gérer le contenu et les rôles des utilisateurs dans les catégories sur lesquelles il est désigné gestionnaire. C'est un rôle plus limité que le gestionnaire d'instance : par exemple il ne peut pas créer de comptes utilisateurs.

> En tant que gestionnaire de site
> - Je peux consulter toutes les séquences de mon site (sans m'inscrire).
> - Je gère les droits d'accès des professionnels et des stagiaires aux séquences du site.
> - Je peux organiser l'arborescence sur mon site.

Le gestionnaire de site est habituellement désigné par un administrateur ou un gestionnaire d'instance, via l'interface *Administration du site / Séquences / Gestion des séquences et catégories*.

- Ouvrez le menu d'action de la catégorie visée et sélectionnez le choix **Attribution des rôles**.

    ![Choix "Attribution des rôles" dans l'interface de gestion des séquences et catégories](/img/organisation/gestion_toutes_categories.png)

- Cliquez sur le rôle **Gestionnaire** dans la nouvelle page.
- Recherchez et ajoutez l'utilisateur dans la liste des gestionnaires.

    ![Interface d'attribution du rôle gestionnaire de site](/img/organisation/ajout_gestionnaire_site.png)

- N'oubliez pas de répéter cette attribution pour **toutes les catégories** que l'utilisateur doit gérer : un gestionnaire de site peut gérer par exemple la catégorie "Site A" mais aussi la catégorie voisine "Ateliers Site A".

:::info Rôles multiples pour un utilisateur
Un utilisateur peut avoir des rôles différents par catégorie. Il peut par exemple être gestionnaire de site sur des catégories "site" mais simple [contributeur](#contributeur) sur la catégorie "ressources professionnelles".
:::


## Professionnel

L'usager professionnel est soit un formateur, soit un accompagnant du domaine MPS(I).

> En tant que professionnel
> - Je peux consulter toutes les séquences sur mon site et dans les ressources professionnelles (sans m'inscrire).
> - Je peux créer une séquence dans l'arborescence de mon site.
> - Je peux inscrire des stagiaires dans mes séquences et assurer le suivi des stagiaires.
> - Je peux copier des ressources entre les ressources professionnelles partagées et mon site.

Cet usager est défini par deux rôles à des niveaux différents dans la PAD+ :

- le rôle contributeur ("créateur de cours" dans Moodle) dans un site et dans les ressources professionnelles : celui-ci lui permet de parcourir les catégories de son site et des ressources professionnelles, de consulter les séquences sans être inscrit, de créer des séquences ;
- le rôle intervenant pour les séquences qu'il a créé (ou peut éditer) et dont il assure les inscriptions et le suivi des stagiaires ; cela inclut les ressources professionnelles dont il est l'auteur ;

### Contributeur d'une catégorie {#contributeur}

Un gestionnaire de la catégorie visée peut attribuer le rôle contributeur à d'autres utilisateurs.

- Depuis la page de la catégorie, ouvrez le menu d'action et sélectionnez le choix **Attribution des rôles**.

    ![Choix "Attribution des rôles" dans le menu d'actions d'une catégorie](/img/organisation/gestion_categorie.png)

- Cliquez sur le rôle Contributeur dans la nouvelle page.
- Recherchez et ajoutez l'utilisateur dans la liste des contributeurs.

    ![Interface d'attribution du rôle contributeur](/img/organisation/ajout_contributeur.png)

- N'oubliez pas de répéter cette attribution pour **toutes les catégories** où l'utilisateur peut accéder et contribuer : il s'agit par exemple des catégories "Site A" et "Ateliers Site A" mais aussi des **ressources professionnelles**.

### Intervenant d'une séquence (et intervenant non éditeur) {#inscription}

Un contributeur qui crée une nouvelle séquence obtient automatiquement le rôle **intervenant** dans cette séquence, ce qui lui permet de modifier le contenu, inscrire des **stagiaires**, assurer le suivi des stagiaires. Il peut aussi inscrire d'autres professionnels soit avec le même rôle **intervenant**, soit avec un rôle plus restreint **intervenant non éditeur** qui permet de suivre les stagiaires mais ni de modifier le contenu ni d'inscrire des stagiaires.

Si besoin, un gestionnaire peut procéder aux mêmes inscriptions qu'un intervenant dans une séquence.

![Interface d'inscription d'un intervenant ou stagiaire dans une séquence](/img/organisation/ajout_intervenant.png)

:::info Je ne vois pas l'intervenant dans la liste des participants ?
Il arrive qu'un intervenant n'apparaisse pas dans la liste de base des participants. C'est le cas par exemple après une copie de séquence. Dans ce cas, vous le verrez via le menu d'actions des participants, au choix "Autres utilisateurs".
:::

## Stagiaire

Le stagiaire a une vue limitée au contenu qui le concerne directement.

> En tant que stagiaire
> - Je peux participer aux séquences auxquelles je suis inscrit.
> - Je peux voir les ateliers complémentaires de mon site et m'inscrire tout seul.
> - Je ne vois pas les autres séquences.

Il y a deux procédures : une pour l'accès à la catégorie "ateliers complémentaire" de son site et une pour l'inscription aux séquences.

### Accès aux ateliers complémentaires

Les ateliers complémentaires sont des séquences en auto-inscription (ou accès libre) hébergés dans une catégorie particulière : les stagiaires doivent donc avoir accès à cette catégorie pour parcourir les séquences et s'inscrire eux-mêmes.

Un gestionnaire (de site ou d'instance) doit attribuer le rôle stagiaire dans la catégorie **Ateliers complémentaires du site** qui concerne le stagiaire.

- Depuis la page de la catégorie, ouvrez le menu d'action et sélectionnez le choix **Attribution des rôles**.

    ![Interface d'attribution du rôle stagiaire dans une catégorie d'ateliers complémentaires](/img/organisation/ajout_stagiaire_atelier.png)

- Cliquez sur le rôle Stagiaire dans la nouvelle page.
- Recherchez et ajoutez l'utilisateur dans la liste des stagiaires.


### Inscription dans une séquence

L'inscription d'un stagiaire dans une séquence peut se faire par un **intervenant de la séquence** ou par un gestionnaire, en utilisant la même procédure que [l'inscription d'un intervenant](#inscription). Moodle propose aussi [plusieurs méthodes d'inscriptions (MoodleDoc)](https://docs.moodle.org/3x/fr/Inscriptions).
