---
sidebar_position: 10
---
# Personnalisation de la langue

Cette page rappelle brièvement le processus de [personnalisation de la langue dans Moodle (MoodleDoc)](https://docs.moodle.org/3x/fr/Personnalisation_de_la_langue) et explique comment versionner le paquetage et les différences dans le [dépôt pad-infra](https://github.com/e-PSHAD/pad-infra/). Ce paquetage est utilisé pour [les nouveaux déploiements et les mises à jour](../installation/configuration#installation-du-paquetage-de-langue-personnalis%C3%A9-pour-la-pad) des instances PAD+.

## Interface de personnalisation de la langue

Dans l'interface *Administration du site / Langue / Personnalisation de la langue* :

1. Choisissez le français.
1. Cliquez sur *Ouvrir le paquetage de langue pour modification*.
1. Après chargement, cliquez sur *Continuer*.
1. Dans l'interface de personnalisation, sélectionnez le ou les fichiers de chaîne et ajoutez des filtres pour trouver les chaînes à personnaliser.
1. Entrez un intitulé personnalisé pour chaque chaîne ciblé.
1. Cliquez sur *Enregistrer et continuer les modifications* pour chercher d'autres chaînes.
1. Cliquez sur *Enregistrer les modifications dans le paquetage de langue* pour sortir.
1. Cliquez sur *Continuer* pour finaliser l'enregistrement.

Pour identifier le fichier source et la clé d'une chaîne à personnaliser, il faut :
- être en mode développeur ou activer l'option *Afficher l'origine des chaînes de caractères* dans *Administration du site / Développement / Débogage* ;
- allez sur la page contenant la chaîne en ajoutant « &strings=1 » ou « ?strings=1 » à la fin de l'URL.


## Versioning du paquetage et des chaînes dans le dépôt pad-infra

S'il s'agit de modifications du thème PAD+ générales, il faut ensuite exporter le paquetage et versionner les modifications dans le [dépôt pad-infra](https://github.com/e-PSHAD/pad-infra/).

Dans l'interface *Administration du site / Langue / Personnalisation de la langue* :

1. Choisissez le français
1. Cliquez sur *Exporter des chaînes personnalisées*
1. Gardez le choix par défaut avec tous les composants et cliquez sur *Exporter des chaînes personnalisées*.
1. Enregistrez l'archive générée (customlang_fr.zip) et écrasez l'ancienne archive dans le dépôt `pad_infra/lang`.
1. Pour faciliter la consultation des modifications sous git, il est recommandé d'effacer le dossier `pad_infra/lang/customlang_fr` puis d'y extraire l'archive pour remplacer les anciens fichiers.
1. Commitez les changements (archive + fichiers sources modifiés) pour garder l'historique des modifications des chaînes.
