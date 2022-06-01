---
sidebar_position: 2
---
# Traitement des données

Cette page reprend ou complète les informations sur la [protection des données dans Moodle (MoodleDoc)](https://docs.moodle.org/3x/fr/Plugin_Data_Privacy). La CNIL publie aussi un [guide pratique pour la conformité au RGPD (CNIL)](https://www.cnil.fr/fr/rgpd-passer-a-laction).

## Demandes des utilisateurs au DPD (Délégué à la Protection des Données)

Par défaut, seuls les administrateurs ont les droits pour traiter les demandes au DPD. Il est possible de désigner un utilisateur non administrateur en lui affectant le [rôle de Délégué à la Protection des Données (MoodleDoc)](https://docs.moodle.org/4x/fr/D%C3%A9l%C3%A9gu%C3%A9_%C3%A0_la_Protection_des_Donn%C3%A9es).

Il faut aussi mettre en place et publier (par exemple dans les [documents juridiques](/marqueblanche/presentation#documents-juridiques)) comment les utilisateurs peuvent contacter le DPD. Il peut s'agir par exemple :

- d'une boîte mail de contact pour le DPD
- ou directement sur la plateforme (voir ci-dessous)

### Interface de traitement des demandes

Depuis la page *Administration du site / Utilisateurs / (Protection des données et politiques) / **Demande de données**,* le DPD a la possibilité de créer ou consulter les demandes des utilisateurs :

- export des données d'un utilisateur
- suppression des données d'un utilisateur
- message d'un utilisateur si celui-ci a contacté le DPD via la plateforme

![Interface des demandes au DPD](/img/legal/dpd-demandes.png)

Le DPD peut alors approuver ou refuser chaque demande. Par exemple, après approbation d'une demande d'export, une archive de toutes les données de l'utilisateur est générée et diponible par défaut pendant une semaine. L'utilisateur reçoit aussi une notification lui permettantt de télécharger l'archive. Pour une demande de suppression, l'utilisateur est averti par email de l'approbation et ne peut plus se connecter.

### Permettre aux utilisateurs de contacter le DPD via la plateforme

Dans les options de la page *Administration du site / Utilisateurs / (Protection des données et politiques) / **Réglages de protection des données**,* cocher la case *Contacter le délégué à la protection des données* permet aux utilisateurs de contacter le DPD via leur page profil.

![Option de contact DPD sur la plateforme](/img/legal/dpd-contact.png)

Plusieurs options deviennent alors disponibles pour l'utilisateur :

- contacter le délégué
- demander l'export complet de ses données
- demander la suppression de son compte
- consulter ses demandes
- consulter les [politiques et consentement](/legal/politiques) si configuré

![Interface de contact du DPD sur la page profil d'un utilisateur](/img/legal/dpd-profil.png)

## Conservation et suppression des données

Par défaut, toutes les données sont supprimées quand une suppression manuelle ou une demande de suppression sont exécutées.

### Définition d'une politique de conservation

Pour définir une politique différenciée de conservation des données, il faut rentrer sur la page *Administration du site / Utilisateurs / (Protection des données et politiques) / **Registre des données**.* Le registre est organisé par contexte hiérarchique :

- données du site : accès, navigation, ...
  - données de l'utilisateur (hors séquence) : préférences, contacts, messages, ...
  - données des catégories
    - données des séquences : évaluation finale
      - données des activités et ressources : participation, rendus, évaluations des activités, ...
      - données des blocs

On peut définir des catégories de données (description des données conservées) et des finalités.
Les finalités décrivent dans quels buts les données sont conservées, pour quelles raisons légales, et pour combien de temps. On peut marquer une finalité comme **protégée** ce qui empêche sa suppression immédiate en cas de suppression manuelle / demande de l'utilisateur :

> La conservation de ces données a une priorité légale plus importante que le droit à l'oubli de l'utilisateur. Ces données ne seront supprimées qu'après l'échéance de la durée de conservation.

A chaque contexte hiérarchique on peut ensuite associer une catégorie et une finalité. Il faut initialement associer une catégorie et une finalité générale au contexte du site. Tous les autres contextes en héritent. Si des données doivent être conservées plus longtemps (ou moins longtemps) dans un contexte donné, il faut définir et associer d'autres catégories et finalités.

![Période de conservation de 6 mois configurée pour les données dans le context utilisateur](/img/legal/dpd-registre.png)

On peut aussi *définir les réglages par défaut* (catégorie & finalité) pour chaque type de contexte hiérarchique (catégorie, séquence, activités, blocs).

La page *Registre des données personnelles des plugins* décrit en détail les données stockées par chaque plugin.

### Expiration et suppression des données

Avec la période de conservation, la date d'expiration est calculée à compter de :

- la date de dernière connexion pour les données utilisateurs ;
- la date de fin de séquence pour les données des séquences. Le paramètre *"Considérer les séquences sans date de fin comme actives"* disponible sur la page **Réglages de protection des données** influe aussi sur cette conservation.

Quand la période de conservation des données est échue, celles-ci sont affichées sur la page *Administration du site / Utilisateurs / (Protection des données et politiques) / **Suppression de données**.* L'administrateur doit alors confirmer la suppression.
