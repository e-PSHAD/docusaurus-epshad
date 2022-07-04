---
sidebar_position: 20
---
# Etudes prospectives

Cette page donne des éléments d'étude sur des fonctionnalités dépriorisées lors du développement initial.

## Visioconférence

### Réécrire le mode direct du bloc visioconférence pour ne pas utiliser MoodleForm

A l'usage, le mode direct du bloc visioconférence peut faire apparaître une popup agaçante quand on quitte le tableau de bord :

- Sur le tableau de bord, sélectionner le mode direct de visioconférence ("maintenant")
- Sélectionner (au moins) un participant
- Naviguer vers une autre page (sans nécessairement lancer la visio)
- Le navigateur afficher une pop-up pour demander confirmation de fermeture ("Cette page vous demande de confirmer sa fermeture ; des données que vous avez saisies pourraient ne pas être enregistrées.")

Cela car le composant de sélection des participants est généré comme un formulaire par MoodleForm (voir `blocks/padplusvideocall/classes/videocall_form.php`).

Une solution possible pour réécrire ce composant sans MoodleForm est d'utiliser directement le composant JS Autocomplete de Moodle (qui est de fait utilisé par MoodleForm). Il s'agit par exemple de l'implémentation choisie pour le composant de sélection des participants sur la page "Parcours des stagiaires". On peut donc se référer à cette page pour des éléments. La différence est que le bloc visioconférence fait une requête Ajax pour filtrer les utilisateurs au lieu de filtrer une simple liste statique comme pour les stagiaires.

### Activer les enregistrements pour les appels en visioconférence

La possibilité d'enregistrer les visioconférences directes (tableau de bord et page profil) est désactivée dans le code par l'option `'allowStartStopRecording' => false` dans [bbbpad_build_meeting_data](https://github.com/e-PSHAD/PAD/blob/pad-dev/blocks/padplusvideocall/bbbpad_videocall.php#L182).

Pour réactiver cette fonction, il faut donc enlever cette option mais aussi penser au **flot de récupération des médias enregistrés** quand ils sont prêts. En effet ceux-ci ne sont pas immédiatement disponibles après la fin d'une visioconférence. BigBlueButton doit traiter les données pour consolider les fichiers médias à télécharger, ce qui peut prendre plusieurs minutes.

BigBlueButton permet de renseigner une [URL "Recording ready callback"](https://docs.bigbluebutton.org/dev/api.html#recording-ready-callback-url) à la création d'une visioconférence, qui sera appelée avec les informations de l'enregistrement quand celui-ci est prêt. Par exemple, pour les enregistrements de séquence sous Moodle/BigBlueButtonBN, c'est le fichier `mod/bigbluebuttonbn/bbb_broker.php` qui a la responsabilité de traiter ces retours. L'enregistrement devient alors disponible dans l'activité BigBlueButton référencée.

Pour les visioconférences directes de la PAD+, qui ne sont pas liées à une séquence, la solution la plus simple à étudier est **l'envoi d'une notification** au créateur de la visioconférence, suivant le même mécanisme que pour les liens à partager. En cliquant sur cette notification, l'usager peut par exemple être redirigé vers une nouvelle page qui va **interagir avec le serveur BigBlueButton pour télécharger l'enregistrement**.

### Programmer une visioconférence avec invitation

Avec le système de lien de partage d'une visioconférence, l'utilisateur doit malgré tout basculer sur son système d'agenda pour inviter des participants. Cette partie explique comment générer des [fichiers iCalendar](https://en.wikipedia.org/wiki/ICalendar) (`.ics`) dans les notifications de Moodle, pour permettre aux invités d'ajouter l'invitation à leur agenda simplement en ouvrant le fichier ics.

La branche `videocall-ics` montre un **[POC pour l'envoi d'une pièce jointe ics avec la notification de visioconférence](https://github.com/e-PSHAD/PAD/blob/videocall-ics/blocks/padplusvideocall/lib.php#L225)**, avec des données figées. Le [format iCalendar](https://en.wikipedia.org/wiki/ICalendar#Core_object) est un format texte simple avec de nombreuses options.

Il reste cependant à clarifier plusieurs points, en particulier sur l'UX de cette fonctionnalité :
- il faut pouvoir renseigner une date et une heure de début (les composants Moodle de base pour ces fonctionnalités, bien qu'accessibles, sont peu ergonomiques) ;
- il faut pouvoir indiquer la durée ou l'heure de fin ;
- il faut pouvoir renseigner un titre pour la visio, voir un message d'invitation personnalisé ;
- enfin il faut réutiliser le composant des visios directes pour sélectionner les personnes à inviter ;
- tous ces éléments prennent de la place, ce qui implique de **repenser le design** pour les afficher (dans une popup par exemple à la place de l'affichage dans le bloc).

Entre autres éléments de réflexion, il faut aussi penser à l'invitation de personnes extérieures (voir ci-dessous) ou au nettoyage des fichiers ics générés.

### Inviter un participant sans compte PAD+

Actuellement tous les participants invités à une visioconférence créée via la PAD+ doivent avoir un compte PAD+. [L'intégration seule de Greenlight](/installation/visioconference#intégration-dans-la-pad) permet d'inviter des participants extérieurs (sans compte PAD+) via une interface indépendante.

Pour permettre ces connexions extérieures, il faut repenser le flot de connexion dans [bbbpad_videocall.php](https://github.com/e-PSHAD/PAD/blob/pad-dev/blocks/padplusvideocall/bbbpad_videocall.php) :

- enlever le `require_login` qui redirige vers la page de connexion ;
- à la place, si la personne n'est pas connectée, la rediriger vers un nouvel écran pour lui demander son nom d'usage pour la visioconférence, paramètre requis par le serveur BigBlueButton (voir par exemple l'écran de connexion anonyme de Greenlight) ;
- quand la personne a donné son nom, alors elle peut rerentrer dans le flot de connexion de la visioconférence (voir les paramètres de [bbbpad_join_meeting](https://github.com/e-PSHAD/PAD/blob/pad-dev/blocks/padplusvideocall/bbbpad_videocall.php#L220)).

Il reste évidemment à clarifier certaines options, comme à savoir comment gérer les personnes extérieures si la visioconférence n'existe pas encore (création automatique, salle d'attente...).

## Vue hebdomadaire du calendrier

Le calendrier Moodle offre par défaut uniquement les vues mensuelles, journalières, et la liste des événements à venir. Pour les établissements qui construisent une programmation hebdomadaire pour leurs stagiaires, il n'existe pas de vue d'ensemble à la semaine, visualisant la grille des horaires de travail et le placement des événements sur cette grille (voir par exemple la vue à la semaine sous Outlook ou Google Calendar).

La conception de cette vue offre cependant de nombreux challenges :

- portée horaire de la grille (horaire de travail ou toute la journée ?) ;
- détermination des jours de la semaine à afficher (début et fin de semaine par rapport à la date courante) ;
- placement des événements sur la grille horaire, tout en respectant le responsive design et l'accessibilité ;
- affichage des événements qui durent toute la journée, voir plusieurs jours ;
- affichage des événements qui se **chevauchent** sur la grille (voir ci-dessous) ;
- interaction de l'utilisateur : ajout d'un événement à l'heure choisie par l'utilisateur dans la grille horaire.

En complément, une requête des professionnels est la possibilité d'importer facilement leur planning pédagogique sur la plateforme, à partir d'un format à déterminer.

### Extension de la vue calendrier

La page calendrier est prise en charge par le fichier `calendar/view.php`. Le paramètre `$view` de la requête est celui qui permet de choisir le type de vue à afficher, entre les valeurs `month`, `day` et `upcoming`. L'ajout d'une nouvelle vue passe donc par une nouvelle valeur possible, par exemple `week`.

La fonction la plus importante pour la suite du process est `calendar_get_view` dans `calendar/lib.php`. Cette fonction a la responsabilité de récupérer les événements correspondant à la période demandée par l'utilisateur ainsi que le modèle d'affichage (i.e. les données formattées pour le rendu dans la vue HTML), en fonction du paramètre `$view` et des autres paramètres.

Si certaines fonctions et modèles peuvent être surchargées dans le thème, ce n'est pas le cas par exemple du fichier `calendar/view.php`. Il faut donc s'attendre à des modifications partiellement invasises si cette fonctionnalité est envisagée.

### Algorithme d'empilement des événements en cas de chevauchement

Une des principales difficultés de cette vue est l'affichage des événements qui se chevauchent sur un même créneau horaire pour une journée donnée, par exemple :

- un événement qui commence avant qu'un autre soit terminé ;
- un événement qui dure plus longtemps qu'un autre.

La difficulté tient ici dans le placement physique sur la grille horaire, quand les autres vues se contentent d'afficher sous forme de liste les événements qui ont lieu "en même temps" (le même jour). Cette difficulté implique de calculer, en plus de la position horaire, un "ordre" qui permet de décaler (dans une colonne par exemple) des événements qui se chevauchent et éviter qu'ils se masquent entre eux.

L'algorithme abstrait ci-dessous donne une piste à approfondir. Elle demande validation par des tests.

```
Entrée (cas initial) :
- la liste des événements de la journée visée, dans l'ordre chronologique de démarrage
  (puis par durée décroissante, pour les éléments qui commenceraient en même temps)


Sortie :
- la liste des événements, chacun avec son numéro d'ordre pour affichage en colonne

Test de chevauchement :
- la fonction qui permet de détecter un chevauchement est en fait très simple.

    event_1_start < event_2_end && event_2_start < event_1_end

- autrement dit, deux événements se chevauchent si et seulement si
  chacun commence avant que l'autre se termine.

Initialisation
- une liste 'chevauchement' avec le premier événement de la journée à l'ordre 1
- le reste de la liste des événements (sans le premier)

Algorithme :
- pour chaque événement de la journée
  - pour chaque élément dans l'ordre FIFO de la liste 'chevauchement'
    - si chevauchement avec le nouvel événement
      - si c'est le dernier de la liste chevauchement :
        ajouter l'événement à la liste chevauchement avec ordre + 1
      - sinon passer à l'élément suivant
    - sinon (pas de chevauchement entre l'élément et le nouvel événement)
      - si l'événement n'a pas encore d'ordre :
        remplacer l'élément par l'événement en copiant son ordre
      - sinon enlever l'élément de la liste sans changer l'ordre
        (étape facultative, permet de "nettoyer" la liste des éléments passés)
```

Comme on itère dans l'ordre chronologique, dès qu'un événement est remplacé, les événements ultérieurs ne pourront plus se chevaucher avec lui.

L'ordre détermine le décalage de position (ou encore le numéro de colonne suivant implémentation). Si on doit déterminer le nombre maximum d'éléments se chevauchant pour chaque événement, il faut maintenir un peu plus de données dans l'élément (pour déterminer la taille des colonnes par exemple).

Voici un exemple avec de multiples chevauchements sur 4 colonnes (entête). Les `x` indiquent quand un événement se termine.


```
 1 - 2 - 3 - 4

 e1
 x
 e2
 |   e3
 |   |   e4
 |   x   |
 |   e5  |
 |   |   |   e6
 x   |   |   x
 e7  x   |
 |   e8  |
 |   x   x
 x   e9
 e10 x
```


Exemple de déroulement de l'algorithme (dans `ex,y`, `x` est le numéro d'événement et `y` son ordre affecté par l'algorithme ; une `*` marque le nouvel événement ) :

```
- *e1,1
- *e2,1                         // pas de chevauchement, e1 est oublié
- e2,1  | *e3,2                 // chevauchement
- e2,1  | e3,2  | *e4,3         // triple chevauchement
- e2,1  | *e5,2 | e4,3          // e5 chevauche avec e2 et e4 mais pas e3,
                                // e5 remplace e3 mais on garde e4
- e2,1  | e5,2  | e4,3 | *e6,4  // e6 chevauche avec e2, e5 et e4, prend le 4ème slot
- *e7,1 | e5,2  | e4,3          // e7 remplace e2, e6 terminé et enlevé
- e7,1  | *e8,2 | e4,3          // e8 remplace e5
                                // (si e7 et e8 commencent en même temps, l'ordre
                                // peut être donné par la durée e7 > durée e8)
- e7,1  | *e9,2                 // e9 remplace e8 et on enlève e4 passé
- *e10,1                        // e10 remplace e7 et e9 est passé
```
