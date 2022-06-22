---
sidebar_position: 2
---
# Survol d'une instance PAD+

Cette page donne une vision d'ensemble de la mise en place d'une instance PAD+, sans préjuger des choix spécifiques d'infrastructure (liés à la charge prévue) ou de fonctionnalités (par exemple, service de visioconférence), ni de l'intégration dans une infrastructure particulière.

## Vue d'ensemble d'une infrastructure PAD+

Le schéma ci-dessous présente les systèmes nécessaires au fonctionnement d’une instance PAD+. Il n'est pas exhaustif des choix possibles mais doit servir de point de départ à la réflexion sur l'infrastructure. On trouvera des détails et des approfondissements dans cette documentation et ailleurs sur le web.

![Vue d'ensemble des services d'une infrastructure PAD+](/img/installation/PAD_overview.png)

- Le service applicatif est un serveur web PHP standard.
    - La mise en place du cache Moodle intégré est fortement recommandée, par exemple en utilisant un serveur Redis.
    - Un "Load balancer" en frontal devant plusieurs serveurs web est aussi une bonne solution, auquel cas il faut prévoir comment le service de cache est partagé entre les serveurs.
    - Moodle propose plusieurs solutions pour se connecter à des annuaires d'utilisateur
- Le service de base de données est un serveur SQL standard - il faut cependant faire attention aux versions compatibles.
- Le stockage de fichiers (partagés) peut représenter un volume important de données (ressources des professionnels, travaux des stagiaires).
- Le service de visioconférence BigBlueButton a des prérequis spécifiques pour son serveur propre.
    - Il faut en particulier vérifier la disponibilité des ports réseaux.
    - Les enregistrements imposent de bien dimensionner ce serveur pour le traitement et le stockage.
    - La solution BigBlueButton est bien [intégrée à la PAD+ mais reste optionnelle](/installation/visioconference).
- Le service de backup doit être dimensionnée pour la base de données, les fichiers, et éventuellement les enregistrements.
- Le service SMTP sert pour l'envoi des notifications aux usagers.
- La recherche globale intégrée à Moodle dépend des capacités d'indexation de la base de données. Par exemple MariaDB ne supporte que les recherches sur terme complet. Des intégrations de solution comme Solr (avec recherche par joker) sont possibles.

## Check-list pour l'installation et la mise en place

Cette check-list explicite les principales étapes pour l'installation et la mise en place opérationnelle d'une instance PAD+.

### 1. Définition et mise en place de l'infrastructure

La première étape correspond à l'analyse des besoins, au choix des fonctionnalités et du dimensionnement pour la mise en place de l'infrastructure.

- Analyse des besoins fonctionnels et de la charge prévue
- Définition des services à mettre en oeuvre
- Choix de l'hébergement
    - Serveur web
    - Serveur base de données
    - Stockage et backup
    - Serveur visioconférence
    - Réseau (en particulier, ports pour la visioconférence)

### 2. Installation des services

La seconde étape correspond à l'installation des services fonctionnels par l'administrateur. Elle est en partie automatisée.

- [Déploiement initial de l'instance Moodle/PAD+](/installation/deploiement)
- [Installation du service BigBlueButton](/installation/visioconference) (si choisi)
    - Configuration Greenlight (optionnelle)
- [Configuration initiale de l'instance](/installation/configuration)
    - Configuration par Ansible
    - Service SMTP
    - Service backup
    - Gestion des sessions
    - [Tableau de bord par défaut](/installation/configuration#configuration-tableau-de-bord)
    - [Visite guidée de la page "Mes séquences"](/installation/configuration#visite-guidee)

### 3. Configuration de la marque blanche

La troisième étape peut être préparée en amont car elle implique la gouvernance, la définition du thème et des contenus d'accueil, la partie juridique...

- [Définition du thème graphique](/marqueblanche/presentation)
- [Rédaction des pages d'accueil & contact](/marqueblanche/pagesstatiques)
- [Définition des pages légales](/marqueblanche/presentation#documents-juridiques)
    - [Charte d'utilisation et consentement](/legal/politiques)
    - Mentions légales
    - Politique de confidentialité et [traitement des données](/legal/rgpd)

### 4. Mise en place opérationnelle

La quatrième étape correspond à la mise en place opérationnelle pour les sites (établissements...) usagers de la PAD+. A ce titre elle se fait avec la gouvernance, les ingénieurs pédagogiques, les professionnels "beta-testeurs"...

- [Définition de l'organisation des contenus](/organisation/contenu) (arborescence globale des sites)
    - Définition des [descriptions](/organisation/donnees#description-categories) et [gabarits](/organisation/donnees#gabarits)
    - [Import de données existantes](/organisation/donnees) (sauvegardes Moodle, SCORM)
- Accès des usagers
    - Création de comptes ou connexion avec un annuaire
    - [Attribution des rôles](/organisation/roles)

La dernière étape consiste en l'ouverture progressive aux professionnels pour qu'ils puissent créer leurs séquences, puis aux stagiaires...
