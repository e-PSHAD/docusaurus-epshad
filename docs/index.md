---
sidebar_position: 1
slug: /
sidebar_label: Accueil
---

# Documentation technique PAD+

La PAD+ est une extension de [Moodle](https://moodle.org/) qui conjugue trois piliers :
- un [modèle d'organisation](/organisation/contenu) du contenu et des rôles associés ;
- une [configuration spécifique](/installation/configuration) d'une trentaine de paramètres ainsi que des permissions ;
- des [extensions (plugins) et quelques modifications du code Moodle](/developpement/guide) open source.

Ce site présente les éléments pour l'installation, l'organisation et le développement d'une instance PAD+. Elle complète la [documentation Moodle](https://docs.moodle.org/) avec les spécificités de la PAD+ et fournit des pointures utiles vers celle-ci. Pour les aspects génériques de Moodle, se référer à sa documentation propre.

## Pour les administrateurs

La page **[Survol d'une instance PAD+](survol)** donne un aperçu d'une infrastructure type PAD+ ainsi qu'une check-list pour l'installation et la mise en place opérationnelle de la plateforme.

### Installation

- [Déploiement d'une nouvelle instance PAD+](installation/deploiement)
- [Configuration PAD+ post-déploiement](installation/configuration)
- [Installation de la visioconférence BigBlueButton](installation/visioconference)

### Marque blanche

- [Document de la marque blanche (PDF)](pathname:///ressources/MarqueBlanche.pdf) : récapitulatif des éléments de la marque blanche et des principes d'accessibilité numérique pour le choix des couleurs
- [Présentation](marqueblanche/presentation) : nom, logo, couleurs du thème, pied de page, documents juridiques...

## Pour les administrateurs et gestionnaires d'instance (système)

### Marque blanche

- [Page d'accueil et pages statiques](marqueblanche/pagesstatiques) : édition de la page d'accueil et ajout de pages statiques

### Organisation, données et rôles

- [Organisation et permissions](organisation/contenu) : principes d'organisation d'une instance PAD+, contraintes et  conventions d'usage, rôles et permissions des usagers
- [Création et import de données](organisation/donnees) : plusieurs outils pour faciliter la création ou l'import des catégories, séquences, utilisateurs et rôles
- [Attribution des rôles](organisation/roles) : procédures manuelles pour l'attribution des rôles utilisateurs à différents niveaux

Le **[Mémento](organisation/memento) est une référence rapide** pour ajouter un nouveau site sur la plateforme et désigner les rôles des utilisateurs.

## Politiques d'utilisation et protection des données (RGPD)

Cette section décrit les outils intégrés à Moodle pour gérer les politiques d'utilisation et le traitement des données pour la RGPD. Il est aussi possible de faire sans et de simplement référencer des documents externes via la [configuration du pied de page](/marqueblanche/presentation#pied-de-page).

- [Gestion des politiques d'utilisation](legal/politiques) : définition des politiques d'utilisation et gestion du consentement
- [Traitement des données pour la RGPD](legal/rgpd) : traitement des demandes des utilisateurs sur leurs données

## Pour les développeurs

### Développement

- La liste des [fonctionnalités PAD+](/developpement/features) pour une vue d'ensemble des spécificités par rapport à un Moodle standard
- Le [guide du développeur](developpement/guide) explique les différentes extensions du code Moodle pour la PAD+
- Comment [installer une instance PAD+ en local](developpement/setup-local) pour le développement ?
- [Personnalisation de la langue](developpement/custom-lang) : maintenance du paquetage et versioning des chaînes
- La page [migrations](developpement/migrations) explique les process de migration sous Moodle, en particulier pour Moodle 4

### Dépôts des sources

Pour modifier cette documentation, consulter la page dédiée à [l'édition](./doc-edition).

 - [Documentation technique PAD+](https://github.com/e-PSHAD/pad-doc) : sources de ce site
 - [Sources PAD+](https://github.com/e-PSHAD/PAD) : sources de l'application Moodle customisée pour la PAD+
 - [Infrastructure PAD+](https://github.com/e-PSHAD/pad-infra) : scripts et éléments techniques pour aider au déploiement d'une infrastructure PAD+
