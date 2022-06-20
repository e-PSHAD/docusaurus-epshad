---
sidebar_position: 1
---
# Présentation

Seul un **administrateur de l'instance** a les droits de faire les modifications ci-dessous via les paramètres d'administration de Moodle.

Le [document de la marque blanche (PDF)](./ressources/PAD_Marqueblanche_08-06-2022.pdf) récapitule tous les éléments de la marque blanche et les principes d'accessibilité numérique applicables. La suite de la page détaille les procédures pour la configuration du thème sur la plateforme.

## Nom du site

Le nom du site est configuré initialement lors de la phase d'installation. Il peut être changé dans le panneau d'administration.

1. Allez sur *Administration du site / Page d'accueil*.
1. Vous pouvez modifier le *Nom complet du site* qui apparaît sur la page d'accueil.
1. Vous pouvez modifier le *Nom abrégé du site* qui est utilisé par exemple dans les onglets du navigateur.

![Edition du nom du site](/img/marqueblanche/nom-site.png)

## Logo du site

1. Allez sur *Administration du site / Présentation / Logos*.
2. Glissez votre logo dans l'espace **Logo compact** et enregistrez les modifications.

![Dépôt d'un logo dans l'administration PAD+](/img/marqueblanche/logo-epnak.png)

:::info
Le thème PAD+ est prévu pour utiliser seulement le **logo compact**. Si on place aussi une image dans l'espace **Logo**, cela changera la mise en page par endroits (page d'accueil, page de connexion).
:::

## Couleurs du thème

Allez sur l'interface *Administration du site / Présentation / Thèmes / PAD+*. Les trois couleurs du thème sont configurables via cette page. Il est recommandé de copier-coller directement la valeur hexadécimale en incluant le dièse, par exmple `#008A28`. Enregistrez ensuite les modifications.

![Panneau de configuration des couleurs du thème PAD+](/img/marqueblanche/settings-colors.png)

## Informations du pied de page {#pied-de-page}

Les informations du pied de page ci-dessous sont configurables. Il s'agit de liens vers des sites externes (aide, support) ou des pages internes (contact, mentions légales, politique de confidentialité) ainsi que du copyright. La configuration de ces informations est à faire dans *Administration du site / Présentation / Thèmes / PAD+*.

![Liens du pied de page](/img/marqueblanche/footer.png)

- "Aide" : lien vers l'aide en ligne pour les usagers
- "Support" : lien vers la gestion des tickets de support pour les usagers
- "Contact" : lien vers la page avec différents moyens de contacter les établissements
- "Mentions légales" : lien vers les informations légales sur la plateforme
- "Politique de confidentialité" : lien vers les informations de gestion et protection des données sur la plateforme
- "Copyright" : à définir en fonction de l'institution

### Documents juridiques

On distingue plusieurs documents à portée juridique :
- la **charte d'utilisation** (ou conditions générales d'utilisation) : celle-ci doit être acceptée par l'utilisateur pour pouvoir accéder à la plateforme ;
- la **politique de confidentialité** / protection des données : l'affichage est obligatoire mais ne demande pas le consentement de l'utilisateur (son consentement à l'utilisation des données personnelles doit avoir été recueilli *avant* l'ouverture du compte sur la plateforme, par exemple lors de l'inscription administrative) ;
- les **mentions légales** : affichage obligatoire, sans consentement de l'utilisateur.

Une fois ces documents prêts, il faut les mettre en place sur la plateforme :

- **charte d'utilisation** : il est recommandé d'utiliser [l'outil *Politiques* intégré à Moodle](/legal/politiques) pour gérer le consentement des utilisateurs ;
- une fois la page prête, copier-coller son lien dans la configuration du pied de page ;
- **politique de confidentialité** : une page statique suffit, soit externe, soit en la [créant via la page d'accueil](/marqueblanche/pagesstatiques#page-statique-contact), ce qui permet de l'intégrer au thème de la plateforme ;
- une fois la page prête, copier-coller son lien dans la configuration "Politique de confidentialité" du pied de page ;
- **mentions légales** : une page statique suffit, soit externe, soit en la [créant via la page d'accueil](/marqueblanche/pagesstatiques#page-statique-contact), ce qui permet de l'intégrer au thème de la plateforme ;
- une fois la page prête, copier-coller son lien dans la configuration "Mentions légales" du pied de page ;

## Menu latéral {#sidebarmenu}

Les catégories disponibles pour l'usager (professionnel ou stagiaire) sont affichées dans le menu latéral de navigation. Dans le [modèle PAD+](../organisation/contenu), un usager a accès entre une catégorie (pour un stagiaire) et trois catégories (pour un professionnel). Il existe deux choix d'affichage pour ces catégories dans le menu latéral :

- un affichage avec les noms propres des catégories, sans distinction (exemple à gauche) ;
- un affichage avec les icônes et intitulés facilitant le modèle PAD+ (exemple à droite).

    ![Menu latéral : exemples d'affichage des catégories avec leurs noms propres à gauche et intitulés PAD+ à droite](/img/marqueblanche/menus.png)

Le professionnel a accès à *toutes les séquences* et aux *ateliers collectifs* **sur son site (établissement, territoire)** mais ignore les autres sites. Les *ressources partagées* constituent une catégorie à part puisqu'elles permettent d'échanger avec les professionnels des autres sites. Le stagiaire a simplement accès aux *ateliers collectifs* **sur site**. Cette configuration PAD+ du menu latéral se fait dans l'interface *Administration du site / Présentation / Thèmes / PAD+* :

![Paramètres d'affichage des catégories dans le menu latéral](/img/marqueblanche/menu-settings.png)

- Le paramètre "les ateliers collectifs" permet de sélectionner toutes les catégories de l'instance qui seront désignées sous cet intitulé.
- Le paramètre "ressources partagées" permet de sélectionner la catégorie qui apparaîtra sous cet intitulé dans le groupe en bas du menu latéral.
- Le paramètre "toutes les séquences" donne cet intitulé à la première catégorie de l'usager (dans l'ordre) qui ne correspondrait pas aux critères ci-dessus. Il s'agit en quelque sorte de la catégorie par défaut pour le professionnel.

:::info Règles d'affichage
Ces paramètres n'affectent que **l'affichage dans le menu latéral**. L'accès des usagers aux catégories se gère par l'[attribution des rôles](../organisation/roles.md). Dans tous les cas, le **menu latéral affiche toujours toutes les catégories disponibles** pour l'usager, avec ou sans les intitulés PAD+.

**Cas particulier :** ces règles d'affichage s'appliquent dans un modèle PAD+ standard avec 3 catégories max par professionnel. Elles sont désactivées pour un usager qui a accès à plus de 3 catégories. Par exemple si un gestionnaire de site a accès à plusieurs sites (donc plus de 3 catégories), il verra toutes les catégories affichées avec leur nom propre, pour ne pas faire de distinction arbitraire.

![Menu latéral avec accès aux catégories de plusieurs sites](/img/marqueblanche/menu-multisites.png)
:::

:::info Administrateurs et gestionnaires d'instance
Administrateurs et gestionnaires d'instance ne sont pas affectés par ces paramètres. Ils bénéficient d'un unique lien *"Toutes les catégories"* dans leur groupe d'administration latérale, qui permet d'accéder à la hiérarchie complète du site.
:::
