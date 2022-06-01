---
sidebar_position: 1
---
# Politiques d'utilisation

Moodle intègre différents outils pour gérer les politiques d'utilisation. L'outil recommandé **Politiques (tool_policy)** permet plusieurs choses :

- définir des documents de politiques d'utilisation
- afficher ces politiques en utilisant le thème de la plateforme
- demander l'accord des utilisateurs sur ces politiques pour leur ouvrir l'accès à la plateforme
- permettre les mises à jour des politiques, afficher les réponses des utilisateurs, ...


## Activation de l'outil de gestion des politiques

*Seul un administrateur a les autorisations pour cette action.*

L'activation se fait dans *Administration du site / Utilisateurs / (Protection des données et politiques) / **Réglages des politiques**.* Il faut sélectionner l'outil **Politiques (tool_policy)** comme *Gestionnaire des politiques du site* puis enregistrer les modifications. Les autres champs sont à ignorer.

![Activation de l'outil 'Politiques' dans l'administration](/img/legal/politique-activation.png)

Cette activation rend deux nouvelles options disponibles sous *Administration du site / Utilisateurs / Protection des données et politiques* :

- *Gérer les politiques* pour créer et modifier des politiques
- *Accords des utilisateurs* pour afficher le consentement des utilisateurs aux politiques

![Nouvelles options activées pour les politiques d'utilisation dans l'administration](/img/legal/politique-admin.png)

Ces deux nouvelles options deviennent aussi disponibles pour un gestionnaire d'instance.


## Configuration des politiques d'utilisation

*Administrateurs et gestionnaires d'instance ont accès à cette page.*

Une fois l'outil activé, il est possible de créer et gérer des politiques sous *Administration du site / Utilisateurs / (Protection des données et politiques) / **Gérer les politiques**.* Pour l'exemple d'une charte d'utilisation, voici les champs à remplir :

- Nom : *Charte d'utilisation*
- Type : politique de site
- Consentement utilisateur : **utilisateur authentifié**
- Version : date de publication
- Résumé & Politique complète : les deux champs sont requis et seront affichés avec le thème de la plateforme
- Accord optionnel : **Non** - rend l'accord obligatoire pour accéder à la plateforme ; si oui, l'utilisateur choisit entre accepter ou refuser la politique mais a accès dans tous les cas à la plateforme, ce qui sera visible via sa page profil)
- Statut de la politique : **Active**

Enregistrer la nouvelle politique. Elle apparaît alors dans le tableau des politiques avec un résumé des informations importantes. Entre autre on peut voir le nombre d'utilisateurs ayant accepté la politique, l'afficher, la modifier ou l'inactiver (une politique inactivée est conservée mais ne peut plus être réactivée - on peut la recréer par copie).

![Tableau des politiques d'utilisation](/img/legal/politique-manage.png)

### Mise à jour d'une politique

Dans le menu d'actions d'une politique, il est possible de l'éditer pour la modifier. Avant la sauvegarde, il est possible d'indiquer s'il s'agit d'une modification mineure ou non :

- si mineure (corrections typographiques, orthographiques...), l'accord des utilisateurs n'est pas redemandé ;
- sinon (le fond de la politique a changé), alors les utilisateurs devront redonner leur accord à la prochaine connexion.

![Choix de modification mineure pour l'enregistrement d'une politique](/img/legal/politique-update.png)


## Affichage du consentement des utilisateurs

*Administrateurs et gestionnaires d'instance ont accès à cette page.*

La page disponible sous *Administration du site / Utilisateurs / (Protection des données et politiques) / **Accords des utilisateurs** * permet de consulter l'accord des utilisateurs pour chaque politique définie.

:::info Accès pour l'utilisateur
Les utilisateurs peuvent consulter leur consentement personnel depuis leur page *Profil / Protection des données et politiques / **Politiques et accords** * et le modifier dans le cas d'un consentement optionnel.
:::
