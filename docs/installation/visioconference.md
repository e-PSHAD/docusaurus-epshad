---
sidebar_position: 4
---
# Visioconférence

Les fonctionnalités de visioconférence de la PAD+ sont basées sur la solution [BigBlueButton](https://bigbluebutton.org/), qui est spécialisée pour la pédagogie en classe virtuelle. Cette page ne détaille pas les fonctionnalités de BigBlueButton mais son intégration dans la PAD+. Pour une présentation des fonctionnalités de BigBlueButton, vous pouvez consulter les [vidéos tutorielles](https://bigbluebutton.org/teachers/tutorials/).

## Intégration dans la PAD+

Les fonctionnalités de visioconférence sont disponibles dans trois endroits sur la PAD+ :

- l'activité "classe virtuelle" intégrée dans les séquences, avec le [plugin BigBlueButton](https://moodle.org/plugins/mod_bigbluebuttonbn) qui fournit la base de l'intégration dans Moodle
- un bloc "Visioconférence" sur le tableau de bord
- un bouton d'appel vidéo sur les pages profils des usagers

Ces trois moyens sont activables séparément.

Lors de l'installation du serveur BigBlueButton, il est aussi possible d'installer [Greenlight](https://docs.bigbluebutton.org/greenlight/gl-overview.html), une interface web qui permet de gérer des salles et des enregistrements BigBlueButton, indépendamment de Moodle.

Si l'interface BigBlueButton reste identique dans tous les cas, le tableau ci-dessous résume les différences de possibilité :

<table>
    <caption>Différences d'usage (en ligne) pour les 4 accès à la visioconférence (en colonne).</caption>
    <thead>
        <tr>
            <th rowspan="2"></th>
            <th colspan="3" scope="colgroup">PAD+</th>
            <th rowspan="2" scope="col">Greenlight</th>
        </tr>
        <tr>
            <th scope="col">Activité séquence</th>
            <th scope="col">Bloc visioconférence</th>
            <th scope="col">Appel direct</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Création (pour les professionnels uniquement)</th>
            <td>ajout et configuration par le professionnel</td>
            <td>tableau de bord</td>
            <td>page profil d'un autre usager</td>
            <td>autre interface web, comptes indépendants / LDAP / Office365...</td>
        </tr>
        <tr>
            <th scope="row">Accès des participants</th>
            <td>uniquement pour les inscrits de la séquence, via l'activité ou le calendrier</td>
            <td>
                <strong>mode direct</strong> : notification sur la plateforme et/ou par email
                <br />
                <strong>mode lien</strong> : partage du lien d'invitation à la charge de l'initiateur</td>
            <td>notification sur la plateforme et/ou par email</td>
            <td>partage du lien d'invitation à la charge de l'initiateur</td>
        </tr>
        <tr>
            <th scope="row">Planification</th>
            <td>possible, dans le calendrier de la séquence</td>
            <td>via planning extérieur, possibilité de partager un lien avant</td>
            <td>via planning extérieur</td>
            <td>via planning extérieur, possibilité de partager un lien avant</td>
        </tr>
        <tr>
            <th scope="row">Enregistrement</th>
            <td>oui</td>
            <td>non</td>
            <td>non</td>
            <td>oui</td>
        </tr>
        <tr>
            <th scope="row">Gestion de salles</th>
            <td>oui (1 activité = 1 salle)</td>
            <td>non</td>
            <td>non</td>
            <td>oui</td>
        </tr>
        <tr>
            <th scope="row">Lien d'invitation</th>
            <td>non</td>
            <td>avant et dans la visio, uniquement pour les usagers PAD+</td>
            <td>dans la visio, uniquement pour les usagers PAD+</td>
            <td>avant et dans la visio, ouvert aux participants extérieurs</td>
        </tr>
    </tbody>
</table>

:::info Planification
Si Moodle dispose d'un calendrier avec différents niveaux (personnel, séquence, site...), il ne permet pas de partager/voir celui des autres usagers ni donc de gérer les rendez-vous à plusieurs, les conflits de planning. Il est donc conseillé d'utiliser un outil de planning dédié pour gérer les rendez-vous.
:::

:::caution Enregistrements
L'enregistrement d'une visioconférence est souvent plébiscité par les professionnels car elle leur permet de proposer des séances à rejouer et de monter des pastilles vidéos pour leur séquence. Cependant les enregistrements sont consommateurs d'espace disque et demandent de la vigilance dans la gestion de cette ressource. C'est pourquoi les enregistrements sont désactivés dans le bloc et les appels directs. L'administrateur dispose des outils BigBlueButton pour [gérer les enregistrements](https://docs.bigbluebutton.org/dev/recording.html#manage-recordings).
:::

## Installation du serveur BigBlueButton

Il est recommandé de lire la page dédiée à [l'installation de BigBlueButton](https://docs.bigbluebutton.org/2.4/install.html) avant de commencer, en particulier pour les prérequis techniques. Il faut a minima disposer :

- d'un serveur dédié avec Ubuntu 18.04 (recommandé pour la version bionic 2.4)
- d'un nom de domaine, qui sera utile pour le certificat SSL

### Installation automatique

Le projet PAD+ fournit un [playbook Ansible pour l'installation BigBlueButton](https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/bigbluebutton_install.yml) qui automatise aussi la configuration sous Moodle.

Vous pouvez enrichir votre fichier d'inventaire avec la configuration pour l'installation BigBlueButton. Exemple avec `my-pad.hosts.yml` :

```yaml
all:
  children:
    webservers: # groupe du serveur web Moodle
      # ...
    visioservers: # nouveau groupe pour le serveur BigBlueButton
      hosts:
        visio-pad.org: # adresse/nom de domaine du serveur
      vars:
        version: bionic-24 # installation BigBlueButton 2.4 sous Ubuntu 18.04 (bionic)
        hostname: visio-pad.org # nom de domaine pour le certificat
        certemail: XXX # email administrateur pour le certificat
        option_demos: false # installer les API demos
        option_firewall: true # installer le firewall
        option_greenlight: true # installer Greenlight
```

Le playbook peut être exécuté avec la commande (cela prend entre 10 et 15 minutes !) :

```
ansible-playbook bigbluebutton_install.yml -i my-pad.hosts.yml -u root
```

Par défaut, le playbook exécute les **étapes d'installation** suivantes :

1. lancer le [script d'installation](https://github.com/bigbluebutton/bbb-install) avec les options choisies ;
1. créer le compte administrateur par défaut sous Greenlight si l'option est choisie (voir [configuration Greenlight](#configuration-greenlight) pour la suite) ;
1. afficher l'URL API et le secret partagé à configurer dans [l'administration Moodle](#configuration-dans-moodle).

```
    "stdout_lines": [
        "",
        "    URL: https://visio-pad.org/bigbluebutton/",
        "    Secret: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "",
        "    Link to the API-Mate:",
        "    https://mconf.github.io/api-mate/#server=https://visio-pad.org/bigbluebutton/&sharedSecret=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    ]
```

Il est aussi possible de **configurer directement Moodle** avec l'URL API et le secret partagé (via `moosh config-set`) avec la commande :

```
ansible-playbook bigbluebutton_install.yml -i my-pad.hosts.yml -u root --tags setsecret
```

Enfin, il est possible de combiner les **2 étapes (installation + configuration Moodle)** en une seule commande :

```
ansible-playbook bigbluebutton_install.yml -i my-pad.hosts.yml -u root --tags install,setsecret
```

### Autres commandes du playbook

D'autres commandes peuvent être exécutées à la demande via le playbook :

- `--tags showsecret` : afficher l'URL API et le secret partagé.
- `--tags check` : afficher le résultat de la commande `bbb-conf --check` sur le serveur.
- `--tags status` : afficher le résultat de la commande `bbb-conf --status` sur le serveur.
- `--tags purgedemo` : supprimer le package des API demos (si installé)

### Installation manuelle

Il est tout à fait possible de réaliser l'installation manuellement (par exemple pour avoir le retour live des commandes longues). Les commandes ci-dessous correspondent aux 3 étapes de l'installation de base :

```
# Commandes à exécuter sur le serveur BigBlueButton
# 1. lancer le script d'installation
wget -qO- https://ubuntu.bigbluebutton.org/bbb-install.sh | bash -s -- -v bionic-240 -s bbb.example.com -e notice@example.com -w [-a] -g
# -w option firewall
# -a option API demos (pour les tests, ne pas garder en production)
# -g option greenlight

# 2. créer le compte administrateur par défaut sous Greenlight
docker exec greenlight-v2 bundle exec rake admin:create["name","email","password","admin"]

# 3. afficher l'URL API et le secret partagé à configurer dans l'administration Moodle
[sudo] bbb-conf --secret

# 4. supprimer le package des API demos (si installé avec l'option -a)
apt-get purge bbb-demo
```

## Configuration dans Moodle

:::info Nouvelles permissions
Deux nouvelles permissions ont été créées dans la PAD+ pour le bloc visioconférence et l'appel direct. La permission `block/padplusvideocall:createvideocall` est requise dans les deux cas pour créer une visioconférence. La permission `block/padplusvideocall:invitevideocall` est requise en plus pour le bloc visioconférence (sinon celui-ci ne s'affichera pas pour l'usager, par exemple pour un stagiaire). Par défaut, ces deux permissions sont affectées aux **gestionnaires** et **contributeurs** (professionnels).
:::

### Administration du site

Si vous n'avez pas choisi la configuration automatique, allez sur la page *Administration du site / Plugins / Modules d'activité / **BigBlueButton**.* Vous pouvez éditer les deux valeurs de la configuration générale pour l'URL du serveur et le secret partagé obtenus dans la phase d'installation ci-dessus.

![Configuration du serveur BigBlueButton dans Moodle](/img/installation/bbb_moodle_config.png)

Les autres paramètres de la page affectent uniquement les **activités BigBlueButton** dans les séquences.


### Tableau de bord

Le bloc **Visioconférence** doit être ajouté au [tableau de bord par défaut](/installation/configuration#configuration-tableau-de-bord) pour être disponible.

1. Allez dans l'administration à la page *Administration du site / Présentation / **Tableau de bord par défaut**.*
1. Cliquez sur le bouton "Activer l'édition des blocs".
1. Cliquez sur le bouton **"Ajouter un bloc"** dans le menu latéral.
1. Sélectionnez le bloc Visioconférence dans la liste. Le bloc vient se placer par défaut dans la colonne de droite.
1. Pour appliquer les changements à tous les usagers déjà existant, cliquez sur **Réinitialiser le tableau de bord de tous les utilisateurs** en haut.
7. Cliquez sur le bouton "Désactiver l'édition des blocs" pour sortir du mode.

![Configuration standard du tableau de bord PAD+ avec la visioconférence](/img/installation/dashboard-config.png)

**Rappel :** si le bloc est bien ajouté par défaut à tout le monde, il ne s'affichera que si l'usager a la capacité `block/padplusvideocall:invitevideocall` pour inviter des participants. Celle-ci est affectée aux gestionnaires et professionnels.

### Réglages des notifications par défaut

Moodle gère de nombreux types de notification pour différentes circonstances. La PAD+ définit en particulier deux nouvelles notifications liées à la visioconférence :

- *Notification de visioconférence* : envoyée aux utilisateurs invitées par appel direct (via le bloc ou page profil) à une visioconférence.
- *Rappel de lien de visioconférence* : envoyée à l'utilisateur quand il demande un lien de visioconférence dans le bloc.

Les utilisateurs ont la possibilité de régler leurs préférences personnelles de notification. Cette section explique comment régler ces notifications par défaut pour tous les utilisateurs. La configuration est disponible sous *Administration du site / Messagerie / **Réglages de notification**.*

![Réglages des notifications par défaut](/img/installation/config-notifications.png)

Chaque notification peut être configurée indépendamment pour le web et par email. Il existe ensuite une distinction entre l'état "en ligne" ou "hors ligne" de l'utilisateur.

- si l'utilisateur a navigué sur la plateforme dans les **5 dernières minutes**, il est considéré *en ligne*. Ce réglage est disponible depuis *Administration du site / Plugins / Blocs / **Utilisateurs en ligne**.*
- à l'inverse, s'il n'est pas sur la plateforme ou s'il n'a rien fait depuis 5 minutes, il est considéré *hors ligne*.

Ce réglage est donc relativement imprécis quant au statut en ligne ou hors ligne de l'utilisateur. C'est pourquoi les notifications d'appel direct en visioconférence sont activées par défaut "en ligne" et "hors ligne" par web et par email, pour prévenir celui-ci au plus vite. Cela crée cependant des notifications en doublon et il peut être préférable de mieux cibler celle-ci via ce panneau.

:::info Notifications sur mobile
Les notifications sur application mobile sont possibles si le [site est enregistré dans l'annuaire Moodle](https://docs.moodle.org/311/en/Moodle_app_notifications). Cela dépend aussi de l'[abonnement souscrit pour l'application](https://apps.moodle.com/local/apps/).
:::

### Désactiver les fonctionnalités

Pour désactiver l'ajout d'activité BigBlueButton dans les séquences, rendez-vous sur la page *Administration du site / Plugins / Modules d'activité / **Gestion des activités**.* Cliquez sur l'icône **oeil** sur la ligne BigBlueButton pour cacher l'activité. *Attention, cela cache aussi les sessions BigBlueButton déjà présentes dans les séquences !*

![Cacher l'activité BigBlueButton dans toutes les séquences](/img/installation/bbb_hide_activity.png)

Pour désactiver la possibilité de passer un appel direct sur les pages profils des usagers, rendez-vous sur la page *Administration du site / Présentation / Thèmes / **PAD+** * :

![Cacher le bouton d'appel visioconférence sur les pages profils](/img/installation/bbb_videocall_settings.png)

Pour désactiver le bloc de visioconférence, il suffit de le supprimer du tableau de bord par défaut puis de *Réinitialiser le tableau de bord de tous les utilisateurs* (voir ci-dessus).

## Configuration Greenlight

Si vous choisissez l'installation Greenlight, celui-ci devient le site web par défaut sur votre serveur de visioconférence. Attention, il y a **deux actions très importantes à faire pour sécuriser** l'application !

1. Utilisez un navigateur web pour ouvrir la page d'accueil de Greenlight sur votre serveur de visioconférence.
1. Connectez-vous en utilisant les [identifiants du compte administrateur](#installation-du-serveur-bigbluebutton) créés par défaut à l'étape 2 de l'installation.
1. **Changez le mot de passe** du compte administrateur !
1. Puis allez dans le menu utilisateur (en haut à droite), choix "Organisation", puis "Paramètres du site", enfin **"Paramètres"**.
1. Changez la méthode d'inscription pour **"Rejoindre sur invitation"** ou **"Approuver/Refuser"**. La méthode par défaut "Inscription ouverte" permet à n'importe quel usager sur Internet de s'inscrire et de lancer ses propres visioconférences.

## Ressources

Les ressources ci-dessous sont les références officielles en anglais :

- [Tutoriaux vidéos sur les fonctionnalités BigBlueButton](https://bigbluebutton.org/teachers/tutorials/)
- [Tutoriaux et documentation sur l'intégration BigBlueButton dans Moodle](https://support.bigbluebutton.org/hc/en-us/categories/1500000533302-Moodle)

Il est possible de paramétrer de nombreux aspects techniques ou visuels (présentation par défaut, message d'accueil) dans les fichiers de configuration BigBlueButton :

- [Options de configuration BigBlueButton](https://docs.bigbluebutton.org/admin/customize.html)
- [Emplacement des fichiers de configuration BigBlueButton](https://docs.bigbluebutton.org/admin/configuration-files.html)
- [Paramétrage de Greenlight](https://docs.bigbluebutton.org/greenlight/gl-customize.html), plus complexe car demande de modifier le code source
