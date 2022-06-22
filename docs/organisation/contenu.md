---
sidebar_position: 1
---
# Organisation et permissions

Cette section décrit les principes d'organisation d'une instance PAD+. Cette organisation (et les rôles et permissions associés) permet d'héberger plusieurs sites (établissements, territoires...) sur la même instance PAD+, ainsi que de partager des ressources entre professionnels. Cette section fait le point en particulier sur :

- ce qui relève de Moodle et du modèle PAD+ générique : une organisation arborescente par catégorie, avec une gestion des droits d'accès par des rôles ;
- ce qui relève des règles d'usage à décider et gérer pour votre instance : les règles d'organisation, le nombre de niveaux, l'homogénéité entre les catégories voisines, l'attribution des rôles...

Vous retrouverez cette distinction à travers les deux types d'encadrés de la page :

:::info PAD+
Les sections intitulées "PAD+" (encadrés bleus) donnent, à titre d'information, des indications sur la configuration PAD+ par rapport à la configuration standard Moodle. Pour bien comprendre cette configuration, il est utile d'avoir compris le modèle des [rôles et permissions Moodle](https://docs.moodle.org/3x/fr/R%C3%B4les_et_permissions). Ces rôles et permissions spécifiques à la PAD+ sont configurés dans la [phase de configuration post-installation](/installation/configuration).
:::

:::tip Votre instance
Les sections intitulées "Votre instance" (encadrés verts) rappellent les points que vous devez décider et configurer pour personnaliser votre instance à votre usage.
:::


## Vue globale d'une instance PAD+

L'organisation du contenu d'une instance PAD+ est basée sur l'arborescence des catégories de Moodle. Tout le contenu est donc hébergé sous la même arborescence, y compris les ressources professionnelles.

![Organisation hiérarchique du contenu d'une instance PAD+](/img/organisation/organisation-instance.png)

Sous la racine de l'arborescence (catégorie "Niveau supérieur" dans Moodle), on trouve donc les catégories principales de l'instance :

- une catégorie pour les séquences du chaque site : celle-ci accueillera les séquences construites par les professionnels et travaillées par les stagiaires sur un site donné.
- une catégorie pour les ateliers complémentaires de chaque site : celle-ci accueillera les séquences laissées en accès libre ou auto-inscription aux stagiaires du site donné. Pour que les stagiaires puissent parcourir cette catégorie (voir plus bas), il faut que ces catégories soient sous la racine.
- une catégorie à part pour les ressources professionnelles : cette catégorie sera accessible uniquement aux professionnels, pour faciliter le partage de séquences et ressources.

:::tip Votre instance
La granularité des catégories "site" est à déterminer par la gouvernance de l'instance : établissement, territoire... Un site correspond généralement à un regroupement d'un ensemble de professionnels et de stagiaires travaillant ensemble sur une zone géographique.
:::

Seuls les administrateurs et les gestionnaires d'instance (gestionnaire au niveau système dans Moodle) ont cette vue sur tout le contenu. En particulier, seuls ces usagers ont la capacité d'administrer l'arborescence des ressources professionnelles. Un gestionnaire d'instance agit donc comme référent des ressources professionnelles.

:::info PAD+
La permission `moodle/category:viewcourselist` est retirée par défaut à tous les usagers (y compris anonymes) pour que ceux-ci ne voient pas toute l'arborescence mais uniquement celle qui leur est destinée. La visibilité de l'arborescence `moodle/category:viewcourselist` est redéfinie pour tous les rôles pour s'appliquer uniquement dans leur contexte. Le gestionnaire d'instance voit donc toute l'arborescence au niveau système.
:::


## Vue d'une instance PAD+ pour un gestionnaire de site

Le rôle gestionnaire peut aussi être attribué à un usager au niveau d'une catégorie "site". Il s'agit généralement du rôle attribué aux ingénieurs pédagogiques sur site. Ils ont la capacité d'administrer l'arborescence locale (créer, modifier des catégories, ainsi que les séquences sous ces catégories) et de désigner les professionnels et les stagiaires ayant accès au site.

![Vue d'une instance PAD+ pour un gestionnaire de site](/img/organisation/organisation-gestionnaire-site.png)

:::tip Votre instance
Il n'y a pas de contraintes Moodle imposant la même arborescence sur chaque site. Chaque gestionnaire de site peut définir sa propre arborescence. Si vous voulez définir des règles d'organisation communes pour tous les sites, il faudra donc que chaque gestionnaire de site définisse son arborescence en respectant ces règles.
:::

### Cas particulier des ressources professionnelles

Un gestionnaire de site n'a les droits que sur l'arborescence de son site. Par défaut il n'aura donc aucun accès sur les ressources pour les professionnels qui constitue une catégorie à côté. Si on souhaite que cet usager ait accès aux ressources professionnelles, il faut donc décider avec quel rôle et donc quels droits :

- on peut le désigner contributeur, comme un professionnel, ce qui lui permet de consulter et contribuer au contenu des séquences, sans gérer l'arborescence ;
- on peut le désigner comme gestionnaire de la catégorie "ressources professionnelles", ce qui lui permet de gérer l'arborescence des ressources professionnelles, comme le gestionnaire d'instance.


## Vue d'une instance PAD+ pour un professionnel

L'usager professionnel est soit un formateur, soit un accompagnant du domaine MPS(I). Cet usager est défini par deux rôles à des niveaux différents dans la PAD+ :

- le rôle contributeur ("créateur de cours" dans Moodle) dans un site et dans les ressources professionnelles : celui-ci lui permet de parcourir les catégories de son site et les ressources professionnelles, de consulter les séquences sans être inscrit, de créer des séquences ;
- le rôle intervenant pour les séquences qu'il a créé (ou peut éditer) et dont il assure les inscriptions et le suivi des stagiaires ; cela inclut les ressources professionnelles dont il est l'auteur ;
- un troisième rôle "intervenant non éditeur" peut éventuellement être attribué dans une séquence, pour aider à l'évaluation et au suivi des stagiaires, sans pouvoir modifier le contenu.

![Vue d'une instance PAD+ pour un professionnel](/img/organisation/organisation-professionnel.png)

:::info PAD+
- Le rôle contributeur se voit associer quatre permissions : `moodle/category:viewcourselist` pour voir l'arborescence sur son site et dans les ressources professionnelles ; et `moodle/course:view` pour consulter une séquence sans être inscrit en tant qu'intervenant. Enfin `moodle/backup:backupcourse` et `moodle/restore:restorecourse` lui permettent d'accéder à la fonction de copie de séquences entre catégories, pour faciliter le partage.

- Le rôle intervenant est autorisé à inscrire un autre usager comme intervenant (en plus des classiques "intervenant non éditeur" et "stagiaire") pour pouvoir contribuer à plusieurs sur une séquence.
:::


## Vue d'une instance PAD+ pour un stagiaire

Le stagiaire n'a accès sur la plateforme qu'à ce qui l'intéresse directement : les séquences auxquelles il est inscrit et les séquences de son site en accès libre ou en auto-inscription. Ainsi son espace n'est pas occupé par du contenu qui ne le concerne pas.

- Sur son tableau de bord apparaissent les séquences auxquelles il est directement inscrit (par un professionnel ou par auto-inscription).
- Dans la liste des séquences, il peut parcourir les séquences disponibles en auto-inscription (ou accès libre) et s'inscrire lui-même.

![Vue d'une instance PAD+ pour un professionnel](/img/organisation/organisation-stagiaire.png)

:::info PAD+
- Le rôle stagiaire récupère la permission `moodle/category:viewcourselist`.

- Le rôle stagiaire peut être assigné au niveau d'une catégorie, ce qui lui permet d'être ajouté dans la catégorie "Ateliers complémentaires" de son site pour découvrir ceux-ci.
:::

:::caution Niveau des catégories "ateliers complémentaires" dans l'arborescence
Pour qu'un stagiaire puisse parcourir sa catégorie des ateliers complémentaires, il faut qu'elle soit déclarée au niveau supérieur. Elle ne peut pas être une sous-catégorie du site. On privilégiera une convention mettant côte à côte les catégories d'un site et les ateliers complémentaires associés au site :

- Site 1
- Ateliers Site 1
- Site 2
- Ateliers Site 2

C'est une limite actuelle de Moodle 3.x.
:::

:::info Menu latéral
Le [menu latéral peut être configuré](../marqueblanche/presentation#sidebarmenu) pour distinguer les catégories du modèle PAD+.
:::
