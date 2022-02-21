---
sidebar_position: 2
---
# Création et import de données

Cette section explique comment créer et/ou importer un ensemble de données dans une instance PAD+. La démarche comprend 4 étapes principales, dans l'ordre :

1. Création de l'arborescence des catégories
1. Création de séquences dans l'arborescence (avec ou sans sauvegardes de séquences existantes)
1. Création des comptes utilisateurs et inscription optionnelle aux séquences
1. Attribution des rôles utilisateurs dans les catégories

Cette section donne des indications sur les scripts Moodle ou commandes [Moosh](https://moosh-online.com/) à utiliser avec leurs formats de fichier respectifs. Ces étapes peuvent être automatisées avec un [playbook Ansible](#ansible-import).

:::info Prérequis
* [moosh](https://moosh-online.com/) (déjà installé dans la phase de configuration)
* [ansible](https://docs.ansible.com/ansible_community.html) (déjà utilisé pour l'installation)
:::

## Création de l'arborescence des catégories

1. Créez un ou plusieurs fichiers ```.xml``` avec l'arborescence des catégories. Notez que vous pouvez avoir plusieurs catégories à la racine.

    ```
    <categories>
        <category name="Niveau 1">
            <category name="Niveau 2">
                <category name="Niveau 3">
                    <category name="Niveau 4"></category>
                </category>
            </category>
        </category>
        <category name="Niveau 1">
            <category name="Niveau 2">
                <category name="Niveau 3">
                    <category name="Niveau 4"></category>
                </category>
            </category>
        </category>
    </categories>
    ```

    :::info Numéro d'identifiant de catégorie
    Il est possible d'ajouter un attribut **idnumber='category-1-1'**, qui correspond au champ "Numéro d'identifiant de catégorie" dans les paramètres de la catégorie. Cet identifiant pourra être utilisé lors de l'import des séquences à la place du chemin des catégories.

    Il n'est par contre pas possible d'ajouter des descriptions de catégorie par cette méthode.
    :::

2. Placez le fichier dans votre dossier PAD+ puis importez le avec la commande moosh `category-import` :

    ```
    moosh category-import categories.xml
    ```

:::info Catégorie "Divers"
Par défaut Moodle crée une catégorie "Divers" ou "Miscellaneous" à l'installation. On peut simplement la supprimer avec la commande `moosh category-delete 1`.
:::

### Export d'une arborescence existante

Si vous avez déjà une instance Moodle avec une arborescence, vous pouvez en exporter tout ou partie avec la commande `moosh category-export`. L'export au format XML contient les titres et numéros d'identifiant des catégories et peut être réutilisé pour l'import.

```
# Export de toute l'arborescence des catégories
moosh category-import 0
```

Moosh propose des commandes pour manipuler différents types de données Moodle. Voir par exemple les [commandes Moosh dédiées aux catégories](https://moosh-online.com/commands/#category-config-set).


## Création des séquences

Moodle fournit une [fonctionnalité pour créer en masse des séquences](https://docs.moodle.org/311/en/Upload_courses) et importer du contenu existant (au format `.mbz` des sauvegardes de séquence). Cette fonctionnalité est accessible via l'interface ou via la ligne de commande.

Voici un example de procédure :

1. Créez un dossier `donnees/backup` avec les sauvegardes de séquence au format `.mbz` si vous en avez.

2. Créez un fichier `.csv` avec la liste des séquences à créer ([voir example de fichier sequences.csv](./samples/sequences.csv))

    ```
    fullname,shortname,category_path,startdate,backupfile
    Les métiers du numerique,num,Niveau 1 / Niveau 2 / Niveau 3 / Niveau 4,2022-02-01,../../../../donnees/backup/les-metiers-du-numerique.mbz
    ```

    :::caution Points d'attention
    * shortname : le nom court d'une séquence doit être **unique sur tout le site** (mais pas le fullname) - établissez une convention de nommage ;
    * category_path : bien utiliser les titres (attribut **name**) et la hiérarchie des catégories - l'espace entre les barres obliques est nécessaire ;
    * startdate : la date de début est fixée par défaut à un jour après l'import. Vous pouvez indiquer une autre date afin que les séquences apparaissent aux stagiaires à la date donnée ;
    * backupfile (facultatif) : le **chemin est relatif** à la position du script Moodle dans `admin/tool/uploadcourse/cli/` - si vos sauvegardes sont dans un dossier `donnees/backup` à la racine, il faut donc remonter de 4 niveaux d'abord `../../../../donnees/backup`.

3. Importez les cours en ligne de commande (notez le **chemin relatif du fichier csv** à la racine du projet) :

    ```
    php admin/tool/uploadcourse/cli/uploadcourse.php --mode=createnew --file=../../../../donnees/sequences.csv
    ```

:::info Champs supplémentaires
Il existe de nombreux [autres champs pour configurer l'import des séquences](https://docs.moodle.org/311/en/Upload_courses#Course_information_fields). Voici quelques détails supplémentaires :

* une colonne **category_idnumber** peut remplacer category_path pour utiliser le numéro d'identifiant des catégories ;
* format : pour préciser le format de séquence (thématique par défaut), il faut renseigner une colonne **format** avec *topics*, *singleactivity*... **Attention** le champ "type d'activité" n'est pas disponible pour le format "activité unique" - il faut le corriger à la main si besoin (forum par défaut) ;
* summary : pour préciser le résumé de la séquence ; **attention** il faut après import éditer la séquence pour sauvegarder le résumé avec le format correct (HTML, Markdown, texte brut...)
* enrolment_[number] : différents champs permettent de configurer les méthodes d'inscription si besoin.

Notez que cette fonctionnalité d'import en masse ne gère pas toutes les options, contrairement à la [restauration unique d'une séquence](https://docs.moodle.org/311/en/Course_restore). En particulier le format du résumé (HTML, Markdown, texte brut), l'image de séquence, le type d'activité unique sont ignorés.
:::

## Création des utilisateurs et inscription aux séquences

Moodle fournit une [fonctionnalité pour créer des utilisateurs](https://docs.moodle.org/311/en/Upload_users). Cette fonctionnalité peut aussi les inscrire automatiquement à des séquences. Cette fonctionnalité est accessible via l'interface ou via la ligne de commande.

1. Créez un fichier `.csv` avec les utilisateurs ([voir example de fichier users.csv](./samples/users.csv)).

    ```
    username,firstname,lastname,email,password,sysrole1,course1,role1,course2,role2,
    jordan,Jordan,Richard,jordan.richard@padplus.org,randompassword,manager,,,,
    rose,Rose,Garnier,rose.garnier@padplus.org,randompassword,,shortnamecourse,editingteacher,shortname2,student
    ```

    :::caution Points d'attention
    * les 4 premiers champs sont requis - le champ "mot de passe" est requis ou non en fonction de la configuration du site ;
    * sysrole1 : il s'agit de **rôle au niveau système (instance globale)** - dans une [organisation PAD+](/organisation/contenu), seuls les **gestionnaires d'instance** ont ce rôle `manager` ; aucun autre rôle ne doit être attribué à ce niveau ;
    * course1 : utiliser le nom court de la séquence ;
    * role1 : rôle de l'utilisateur dans la séquence, soit editingteacher pour un intervenant normal, teacher pour un intervenant non éditeur, student pour un stagiaire.
    :::

2. Importez les utilisateurs (attention au **chemin du fichier csv**) :

    ```
    php admin/tool/uploaduser/cli/uploaduser.php --file=../../../../donnees/users.csv --delimiter_name=comma
    ```

:::info Champs supplémentaires
Il existe de nombreux [autres champs pour la création des utilisateurs](https://docs.moodle.org/311/en/Upload_users#User_Fields_that_can_be_included).
:::


## Attribution des rôles utilisateurs dans les catégories {#users-categeories}

Pour finaliser une [organisation PAD+](/organisation/contenu), il faut que les utilisateurs se voient affecter les rôles adéquats dans les catégories concernées. Si cela est possible par des procédures manuelles dans l'interface, le script `assign_category_roles.php` permet d'attribuer ses rôles à partir d'un fichier `.csv`.

1. Créez un fichier `.csv` avec les attributions des rôles par catégorie aux utilisateurs ([voir example de fichier users_categories.csv](./samples/users_categories.csv)).

    ```
    category_name,role,username1,username2,username3
    Site 1,coursecreator,farida,felix,
    Ateliers 1,coursecreator,farida,felix,
    Ateliers 1,student,sabine,sami,sara
    ```

    :::caution Points d'attention
    * category_name : le nom de la catégorie (le nom doit être unique - il s'agit normalement d'une catégorie à la racine) ;
    * role : le rôle à attribuer dans cette catégorie, soit `manager` pour un gestionnaire de site, `coursecreator` pour un professionnel contributeur, `student` pour un stagiaire ;
    * username_[number] : la liste des utilisateurs pour qui attribuer le rôle dans la catégorie ;
    * l'attribution des rôles est idempotent : le script peut donc être joué plusieurs fois.
    :::

2. Attribuez les rôles (attention au **chemin du fichier csv**) :

    ```
    php theme/padplus/cli/assign_category_roles.php ../../../donnees/users_categories.csv
    ```


## Automatisation des imports avec Ansible {#ansible-import}

Les étapes ci-dessus peuvent être enchaînées par un playbook Ansible si toutes les données sont préparées à l'avance.

1. Construisez votre dossier des données à importer avec les différents fichiers `.xml`, `.csv` et `.mbz`. Voici un exemple d'organisation :
    ```
    📂 donnees
    ┣📂 backup
    ┃ ┣ architecture-construction.mbz
    ┃ ┣ les-metiers-du-numerique.mbz
    ┃ ┗ tout-sur-le-droit-au-logement.mbz
    ┣ category_1.xml
    ┣ category_2.xml
    ┣ sequences_1.csv
    ┣ sequences_2.csv
    ┣ users.csv
    ┗ users_categories.csv
    ```

    :::caution Nommage du dossier source et chemins des fichiers
    Lors de l'exécution du playbook, les données sont transférées sur le serveur, à la racine du site, dans un dossier qui porte le **nom terminal du dossier source**. Par exemple si vos données sont dans un dossier local `/PAD/donnees`, les données seront transférées sur le serveur dans un dossier `/var/www/my-pad.org/donnees` (où `/var/www/my-pad.org/` est le dossier du site). Il faut donc choisir un **nom terminal sans collision** avec les sources du site. Le **dossier de données sur le serveur est supprimé** à la fin du playbook.

    Vérifiez que le chemin d'accès aux fichiers de sauvegarde est correct dans les **fichiers csv de séquence**. Le chemin est relatif au script Moodle `admin/tool/uploadcourse/cli/uploadcourse.php`, et doit donc commencer par `../../../../` pour remonter à la racine du projet. Dans les exemples ci-dessus, le chemin vers les sauvegardes commence toujours par `../../../../donnees/backup`. On peut aussi utiliser des chemins absolus si connus d'avance.
    :::

2. Dans votre fichier d'inventaire Ansible, rajouter une section `import_data`. Notez qu'il est possible de scinder les spécifications des catégories et séquences en plusieurs fichiers qui seront lus les uns à la suite des autres :

    ```yaml
    all:
    children:
        webservers:
        hosts:
            XXX # adresse du serveur web
        vars:
            moodle:
                # ...paramètres Moodle
            db:
                # ...paramètres base de données
            import_data: # paramètres pour l'import des données
                # chemin vers le dossier source des données, sans barre oblique à la fin
                source_folder: ../../PAD/donnees
                # le nom terminal du dossier source sera le nom du dossier cible sur le serveur, ici 'donnees'
                users_file: donnees/users.csv
                users_categories_file: donnees/users_categories.csv
                category_files:
                    - donnees/categories_1.xml
                    - donnees/categories_2.xml
                course_files:
                    - donnees/sequences_1.csv
                    - donnees/sequences_2.csv
    ```

3. Exécutez le playbook Ansible `import_data.yml` avec votre fichier d'inventaire (e.g. `my-pad.hosts.yml`) :

    ```
    ansible-playbook import_data.yml -i my-pad.hosts.yml -u root
    ```

:::info Exécution sélective des tâches
Il est possible de n'exécuter qu'une partie des tâches d'import avec les [tags Ansibles](https://docs.ansible.com/ansible/latest/user_guide/playbooks_tags.html#selecting-or-skipping-tags-when-you-run-a-playbook). Notez que chaque étape dépend des précédentes :

1. transfer-data : transfert des données d'import sur le serveur
1. categories : création de l'arborescence des catégories
1. courses : création de séquences dans l'arborescence
1. users : création des comptes utilisateurs et inscription aux séquences
1. users_categories : attribution des rôles utilisateurs dans les catégories
1. cleanup : suppression du dossier de données sur le serveur

Par exemple, pour n'exécuter que la création des catégories puis des séquences :

`ansible-playbook import_data.yml -i my-pad.hosts.yml -u root --tags categories,courses`

Par défaut la première et dernière tâche sont toujours exécutées : transfert des données sur le serveur puis suppression quand les autres tâches sont effectuées.

Si on souhaite ignorer la tâche suppression pour conserver les données sur le serveur, il suffit d'utiliser la commande :

`ansible-playbook import_data.yml -i my-pad.hosts.yml -u root --skip-tags cleanup`
:::

:::info Tâches optionnelles
Le playbook définit aussi des tâches qui ne sont pas exécutées par défaut mais à la demande avec des tags :
- `--tags remove-misc-category` : supprimer la catégorie par défaut de Moodle (avec l'identifiant 1, "Divers" ou "Miscellaneous").
- `--tags force-single-activity-page` : forcer le type d'activité "page" pour **toutes les séquences à activité unique** (le type d'activité n'est pas restauré par l'import, ces séquences se retrouvent alors avec une activité "forum" par défaut).
- `--tags force-html-format-for-description-and-summary` : forcer le format HTML pour les **descriptions des catégories** et les **résumés des séquences** (ce format n'est pas restauré par l'import).
:::
