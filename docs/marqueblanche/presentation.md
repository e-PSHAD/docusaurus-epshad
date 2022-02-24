---
sidebar_position: 1
---
# Présentation du site

Seul un **administrateur de l'instance** a les droits de faire les modifications ci-dessous via les paramètres d'administration de Moodle.

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

## Informations du pied de page

Les informations du pied de page ci-dessous sont configurables. Il s'agit de liens vers des sites externes (aide, support) ou des pages internes (contact, mentions légales, politique de confidentialité) ainsi que du copyright. La configuration de ces informations est à faire dans *Administration du site / Présentation / Thèmes / PAD+*.

![Liens du pied de page](/img/marqueblanche/footer.png)

- "Aide" : lien vers l'aide en ligne pour les usagers
- "Support" : lien vers la gestion des tickets de support pour les usagers
- "Contact" : lien vers la page avec différents moyens de contacter les établissements
- "Mentions légales" : lien vers les informations légales sur la plateforme
- "Politique de confidentialité" : lien vers les informations de gestion des données sur la plateforme
- "Copyright" : à définir en fonction de l'institution

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
