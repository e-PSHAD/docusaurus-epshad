---
sidebar_position: 15
---
# Migrations

Cette page récapitule les informations essentielles pour la mise à jour du code et les migrations de version Moodle.

## Mise à jour du code depuis le dépôt

A titre d'exemple, voici les étapes d'une mise à jour entre le [dépôt Github PAD](https://github.com/e-PSHAD/PAD) et le serveur démo.

1. Le serveur est placé en [mode maintenance (MoodleDoc)](https://docs.moodle.org/311/en/Maintenance_mode) pour prévenir les accès des utilisateurs pendant la mise à jour (sauf administrateurs).
1. Une commande rsync est lancée pour synchroniser les fichiers serveurs avec la version courante du dépôt.
1. Le script `/admin/cli/upgrade.php` de Moodle est appelé sur le serveur au cas où une migration de versions soit nécessaire.
1. Tous les caches Moodle sont purgés.
1. Le mode maintenance est désactivé pour rouvrir l'accès aux utilisateurs.

Ces étapes sont définis dans un [workflow Github Actions](https://github.com/e-PSHAD/PAD/actions/workflows/upgrade-pad.yml) et exécutées quand la branche de déploiement (ici `pad-eig`) est mise à jour. Elle nécessite l'installation d'une clé SSH sur Github et le serveur cible.

L'étape 3 ne déclenche pas systématiquement une migration. En effet il faut un changement de versions des plugins pour que Moodle effectue une migration. C'est nécessaire en particulier dès qu'il s'agit de modifier la base de données, de déclarer des services web, de nouvelles permissions ou notifications... Dans le cas où il s'agit d'une simple mise à jour des fichiers (cas courant pour les tests & démos en préproduction), l'étape 3 ne fera rien et l'étape 4 de purge des caches suffit.

## Migration mineure de Moodle

Les mises à jour sont annoncées sur la page officielle des [nouvelles de la communauté Moodle](https://moodle.org/news/). Elles sont aussi visibles sur chaque instance via la page *Administration du site / Notifications* (qui scanne aussi les mises à jours des plugins externes). Dans le cas de la PAD+, la façon la plus simple de récupérer ces mises à jour est via le [miroir officiel sur GitHub](https://github.com/moodle/moodle) où elles apparaissent via des tags git (voir la procédure ci-dessous).

Le mécanisme de surcharge des thèmes permet de customiser Moodle sans changer directement le code (dans la plupart des cas). Mais cela rend aussi plus délicat le suivi des évolutions du code original, car les mises à jour impactantes apparaissent indirectement dans le gestionnaire de version. La détection de régression peut se faire en lisant les release notes, guides de migration, avec des tests de non-régression, et en comparant les [changements PAD+ apportés au code original](guide#details-changements) et les nouveaux changements.

:::danger Migration irréversible
Moodle ne permet pas de faire des migrations descendantes sur la base de données. Autrement dit, toute migration est irréversible. Il est donc fortement recommandé de faire des sauvegardes de la base de données et de tester les migrations sur une copie de la base avant toute tentative en production.
:::

Les procédures décrites ci-dessous sont prévues pour la **mise à jour d'un [environnement local sous git](setup-local)** pour les tests, avant synchronisation du code et migration en production.

La procédure technique de mise à jour sous git est relativement simple :

1. Ajouter le dépôt original Moodle comme [dépôt distant](https://git-scm.com/docs/git-remote) (par exemple `git remote add upstream https://github.com/moodle/moodle`).
1. Récupérer les dernières versions de Moodle (`git fetch upstream` ou `git fetch --all`).
1. Lancer la fusion avec le commit de la version Moodle visée (par exemple `git merge v3.11.7` pour le tag `v3.11.7`). Il faut *résoudre les conflits éventuels* à cette étape avant de continuer.
1. Aller sur l'interface d'administration pour que Moodle détecte le changement de version et lance la migration.
1. Commencer les tests de non-régression.

### Cas d'un plugin externe (BigBlueButtonBN)

Pour la mise à jour d'un plugin externe comme BigBlueButton, il est recommandé de procéder différemment.

1. Récupérer [l'archive du plugin](https://moodle.org/plugins/mod_bigbluebuttonbn).
1. Supprimer le code de l'ancien plugin sous `mod/bigbluebuttonbn` (pour éviter de laisser des fichiers orphelins qui n'existent plus dans la nouvelle version).
1. Placer le contenu de l'archive sous `mod/bigbluebuttonbn`.
1. Aller sur l'interface d'administration pour que Moodle détecte le changement de version du plugin et lance la migration.
1. Commiter les changements si c'est ok.

Si un plugin externe pose problème et qu'un retour en arrière soit nécessaire, la seule solution est de le désinstaller pour réinstaller une version antérieure. L'étape 3 ci-dessous est indispensable car Moodle n'acceptera pas d'installer une version antérieure à la version enregistrée dans sa base. Ceci implique de supprimer les données liées au plugin.

1. Supprimer les fichiers du plugin.
1. Aller sur *Administration du site / Plugins / **Vue d'ensemble des plugins** *.
1. Chercher le plugin dans la liste (il apparaît en rouge car "Absent du disque dur") et **Désinstaller le plugin** puis confirmer la suppression du plugin et de ses données.
1. Placer la version antérieure du plugin.
1. Aller sur l'interface d'administration pour que Moodle détecte le "nouveau" plugin et lance l'installation.


## Migration vers Moodle 4

La mise à jour majeure de Moodle 4 met l'accent sur une [refonte de la disposition graphique et de la navigation (MoodleDoc)](https://docs.moodle.org/400/en/New_features). En théorie, la [procédure de mise à jour (MoodleDoc)](https://docs.moodle.org/400/en/Upgrading) est la même que pour une mise à jour mineure. En pratique, vu l'importance des changements de la PAD+, elle demande une approche plus minutieuse de chaque changement. Cette section fait le point sur les éléments a priori impactant pour la PAD+.

Autres sources d'information :
- les [Release notes de la version 4](https://moodledev.io/general/releases/4.0) pour une liste complète des changements ;
- les [notes aux développeurs](https://moodledev.io/docs/devupdate) contiennent des indications plus précises sur les changements impactant.
- on trouve dans chaque plugin Moodle un fichier `upgrade.txt` qui donne des indications spécifiques sur les changements de versions.

:::caution Etude des impacts
De façon générale, les changements importants dans l'interface de Moodle 4 imposent de réévaluer une bonne partie des choix faits pour la PAD+ basée sur Moodlee 3.11. En s'aidant du [guide du développeur](guide), il faut reprendre chaque élément et décider si le changement est obsolète ou doit être porté sur Moodle 4. C'est valable pour les plugins, les modifications profondes du code (bloc "vue d'ensemble des séquences") comme pour les surcharges de structure et de style dans le thème. On fera aussi attention aux [extensions de BigBlueButtonBN](#bigbluebutton-moodle4), qui voit une refonte en profondeur dans Moodle 4.
:::


### Apparence, structure, rendu (thème)

En raison du nombre de changements touchant de multiples endroits, cette phase demande sans doute le plus d'attention. On gardera en tête les objectifs globaux :

- l'implémentation de la marque blanche dans les styles, en particulier le respect de la couleur primaire ;
- la simplification du design des pages catégories, séquences, séances et les spécificités des ateliers complémentaires
- la clarification de la navigation entre séances et activités, par le fil d'Ariane, pour l'accès aux réglages des pages (page d'accueil, administration de la séquence, préférences utilisateurs), ...

:::warning Procédure de migration
Il est tout à fait possible que la mise à jour brute par un `git merge v4.0.0` ne permette pas d'avoir une plateforme fonctionnelle de suite à cause de problèmes dans le code ou dans l'affichage. La solution proposée est une approche basique à la "Feature Flag". Après l'intégration dans l'historique git (git merge finalisé) :

- désactiver toutes les surcharges PAD+ (mise en commentaire des méthodes surchargées, mise de côté des modèles mustache et styles scss surchargées) ;
- les réactiver une par une, en corrigeant au fur et à mesure les problèmes.

C'est une approche incrémentale qui permet de garder un regard critique sur les changements à conserver. Elle demande cependant une bonne [compréhension des changements du code](guide) à l'aide des [indices et de l'historique de développement](guide#details-changements).
:::


#### Accessibilité et responsive design

Pour chaque intégration d'une fonctionnalité, il est conseillé de faire des vérifications sur l'accessibilité et le responsive design, pour ne pas laisser ces aspects de côté. Sans être exhaustif, il s'agit par exemple de respecter la sémantique des balises HTML, l'ordre d'affichage, la navigation au clavier, le zoom sur les textes, l'affichage sur différentes tailles d'écrans (avec les outils développeurs des navigateurs). Le [pôle design des services numériques de l'état propose plusieurs ressources](https://design.numerique.gouv.fr/outils/) pour tester ces aspects, tel que le [diagnostic flash](https://design.numerique.gouv.fr/outils/diagnostic-flash/) ou la [checklist PiDila](https://design.numerique.gouv.fr/outils/checklist-pidila/) (en ignorant les aspects propres aux sites gouvernementaux).

:::info Breakpoints responsive design
Pour l'affichage des extensions PAD+ sur différentes tailles d'écran, les trois principaux breakpoints utilisés sont : **1389px, 1289px, 1042px**. Cependant d'autres breakpoints sont utilisés au cas par cas dans des requêtes `@media screen`. Le responsive design de Moodle fait le reste.
:::

#### Navigation latérale

La navigation est un des changements les plus visibles dans Moodle 4. Le menu latéral a été profondément remanié :

- la navigation globale du site se retrouve dans la barre du haut, qui devient la barre de principale de navigation ;
- la navigation vers les pages annexes d'une séquence (participants, évaluations) se retrouvent dans un menu d'onglets dans le corps de la séquence ;
- la navigation latérale ne montre plus que la structure des séances et activités de la séquence (cette information était cachée dans la PAD+ pour ne pas surcharger le menu latéral).

La nouvelle disposition répond à l'objectif de clarté et de simplicité visé pour la navigation de la PAD+ (qui était un compromis par rapport à l'ancienne conception technique). Il est donc proposé d'utiliser cette nouvelle disposition en ajoutant les éléments manquants :

- liens vers la page parcours et les catégories disponibles pour les usagers dans la navigation du haut (toutes les séquences, ateliers complémentaires, ressources professionnelles, ...)
- revoir l'accès simplifié aux pages annexes dans le menu des onglets (rapports d'activité et d'achèvement)

![Correspondance de la navigation latérale entre la PAD+ et Moodle 4](/img/developpement/migration-navigation.png)

Dans ce but il faut à la fois vérifier les éventuels changements au mécanisme d'extensions de la navigation et corriger les modèles et styles surchargés, dont certains peuvent être obsolètes.

#### Icônes FontAwesome

La bibliothèque FontAwesome du thème Boost n'a pas changé dans Moodle 4. Il s'agit toujours de la version 4.7. Pour rappel, la PAD+ exploite la version 5. Il faut donc vérifier que cette version reste bien intégrée lors de la migration.


### Plugin BigBlueButtonBN et extensions visioconférence {#bigbluebutton-moodle4}

Le plugin BigBlueButtonBN n'est plus un plugin externe mais est directement intégré à Moodle 4. Cependant il a fait l'objet d'une réécriture en profondeur pour cette intégration. Cette réécriture devrait aussi faire l'objet d'une [release 3.0 pour Moodle 3.11](https://github.com/blindsidenetworks/moodle-mod_bigbluebuttonbn).

Cela implique des adaptations pour les fonctionnalités visioconférence spécifiques de la PAD+ (bloc visioconférence et appel vidéo page profil), qui ont été développées sur la base de la version stable 2.4 du plugin BigBlueButtonBN. Il ne s'agit pas de changements en profondeur mais d'une adaptation des APIs, qui demandent cependant d'être étudiée avec un peu d'attention.

:::warning Procédure de migration
La procédure proposée est spécifique.

- [Supprimer le plugin BigBlueButtonBN](#cas-dun-plugin-externe-bigbluebuttonbn) avant l'intégration Moodle 4.
- Si besoin désactiver/supprimer les extensions PAD+ liées à BigBlueButtonBN (par exemple enlever le bloc, enlever les dépendances entre plugins) pour éviter les erreurs liés aux fichiers manquant.
- Intégrer Moodle 4.
- Adapter les fonctions du plugin `blocks/padplusvideocall` à l'API Moodle 4.
:::

Les impacts des changements dans la PAD+ devraient être cependant limités.
- Il s'agit des fichiers `blocks/padplusvideocall/lib.php` et `blocks/padplusvideocall/bbbpad_videocall.php`, qui font tous les deux appellent aux fonctions `bigbluebuttonbn_*` définies dans `mod/bigbluebuttonbn/locallib.php`.
- Sous Moodle 4, ces fonctions sont transformées en méthodes dans les classes `plugin`, `meeting` et `bigbluebutton_proxy`. Le tableau ci-dessous donne quelques correspondances pour démarrer mais il faut cependant creuser la compatibilité des instances et des paramètres. Si la classe `bigbluebutton_proxy` est triviale à utiliser, c'est moins le cas pour la classe `meeting`, qui est liée aux `instances` des activités BigBlueButton dans les séquences (ce qui n'est pas le cas pour les visioconférences directes du tableau de bord et des pages profil). Quelques fonctions seraient possiblement à extraire pour retrouver une certaine indépendance.

<table>
    <caption>Migration vers l'API BigBlueButtonBN de Moodle 4.</caption>
    <thead>
        <tr>
            <th scope="col">Fichier PAD+ <code>blocks/padplusvideocall</code></th>
            <th scope="col">Appel à BigBlueButtonBN 2.4 (actuel)</th>
            <th scope="col">Appel à BigBlueButtonBN 3 / Moodle 4</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>lib.php</code></td>
            <td><code>bigbluebuttonbn_random_password</code></td>
            <td>équivalent à <code>plugin::random_password</code> dans <code>classes/plugin.php</code></td>
        </tr>
        <tr>
            <td rowspan="4" scope="rowgroup"><code>bbbpad_videocall.php</code></td>
            <td><code>bigbluebuttonbn_is_meeting_running</code></td>
            <td>voir <code>is_running</code> dans <code>classes/meeting.php</code></td>
        </tr>
        <tr>
            <td><code>bigbluebuttonbn_get_create_meeting_array</code></td>
            <td>voir <code>create_meeting_data</code> dans <code>classes/meeting.php</code></td>
        </tr>
        <tr>
            <td><code>bigbluebuttonbn_get_error_key</code></td>
            <td>supprimée, voir <code>bigbluebutton_exception</code> dans <code>classes/bigbluebutton_proxy.php #create_meeting</code></td>
        </tr>
        <tr>
            <td><code>bigbluebuttonbn_get_join_url</code></td>
            <td>voir <code>get_join_url</code> dans <code>classes/bigbluebutton_proxy.php</code></td>
        </tr>
    </tbody>
</table>


### Page "Mes séquences"

La page "Mes séquences" est une nouveauté de Moodle 4. La page "Mes séquences" de la PAD+ est un rétroportage. Certains développements liés à cette page deviennent par conséquent obsolète (page `my/courses.php`, classes `mycourses_renderer.php` et `mycourses_viewed.php` par exemple) et doivent être remplacés par la nouvelle version Moodle 4.

Par contre, cette page reste basée sur le bloc "Vue d'ensemble des séquence", qui est la partie la plus impactée par les modifications invasives de la PAD+. Il convient là de reconsidérer et tester si les [changements de la PAD+ sur le bloc "Vue d'ensemble"](guide#mes-séquences-et-bloc-vue-densemble) sont bien compatibles sous Moodle 4. Pour rappel, ces modifications sont importantes pour simplifier l'usage de la page "Mes séquences" et la customiser pour l'accès aux ressources professionnelles.


### Tableau de bord

Le tableau de bord par défaut de Moodle 4 est allégé pour afficher en priorité les événements et le calendrier. La vue d'ensemble des séquences est déléguée à la page "Mes séquences", qui peut d'ailleurs être désignée comme page initiale pour les utilisateurs (sous *Administration du site / Présentation / Navigation*). Il y a donc quelques choix à reconsidérer :

- la page "Mes séquences" doit-elle devenir la page initiale à la place du tableau de bord ?
- quels blocs sont à afficher sur le tableau de bord ?

Il faut noter que seul le tableau de bord peut accueillir les blocs "Progression du stagiaire" et "Visioconférence", ce qui peut faire pencher la balance pour garder le tableau de bord comme page initiale.
