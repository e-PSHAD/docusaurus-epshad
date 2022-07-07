"use strict";(self.webpackChunkdoc_epshad=self.webpackChunkdoc_epshad||[]).push([[943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:2},o="D\xe9ploiement initial",l={unversionedId:"installation/deploiement",id:"installation/deploiement",title:"D\xe9ploiement initial",description:"La PAD+ s'installe comme une instance Moodle normale (MoodleDoc). Il est recommand\xe9 d'utiliser les playbooks Ansible fournis dans le d\xe9p\xf4t pad-infra, car ils facilitent le d\xe9ploiement et surtout la configuration de Moodle propre \xe0 la PAD+.",source:"@site/docs/installation/deploiement.md",sourceDirName:"installation",slug:"/installation/deploiement",permalink:"/pad-doc/installation/deploiement",draft:!1,editUrl:"https://github.com/e-PSHAD/pad-doc/edit/main/docs/installation/deploiement.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Survol d'une instance PAD+",permalink:"/pad-doc/survol"},next:{title:"Configuration post-installation",permalink:"/pad-doc/installation/configuration"}},s={},p=[{value:"Pr\xe9requis au d\xe9ploiement PAD+",id:"pr\xe9requis-au-d\xe9ploiement-pad",level:2},{value:"Exemple : changement de max_input_vars",id:"exemple--changement-de-max_input_vars",level:3},{value:"Exemple : changement des limites de taille pour le t\xe9l\xe9versement",id:"exemple--changement-des-limites-de-taille-pour-le-t\xe9l\xe9versement",level:3},{value:"Sous Debian 9",id:"sous-debian-9",level:3},{value:"D\xe9ploiement Pad+ avec Ansible",id:"d\xe9ploiement-pad-avec-ansible",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"d\xe9ploiement-initial"},"D\xe9ploiement initial"),(0,i.kt)("p",null,"La PAD+ s'installe comme une ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/400/en/Installing_Moodle"},"instance Moodle normale (MoodleDoc)"),". Il est ",(0,i.kt)("strong",{parentName:"p"},"recommand\xe9 d'utiliser les playbooks Ansible")," fournis dans le d\xe9p\xf4t ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/pad-infra"},"pad-infra"),", car ils facilitent le d\xe9ploiement et surtout la configuration de Moodle propre \xe0 la PAD+."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/installation/visioconference"},"L'installation de la visioconf\xe9rence BigBlueButton")," est trait\xe9 sur une page d\xe9di\xe9e."),(0,i.kt)("h2",{id:"pr\xe9requis-au-d\xe9ploiement-pad"},"Pr\xe9requis au d\xe9ploiement PAD+"),(0,i.kt)("p",null,"Voir les pr\xe9requis de ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_3.11_release_notes#Server_requirements"},"Moodle 3.11 (MoodleDoc)"),"."),(0,i.kt)("p",null,"En r\xe9sum\xe9 :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"serveur Apache install\xe9 avec module PHP (PHP 7.3.x ou PHP 7.4.x)"),(0,i.kt)("li",{parentName:"ul"},"base de donn\xe9es MariaDB install\xe9, 10.2.29 <= version <= 10.5")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"PHP version: minimum PHP 7.3.0. PHP 7.4.x is supported too. PHP 8.0 support is not ready for production yet."),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"PHP extension sodium is recommended."),(0,i.kt)("li",{parentName:"ul"},"PHP setting max_input_vars is recommended to be >= 5000 for PHP 7.x installations."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Environnement pour Moodle")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Moodle v\xe9rifie automatiquement l'environnement et signalera les d\xe9fauts \xe0 l'installation. Apr\xe8s installation, il est aussi possible de consulter l'environnement depuis l'interface Moodle dans ",(0,i.kt)("em",{parentName:"p"},"Administration du site > Serveur > Environnement")," et ",(0,i.kt)("em",{parentName:"p"},"Administration du site > Serveur > Info PHP"),"."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"MariaDB 10.6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Moodle utilise une configuration marqu\xe9e comme d\xe9pr\xe9ci\xe9e dans MariaDB 10.6. "The setting ROW_FORMAT=COMPRESSED is deprecated in MariaDB 10.6." - voir ',(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-72131"},"https://tracker.moodle.org/browse/MDL-72131"),". Il est recommand\xe9 de rester sur MariaDB 10.5."))),(0,i.kt)("h3",{id:"exemple--changement-de-max_input_vars"},"Exemple : changement de max_input_vars"),(0,i.kt)("p",null,"Il est recommand\xe9 de ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/3x/fr/Environnement_-_max_input_vars"},"passer le r\xe9glage PHP max_input_vars \xe0 5000 (MoodleDoc)")," (au lieu de 1000 par d\xe9faut). Cela se fait en \xe9ditant le fichier de configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"php.ini")," (voir ",(0,i.kt)("em",{parentName:"p"},"Administration du site > Serveur > Info PHP")," pour la localisation du fichier sur le serveur)."),(0,i.kt)("p",null,"Par exemple avec un serveur Debian + Apache, on peut le trouver sous ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/php/7.4/apache2/php.ini"),"."),(0,i.kt)("p",null,"Editer le fichier et rechercher ou ajouter la ligne suivante :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"max_input_vars = 5000\n")),(0,i.kt)("p",null,"Apr\xe8s sauvegarde, il peut \xeatre n\xe9cessaire de relancer le serveur web, par exemple avec ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo service apache2 restart"),"."),(0,i.kt)("h3",{id:"exemple--changement-des-limites-de-taille-pour-le-t\xe9l\xe9versement"},"Exemple : changement des limites de taille pour le t\xe9l\xe9versement"),(0,i.kt)("p",null,"Les limites par d\xe9faut pour le t\xe9l\xe9versement de fichiers sont par d\xe9faut basses. Il peut \xeatre n\xe9cessaire de les r\xe9hausser pour des fichiers plus volumineux (documents, archives). La documentation Moodle d\xe9crit plusieurs fa\xe7ons de ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/File_upload_size"},"changer la limite de taille des fichiers (MoodleDoc)"),"."),(0,i.kt)("p",null,"Une fois Moodle install\xe9, on peut trouver le param\xe8tre ",(0,i.kt)("em",{parentName:"p"},"Taille maximale des fichiers d\xe9pos\xe9s")," dans la section ",(0,i.kt)("em",{parentName:"p"},"Administration du site / S\xe9curit\xe9 / R\xe9glages de s\xe9curit\xe9 du site"),". Cependant ce param\xe8tre est plafonn\xe9 par la configuration de PHP."),(0,i.kt)("p",null,"En suivant la proc\xe9dure ci-dessus, il faut modifier deux param\xe8tres dans le fichier de configuration ",(0,i.kt)("inlineCode",{parentName:"p"},"php.ini"),", ici par exemple avec une limite \xe0 50Mo :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"upload_max_filesize = 50M\npost_max_size = 50M\n")),(0,i.kt)("p",null,"Apr\xe8s sauvegarde, il peut \xeatre n\xe9cessaire de relancer le serveur web, par exemple avec ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo service apache2 restart"),"."),(0,i.kt)("h3",{id:"sous-debian-9"},"Sous Debian 9"),(0,i.kt)("p",null,"A tite d'informations, voici la liste des packages install\xe9s pour le serveur d\xe9mo ",(0,i.kt)("a",{parentName:"p",href:"https://www.eig-epshad.com/"},"https://www.eig-epshad.com/"),". S'agissant d'une ",(0,i.kt)("strong",{parentName:"p"},"Debian 9"),", il y a quelques configurations de d\xe9p\xf4ts suppl\xe9mentaires pour obtenir les versions requises de PHP et MariaDB."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Apache2 et PHP 7.4")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sudo apt update\nsudo apt install apache2\n\n# d\xe9p\xf4t pour PHP\nsudo apt install curl wget gnupg2 ca-certificates apt-transport-https\nwget -q https://packages.sury.org/php/apt.gpg -O- | sudo apt-key add -\necho "deb https://packages.sury.org/php/ stretch main" | sudo tee /etc/apt/sources.list.d/php.list\n\nsudo apt update\nsudo apt upgrade\n\n# from https://docs.moodle.org/311/en/Installing_Moodle_on_Debian_based_distributions\nsudo apt install -y php7.4 php7.4-cli php7.4-common php7.4-mysql libapache2-mod-php7.4 php7.4-gd php7.4-curl php7.4-xmlrpc php7.4-intl php7.4-zip php7.4-mbstring php7.4-iconv php7.4-tokenizer php7.4-soap php7.4-simplexml php7.4-dom php7.4-xml php7.4-xmlreader php7.4-json\n\n# packages suppl\xe9mentaires\n# sudo apt install -y php7.4-ssh2 php7.4-exif php7.4-ftp php7.4-imagick php7.4-posix php7.4-sockets\n# sudo apt install php-pear php7.4-imap php7.4-memcache php7.4-pspell php7.4-snmp php7.4-tidy php7.4-xsl\n# sudo apt install libapache2-mod-perl2 php7.4-dev php7.4-odbc\n\n# activation du module PHP sous Apache\nsudo a2enmod php7.4\nsudo service apache2 restart\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"MariaDB 10.5")),(0,i.kt)("p",null,"Pour installer MariaDB en version 10.5, il faut d'abord ",(0,i.kt)("a",{parentName:"p",href:"https://mariadb.org/download/?t=repo-config&d=Debian+9+%22stretch%22&v=10.6&r_m=cnrs"},"enregistrer un d\xe9p\xf4t officiel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install software-properties-common dirmngr apt-transport-https\nsudo apt-key adv --fetch-keys 'https://mariadb.org/mariadb_release_signing_key.asc'\nsudo add-apt-repository 'deb [arch=amd64,i386,ppc64el,arm64] https://ftp.igh.cnrs.fr/pub/mariadb/repo/10.5/debian stretch main'\n\nsudo apt-get update\nsudo apt-get install mariadb-server\n")),(0,i.kt)("p",null,"On peut ensuite finaliser l'installation avec la cr\xe9ation des acc\xe8s au serveur de base de donn\xe9es :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# configuration du mot de passe root\nmysql_secure_installation\n\nmysql -u root -p\n\n> GRANT ALL PRIVILEGES ON *.* TO root@'localhost' IDENTIFIED BY '***';\n> FLUSH PRIVILEGES;\n\n# cr\xe9ation d'un compte d\xe9di\xe9 pour l'acc\xe8s Moodle\n> CREATE USER 'moodledb'@'localhost' IDENTIFIED BY '***';\n> GRANT ALL PRIVILEGES ON *.* TO moodledb@'localhost' IDENTIFIED BY '***';\n> FLUSH PRIVILEGES;\n")),(0,i.kt)("h2",{id:"d\xe9ploiement-pad-avec-ansible"},"D\xe9ploiement Pad+ avec Ansible"),(0,i.kt)("p",null,"Ansible est un outil de configuration et d\xe9ploiement automatique avec un minimum de pr\xe9requis. Il faut un acc\xe8s SSH sur les machines cibles. Voir le ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/installation_guide/index.html"},"guide d'installation Ansible"),". Basiquement cela se fait avec pip (Python 3.8+ sur la machine de contr\xf4le)."),(0,i.kt)("p",null,"Les \xe9tapes de ce premier d\xe9ploiement sont d\xe9finis dans le ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/moodle_install.yml"},"playbook moodle_install"),". Le playbook d\xe9finit les principales \xe9tapes d'une ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Installing_Moodle"},"installation Moodle (MoodleDoc)")," en s'appuyant sur le script ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/cli/install.php"),". Ce playbook ex\xe9cute les \xe9tapes suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cr\xe9ation d'un dossier ",(0,i.kt)("inlineCode",{parentName:"li"},"moodledata")," (cache, stockage de donn\xe9es) avec les droits de l'utilisateur web (Apache...)"),(0,i.kt)("li",{parentName:"ul"},"r\xe9cup\xe9ration d'une ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/e-PSHAD/PAD"},"archive taggu\xe9e de code PAD+")," et extraction dans le r\xe9pertoire d'installation web du site"),(0,i.kt)("li",{parentName:"ul"},"lancement du script d'installation automatique avec les param\xe8tres configur\xe9s (cr\xe9ation du config.php, initialisation de la base de donn\xe9es Moodle)"),(0,i.kt)("li",{parentName:"ul"},"installation du ",(0,i.kt)("a",{parentName:"li",href:"https://download.moodle.org/langpack/3.11/"},"paquetage de langue 'Fran\xe7ais'")," et du ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/e-PSHAD/pad-infra/raw/main/lang/"},"paquetage de langue personnalis\xe9 pour la PAD+")),(0,i.kt)("li",{parentName:"ul"},"configuration du job cron pour Moodle")),(0,i.kt)("p",null,"Avant d'ex\xe9cuter le playbook, il faut donc cr\xe9er un ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#intro-inventory"},"fichier d'inventaire (Ansible)")," avec la machine cible (serveur web Apache) et la configuration customis\xe9e."),(0,i.kt)("p",null,"Exemple de fichier d'inventaire ",(0,i.kt)("inlineCode",{parentName:"p"},"my-pad.hosts.yml")," avec configuration customis\xe9e :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"all:\n  children:\n    webservers:\n      hosts:\n        XXX # adresse du serveur web\n      vars:\n        moodle: # param\xe8tres Moodle\n          hostname: XXX # nom du dossier o\xf9 est h\xe9berg\xe9 le site, e.g. https://www.<hostname>\n          version_tag: XXX # tag de la version \xe0 t\xe9l\xe9charger sur le d\xe9p\xf4t git https://github.com/e-PSHAD/PAD\n          fullname: XXX # nom du site Moodle\n          shortname: XXX # nom court du site\n          adminuser: admin # login de l'administrateur principal Moodle\n          adminpass: XXX # mot de passe de l'administrateur principal Moodle\n          adminemail: XXX # email de l'administrateur principal Moodle\n        db: # param\xe8tres base de donn\xe9es\n          host: XXX # serveur de la base de donn\xe9es\n          name: XXX # nom de la base de donn\xe9es\n          user: XXX # utilisateur de la base de donn\xe9es\n          pass: XXX # mot de passe de l'utilisateur base de donn\xe9es\n")),(0,i.kt)("p",null,"D'autres ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/pad-infra/blob/main/ansible-playbooks/group_vars/all.yml"},"options de configuration plus g\xe9n\xe9riques")," sont disponibles et peuvent \xeatre surcharg\xe9es dans la configuration d'inventaire ou d'h\xf4te (voir la ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html#adding-variables-to-inventory"},"doc Ansible sur les variables"),")."),(0,i.kt)("p",null,"Ex\xe9cuter le playbook ",(0,i.kt)("inlineCode",{parentName:"p"},"moodle_install.yml")," dans le r\xe9pertoire ",(0,i.kt)("inlineCode",{parentName:"p"},"ansible_playbooks"),". Exemple avec un fichier d'inventaire ",(0,i.kt)("inlineCode",{parentName:"p"},"my-pad.hosts.yml")," et l'utilisateur root en SSH :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ansible-playbook moodle_install.yml -i my-pad.hosts.yml -u root\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Dur\xe9e de l'installation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"L'installation peut prendre plusieurs minutes pour la cr\xe9ation de la base de donn\xe9es. Une fois finie, il est recommand\xe9 de ",(0,i.kt)("strong",{parentName:"p"},"sauvegarder le fichier ",(0,i.kt)("inlineCode",{parentName:"strong"},"config.php"))," g\xe9n\xe9r\xe9 (avec le fichier d'inventaire)."))))}m.isMDXComponent=!0}}]);