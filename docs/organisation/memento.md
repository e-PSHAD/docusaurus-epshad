---
sidebar_position: 4
---
# Mémento organisation et rôles

## Désignation d'administrateurs ou gestionnaires d'instance

:::info Instance PAD+
Une instance désigne une plateforme PAD+ au complet. Ces personnes ont donc accès à toutes les données de tous les sites (établissements, territoires...) hébergés sur l'instance.
:::

- [Administrateur](./roles#administrateur) : depuis la page *Administration du site / Utilisateurs / (Permissions) / **Administrateurs du site**.*
- [Gestionnaire d'instance](./roles#gestionnaire-instance) : depuis la page *Administration du site / Utilisateurs / (Permissions) / **Attribution des rôles système**.*

## Ajout d'un site PAD+

:::info Site PAD+
Un site PAD+ correspond à un regroupement de professionnels et de stagiaires travaillant ensemble sur une zone géographique (par exemple un établissement, un territoire).
Une plateforme PAD+ peut donc héberger plusieurs sites. Cela se matérialise sous forme de catégories sur la plateforme.
:::

Pour ajouter un nouveau site, il faut :

1. créer une **catégorie pour le site** *au niveau supérieur* des catégories, depuis la page  *Administration du site / Séquences / **Gestion des séquences et catégories** *
1. créer l'arborescence des sous-catégories pour les parcours (par exemple : plateformes et modules) dans la nouvelle catégorie de site
1. créer une catégorie pour les **ateliers complémentaires** *au niveau supérieur* des catégories, à côté donc de la catégorie du site
1. [configurer le menu latéral](/marqueblanche/presentation#sidebarmenu) pour le bon affichage de la catégorie "Atelier"

## Attribution des rôles des usagers sur un site PAD+

Quand l'arborescence minimale d'un site est créée, il faut donner l'accès aux usagers suivant leur rôle : gestionnaire, professionnel ou stagiaire.

:::success Outils
Il existe des outils pour faciliter [la création des nouveaux utilisateurs](./donnees#users-register) et [l'attribution des rôles dans les catégories](./donnees#users-categories).
:::

### Désignation d'un gestionnaire de site

Un [gestionnaire de site](./roles#gestionnaire-de-site) a les droits d'administration des sous-catégories et des séquences ainsi que d'attributions des rôles pour une ou plusieurs catégories.

Depuis la page  *Administration du site / Séquences / **Gestion des séquences et catégories** :*

1. attribuer le rôle **gestionnaire** sur la catégorie du site (ouvrir le menu d'actions de la catégorie, choix "Attribution des rôles")
1. attribuer le rôle **gestionnaire** sur la catégorie "Ateliers" associée au site
1. attribuer le rôle **contributeur** ou **gestionnaire** sur la catégorie des ressources professionnelles

### Désignation d'un professionnel formateur ou MPS(I)

Depuis la page  *Administration du site / Séquences / **Gestion des séquences et catégories** :*

1. attribuer le rôle **contributeur** sur la catégorie du site (ouvrir le menu d'actions de la catégorie, choix "Attribution des rôles")
1. attribuer le rôle **contributeur** sur la catégorie "Ateliers" associée au site
1. attribuer le rôle **contributeur** sur la catégorie des ressources professionnelles

Les [professionnels](./roles#professionnel) deviennent automatiquement **intervenants** des séquences qu'ils créent ou copient, ou bien peuvent être désignés comme tels par leurs pairs via les inscriptions dans l'administration d'une séquence.

### Désignation d'un stagiaire

Depuis la page  *Administration du site / Séquences / **Gestion des séquences et catégories** :*

1. attribuer le rôle **stagiaire** dans la catégorie "Atelier" liée à son site (pour l'accès aux ateliers en auto-inscription).

Les [stagiaires](./roles#stagiaire) sont inscrits par les professionnels dans les séquences suivant leur parcours.
