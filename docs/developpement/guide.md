---
sidebar_position: 1
---
# Guide du développeur

La PAD+ est une extension de Moodle qui conjugue trois piliers :
- un [modèle d'organisation](/organisation/contenu) du contenu et des rôles associés
- une [configuration spécifique](/installation/configuration) d'une trentaine de paramètres ainsi que des permissions
- des extensions (plugins) et quelques modifications du code Moodle open source

Cette page détaille le dernier point. Elle donne une compréhension générale des changements apportés sur la PAD+ par rapport à la base de code Moodle, en vue de faciliter sa maintenance. En particulier elle introduit les différents éléments pour :

- savoir comment les changements sont structurés
- connaître les repères essentiels pour modifier différents aspects de la PAD+
- savoir repérer ces changements dans le code

## Vue d'ensemble des changements du code

Les changements apportés pour la PAD+ sont localisés dans différents endroits, en priorité dans des plugins qui sont le mécanisme de base pour les extensions de Moodle.

- Plugin du **thème PAD+** (`theme/padplus`) : ce plugin exploite les [mécanismes des thèmes (MoodleDoc)](https://docs.moodle.org/dev/Themes) pour définir le style marque blanche de la PAD+ ainsi que les changements principaux sur les pages standards.
- Plugin des **extensions locales pour la PAD+** (`local/padplusextensions`) : ce plugin héberge des extensions qui ne peuvent être fait dans le thème, ainsi que les fonctions communes à toutes les extensions PAD+.
- Plugin **PAD+ progression stagiaire** (`blocks/padplusmyprogress`) : bloc pour l'affichage sur le tableau de bord des stagiaires, complémentaire de la page parcours.
- Plugin **PAD+ visioconférence** (`blocks/padplusvideocall`) : bloc pour passer des appels vidéos sur le tableau de bord des professionnels.
- De plus, le [plugin externe BigBlueButtonBN (Moodle)](https://moodle.org/plugins/mod_bigbluebuttonbn) est directement intégré dans la base de code PAD+ (comme dans Moodle 4).

Deux pages ont été développées pour de nouvelles fonctionnalités n'existant pas dans la version 3 de Moodle. Ces pages-fichiers suivent [le pattern "Transaction Script" (MoodleDoc)](https://docs.moodle.org/dev/Moodle_architecture#How_Moodle_code_is_organised) et ne sont pas hébergés directement sous un plugin PAD+. Le code qu'elles utilisent est cependant modularisé dans le plugin des **extensions locales**.

- La page **Mes séquences** sous `my/courses.php`, qui émule la page présente dans Moodle 4.
- La page **Mon parcours / Parcours des stagiaires** sous `my/progress.php`.

Des modifications à la base de code Moodle ont été apportées quand ce n'était pas possible autrement.

- Plusieurs modifications sur le bloc **Vue d'ensemble des séquences** présent sur le tableau de bord et la page "Mes séquences", ainsi que dans les **fonctions et services associés**.
- La mise à jour de la **bibliothèque d'icônes FontAwesome** de la version 4 vers la version 5.
- La définition des **couleurs d'avant-plan** accessibles pour l'éditeur ATTO (voir `lib/editor/atto/plugins/fontcolor/yui/src/button/js/button.js`).

Les derniers changements visibles dans le dépôt sont des fichiers ajoutés pour le développement (Docker) et le déploiement (GitHub Actions), qui n'impactent pas les fonctionnalités.


## Repères de développement PAD+

### Langage

Moodle propose un système de complet de traduction et adaptation des chaînes de langage dans l'interface.

- Les nouvelles chaînes des extensions PAD+ sont définies sous **`theme/padplus/lang`** pour toues les plugins PAD+ à l'exception de `blocks/padplusvideocall`.
- Les chaînes standards modifiées pour la PAD+ sont définies dans un **[paquetage de personnalisation](/developpement/custom-lang)**.

Cette approche permet de limiter le nombre d'endroits où rechercher ces chaînes.

### Apparence & marque blanche (styles)

Les styles de la PAD+ sont une extension du thème par défaut Boost de Moodle (lui-même basé sur Bootstrap v4). Les extensions sont toutes localisées sous **`theme/padplus/scss`** pour faciliter la réutilisation et la modification, y compris pour les autres plugins PAD+.

```
    📂 scss
    ┣ pre.scss  # définition des couleurs et variables de base, surchargées par la marque blanche
    ┣ post.scss # définition des règles PAD+ surchargeant Boost
    ┗📂 post
      ┣ _animations.scss
      ┣ _focus.scss      # redéfinition des styles de focus pour différents éléments
      ┣ _typography.scss # règles typographiques de base
      ┣📂 components # composants graphiques réutilisables
      ┣📂 layouts    # mise en page générale des pages
      ┣📂 mixins     # fonctions réutilisables
      ┗📂 pages      # règles spécifiques à chaque page
```

Les paramétrages de la marque blanche dans l'administration sont pris en compte par la fonction `theme_padplus_get_main_scss_content` de `/theme/padplus/lib.php`.

### Icônes

Afin de mettre à jour le panel d'icônes disponibles, la version 5 de FontAwesome a été installé dans le thème Boost (dont hérite le thème PAD+). Cette mise à jour demande des modifications particulières : voir le fichier [fontawesome/readme_moodle.txt](https://github.com/e-PSHAD/PAD/blob/pad-main/theme/boost/scss/fontawesome/readme_moodle.txt) et le [commit "DANGER: fix FA5 to be used by Moodle Boost theme"](https://github.com/e-PSHAD/PAD/commit/ed65f58ee493c92b8e6a316eab6058f459a67a65) pour la façon de procéder.

Par endroit, Moodle rajoute une surcouche pour insérer des icônes. Cette surcouche peut être étendue ou surchargée dans la classe `theme/padplus/classes/output/icon_system_fontawesome.php`.

### Navigation latérale

Le menu de navigation qui apparaît dans la colonne latérale est construit en fonction de l'utilisateur et de la page sur laquelle il se trouve. Moodle passe par plusieurs étapes complexes pour construire ce menu. Cette section récapitule la couche apportée par la PAD+.

- la fonction `local_padplusextensions_extend_navigation` dans la fichier `local/padplusextensions/lib.php` permet d'ajouter des éléments à la navigation globale (par exemple l'accès aux pages "Mes séquences" et "Mon parcours").
- Le fichier surchargé `theme/padplus/layout/columns2.php` définit l'ordre et l'affichage final des éléments dans le menu latéral, en particulier l'accès aux catégories de séquences.

### Structure et rendu HTML

Le thème PAD+ surcharge quand c'est nécessaire la structure et le rendu HTML du thème Boost. Il utilise les deux mécanismes qui coexistent dans Moodle pour cela :

- les classes `renderer`, qui peuvent générer directement du HTML et être [surchargées dans Moodle (MoodleDoc)](https://docs.moodle.org/dev/Overriding_a_renderer) ;
- les fichiers `mustache`, qui utilisent les [modèles mustache pour HTML (MoodleDoc)](https://docs.moodle.org/dev/Templates), mais présents uniquement dans les parties les plus récentes de Moodle.

La surcharge dans un thème repose sur des conventions de nommage aux règles complexes. Il est donc recommandé de s'inspirer de l'arborescence décrite ci-dessous.

```
 📂 theme
  ┗📂 padplus
    ┣📂 classes         # surcharge des classes renderer
    ┃ ┗📂 output
    ┃   ┣ core_renderer.php             # fonctions de rendu pour les éléments communs de l'interface
    ┃   ┣ format_topics_renderer.php    # fonctions de rendu des activités dans les séquences thématiques
    ┃   ┣ icon_system_fontawesome.php   # extensions du système d'icône (voir ci-dessus)
    ┃   ┗📂 core
    ┃     ┗ course_renderer.php         # fonctions de rendu de l'arborescence des catégories et séquences
    ┣...
    ┣📂 layout
    ┃ ┗ columns2.php     # contexte pour la mise en page "2 colonnes" de Boost (menu latéral)
    ┣...
    ┗📂 templates       # surcharge des fichier mustache
      ┣📂 block_myoverview  # modèles pour le bloc "vue d'ensemble des séquences"
      ┣📂 core              # modèles génériques (blocs, fil d'ariane, entête de page)
      ┣📂 core_calendar     # modèles pour les calendriers
      ┣📂 core_course       # modèles génériques pour les séquences et activités
      ┣...
      ┗📂 theme_boost
        ┣ flat_navigation.mustache  # modèle pour le menu latéral, lié à columns2.php
        ┣ footer.mustache           # pied de page général
        ┗ navbar.mustache           # entête général (bandeau de navigation sur le site)
```

### Mes séquences et bloc vue d'ensemble

La page "Mes séquences" affiche toutes les séquences auxquels l'utilisateur est inscrit, en qualité de stagiaire, intervenant ou autre. Cette page existe dans Moodle 4 mais pas dans Moodle 3. Il s'agit en fait d'une nouvelle page affichant le bloc "Vue d'ensemble des séquence". Celui-ci est déjà présent sur le tableau de bord avec d'autres blocs (progrès, événements, visioconférence) mais cette page permet de n'afficher que les séquences.

```
Voir
- page my/courses.php
- classe local/padplusextensions/classes/output/mycourses_renderer.php
```

Le bloc "Vue d'ensemble des séquence" a été adapté pour simplifier ses fonctionnalités et promouvoir les filtres d'affichage. Cependant toutes les modifications apportées n'ont pu être modularisées dans les plugins PAD+. Cette section détaille donc les différents changements du bloc.

#### Options de configuration

Les options de filtre et d'affichage sont modifiées par la [configuration automatique](/installation/configuration) (visible sous *Administration du site / Plugins / Blocs / **Vue d'ensemble des séquences** *) :

- filtres disponibles
- affichage en carte ou liste uniquement

#### Apparence et affichage

- Modification de l'apparence du bloc pour plus de lisibilité
- Affichage du nombre total de séquences dans le filtre "Toutes mes séquences"
- Séquences affichées par ordre de consultation (les plus récentes en premier) ; options de tri masquées.
- Ajout en favori mis en avant ; option pour cacher des séquences retirée.

```
Voir
- styles theme/padplus/scss/post/components/_block_padplusmyprogress.scss
- modèles mustache surchargés theme/padplus/templates/block_myoverview
```

#### Sauvegarde des options

Par défaut Moodle mémorise les dernières options choisies par l'utilisateur. Cette sauvegarde automatique est désactivée car elle perturbe les utilisateurs en modifiant l'affichage par défaut de la page.

```
Voir modules Javascript surchargés PAD/theme/padplus/amd/src/myoverview_*.js
```

#### Modifications en profondeur

:::warning Modifications dans Moodle
Les fonctionnalités ci-dessous ont demandé des modifications ou des correctifs dans la base de code Moodle. La liste des fichiers impactés est donnée à titre indicatif, cependant ces modifications induisent une bonne compréhension du code Moodle.
:::

- **Ajout du filtre "Mes ressources professionnelles" pour les professionnels**
    - blocks/myoverview/classes/output/main.php
    - blocks/myoverview/lib.php
    - blocks/myoverview/settings.php
    - course/externallib.php
    - course/lib.php
    - local/padplusextensions/lib.php
- **Affichage des tags pour repérer les ateliers complémentaires et les ressources professionnelles**
    - course/classes/external/course_summary_exporter.php
    - course/externallib.php
- **Affichage d'une pagination classique**
    - blocks/myoverview/amd/src/view.js
    - lib/amd/src/paged_content_factory.js

:::info Détail des changements
Le [commit "Merge branch 'my-sequences' into pad-dev"](https://github.com/e-PSHAD/PAD/commit/d5a3e0fb9c260648de6cc478cb8e87c3d8358c7b) intègre la plupart des changements décrits ci-dessus. Voir aussi la [section sur le détail des changements ci-dessous](#details-changements) pour les repères dans le code.
:::


### Parcours des stagiaires

La page **Mon parcours / Parcours des stagiaires** est une fonctionnalité spécifique de la PAD+. Elle se trouve définie par la page `my/progress.php` et des modules sous `local/padplusextensions`.

- La page d'entrée `my/progress.php` initialise la page et appelle la classe `myprogress_renderer` pour le rendu initial ;
- dans le navigateur, le module Javascript `myprogress_view` interroge le service web `progress_overview` pour récupérer les données de progression, fait le rendu final et gère les interactions ;
- les données de progression sont calculées dans les fonctions de `progresslib.php` ;
- l'export Excel est réalisé dans `progress_xls.php` grâce à la bibliothèque Excel intégrée à Moodle.

Le bloc **PAD+ progression stagiaire** affiché sur le tableau de bord des stagiaires utilise les mêmes modèle et fonction que le résumé affiché en tête de la page "Parcours".


### Visioconférence

Le [plugin externe BigBlueButtonBN (Moodle)](https://moodle.org/plugins/mod_bigbluebuttonbn) est directement intégré dans la base de code PAD+. Il permet d'ajouter l'activité "classe virtuelle" dans les séquences. Aucune modification n'a été apportée à ce plugin.

La PAD+ ajoute deux fonctionnalités pour faciliter la création de visioconférence hors des séquences :

- le bloc **PAD+ visioconférence** pour les professionnels permet d'inviter ou de créer un lien à partager pour une visioconférence avec des utilisateurs PAD+ ;
- un bouton d'appel direct en visioconférence est disponible sur la page profil des utilisateurs (voir la fonction `render_context_header` du `core_renderer` PAD+).

Ces extensions pour la visioconférence sont en grande partie localisées dans le plugin `blocks/padplusvideocall`. Le plugin contient les bibliothèques, modèles mustache, modules Javascript pour l'interface et les interactions avec l'utilisateur. Il utilise la bibliothèque du plugin BigBlueButtonBN pour interagir avec le serveur BigBlueButton.

En plus des interfaces et des modules Javascript, le bloc Visioconférence définit plusieurs entités Moodle sous `blocks/padplusvideocall/db` :

- 2 permissions (pour les professionnels) `block/padplusvideocall:createvideocall` et `block/padplusvideocall:invitevideocall` ;
- 2 notifications, pour les invitations et les liens de visioconférence ;
- 2 services web, un pour la recherche des participants et un pour la génération de lien de visioconférence.

Quand un participant rejoint une visioconférence par un des deux moyens ci-dessus, il est dirigé vers la page `blocks/padplusvideocall/bbbpad_videocall.php`. Cette page sert de contrôleur pour entrer et sortir d'une visioconférence (son rôle est similaire au contrôleur `mod/bigbluebuttonbn/bbb_view.php` du plugin BigBlueButtonBN). En particulier, le contrôleur vérifie que la session de visioconférence existe ou la crée si l'utilisateur en a les droits, avant de rediriger celui-ci vers l'interface BigBlueButton.

## Comment repérer le détail des changements ? {#details-changements}

Les mécanismes de surcharge propres à Moodle imposent souvent de copier des fichiers ou des fonctions entières. Cette approche aboutit malheureusement à dupliquer le code et noie parfois les modifications dans un vaste ensemble. Pour comprendre précisément comment les modifications impactent le code original, il est utile d'exploiter les mécanismes suivant.

- Des marqueurs **PADPLUS** dans les fichiers PHP et Javascript permettent de repérer les sections de code patchés, en particulier dans les fonctions longues. Il peut s'agir du code :
    - directement dans les fichiers source de Moodle, hors des plugins PAD+ ;
    - dans les fichiers PAD+ qui surchargent Moodle par copie.

Cet extrait de la fonction `coursecat_coursebox` surchargée dans `course_renderer.php` montre la section modifiée pour l'affichage des séquences et des ateliers complémentaires (NB - cette fonction est originellement définie dans `course/renderer.php`) :

```php
/*** PADPLUS: course image & course/workshop info. */
$content .= html_writer::start_tag('div', array('class' => 'coursecat-image'));
$content .= $this->coursebox_image($course);
$content .= html_writer::end_tag('div');
// The content of the coursebox changes depending on whether it is a course or a workshop.
if (course_is_workshop($course, $this->page->theme)) {
    ...
} else {
    ...
}
$content .= $this->coursecat_coursebox_details($course, $chelper, $contactbox, $studentsbox, $buttonlabel, $boxclassname);
/*** PADPLUS END */
```

- **L'historique git**, en particulier en utilisant les commits préfixés par **`override:`** comme référence (il s'agit toujours de la copie du code source original, avant modification). Cette méthode est utilisée pour les fichiers PHP et Javascript mais aussi pour les modèles Mustache.

Dans l'exemple ci-dessous, le modèle `loginform.mustache` a été copié tel quel dans le thème PAD+ avant d'être surchargé dans le commit suivant *"Toggle password visibility..."* pour l'ajout du bouton d'accessibilité du mot de passe.

![Exemple d'un historique git avec l'override sur le template de login](/img/developpement/git_override.png)

- Le développement PAD+ a commencé avec la version 3.11.4 de Moodle. Pour voir la **liste complète des fichiers affectés**, il suffit de faire un `diff` avec la *dernière version* de Moodle intégrée.

Par exemple, avec le tag v3.11.7 de la version de mai 2022, la commande est :

    git diff v3.11.7 --stat

Cette liste affiche tous les fichiers différents de la PAD+ par rapport à la dernière version intégrée de Moodle.
