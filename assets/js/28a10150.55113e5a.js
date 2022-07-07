"use strict";(self.webpackChunkdoc_epshad=self.webpackChunkdoc_epshad||[]).push([[588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6740:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2},i="Cr\xe9ation et import de donn\xe9es",o={unversionedId:"organisation/donnees",id:"organisation/donnees",title:"Cr\xe9ation et import de donn\xe9es",description:"Cette section explique comment cr\xe9er et/ou importer un ensemble de donn\xe9es dans une instance PAD+. La d\xe9marche comprend 4 \xe9tapes principales, dans l'ordre :",source:"@site/docs/organisation/donnees.md",sourceDirName:"organisation",slug:"/organisation/donnees",permalink:"/pad-doc/organisation/donnees",draft:!1,editUrl:"https://github.com/e-PSHAD/pad-doc/edit/main/docs/organisation/donnees.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Organisation et permissions",permalink:"/pad-doc/organisation/contenu"},next:{title:"Attribution manuelle des r\xf4les",permalink:"/pad-doc/organisation/roles"}},l={},p=[{value:"Cr\xe9ation de l&#39;arborescence des cat\xe9gories",id:"cr\xe9ation-de-larborescence-des-cat\xe9gories",level:2},{value:"Description des cat\xe9gories",id:"description-categories",level:3},{value:"Export d&#39;une arborescence existante",id:"export-dune-arborescence-existante",level:3},{value:"Cr\xe9ation des s\xe9quences",id:"cr\xe9ation-des-s\xe9quences",level:2},{value:"Import des gabarits",id:"gabarits",level:3},{value:"Cr\xe9ation des utilisateurs et inscription aux s\xe9quences",id:"users-register",level:2},{value:"Attribution des r\xf4les utilisateurs dans les cat\xe9gories",id:"users-categories",level:2},{value:"Automatisation des imports avec Ansible",id:"ansible-import",level:2}],d={toc:p};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cr\xe9ation-et-import-de-donn\xe9es"},"Cr\xe9ation et import de donn\xe9es"),(0,r.kt)("p",null,"Cette section explique comment cr\xe9er et/ou importer un ensemble de donn\xe9es dans une instance PAD+. La d\xe9marche comprend 4 \xe9tapes principales, dans l'ordre :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cr\xe9ation de l'arborescence des cat\xe9gories"),(0,r.kt)("li",{parentName:"ol"},"Cr\xe9ation de s\xe9quences dans l'arborescence (avec ou sans sauvegardes de s\xe9quences existantes)"),(0,r.kt)("li",{parentName:"ol"},"Cr\xe9ation des comptes utilisateurs et inscription optionnelle aux s\xe9quences"),(0,r.kt)("li",{parentName:"ol"},"Attribution des r\xf4les utilisateurs dans les cat\xe9gories")),(0,r.kt)("p",null,"Cette section donne des indications sur les scripts Moodle ou commandes ",(0,r.kt)("a",{parentName:"p",href:"https://moosh-online.com/"},"Moosh")," \xe0 utiliser avec leurs formats de fichier respectifs. Ces \xe9tapes peuvent \xeatre automatis\xe9es avec un ",(0,r.kt)("a",{parentName:"p",href:"#ansible-import"},"playbook Ansible"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Pr\xe9requis")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://moosh-online.com/"},"moosh")," (d\xe9j\xe0 install\xe9 dans la phase de configuration)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ansible.com/ansible_community.html"},"ansible")," (d\xe9j\xe0 utilis\xe9 pour l'installation)")))),(0,r.kt)("h2",{id:"cr\xe9ation-de-larborescence-des-cat\xe9gories"},"Cr\xe9ation de l'arborescence des cat\xe9gories"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un ou plusieurs fichiers ",(0,r.kt)("inlineCode",{parentName:"p"},".xml")," avec l'arborescence des cat\xe9gories. Notez que vous pouvez avoir plusieurs cat\xe9gories \xe0 la racine."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'<categories>\n    <category name="Niveau 1">\n        <category name="Niveau 2">\n            <category name="Niveau 3">\n                <category name="Niveau 4"></category>\n            </category>\n        </category>\n    </category>\n    <category name="Niveau 1">\n        <category name="Niveau 2">\n            <category name="Niveau 3">\n                <category name="Niveau 4"></category>\n            </category>\n        </category>\n    </category>\n</categories>\n')),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Num\xe9ro d'identifiant de cat\xe9gorie")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Il est possible d'ajouter un attribut ",(0,r.kt)("strong",{parentName:"p"},"idnumber='category-1-1'"),", qui correspond au champ \"Num\xe9ro d'identifiant de cat\xe9gorie\" dans les param\xe8tres de la cat\xe9gorie. Cet identifiant pourra \xeatre utilis\xe9 lors de l'import des s\xe9quences \xe0 la place du chemin des cat\xe9gories."),(0,r.kt)("p",{parentName:"div"},"Il n'est par contre pas possible d'ajouter des descriptions de cat\xe9gorie par cette m\xe9thode.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Placez le fichier dans votre dossier PAD+ puis importez le avec la commande moosh ",(0,r.kt)("inlineCode",{parentName:"p"},"category-import")," :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"moosh category-import categories.xml\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'Cat\xe9gorie "Divers"')),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'Par d\xe9faut Moodle cr\xe9e une cat\xe9gorie "Divers" ou "Miscellaneous" \xe0 l\'installation. On peut simplement la supprimer avec la commande ',(0,r.kt)("inlineCode",{parentName:"p"},"moosh category-delete 1"),"."))),(0,r.kt)("h3",{id:"description-categories"},"Description des cat\xe9gories"),(0,r.kt)("p",null,"Il est recommand\xe9 d'ajouter des descriptions sur certaines cat\xe9gories pour aider les usagers."),(0,r.kt)("p",null,"Sur la page de la cat\xe9gorie vis\xe9e, ouvrir son menu d'actions et s\xe9lectionner l'option \"Modifier cette cat\xe9gorie\" pour pouvoir \xe9diter sa description."),(0,r.kt)("p",null,'Par exemple sur les cat\xe9gories "Ateliers compl\xe9mentaires" :'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Voici la liste des ateliers disponibles propos\xe9s par votre \xe9tablissement.\nIl peut s'agir de rencontres avec des intervenants ext\xe9rieurs, d'ateliers collectifs autour d'un sujet en particulier comme la recherche d'emploi, une initiation \xe0 la m\xe9ditation, une sortie culturelle, etc..."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Ils sont ouverts en auto-inscription pour tous les stagiaires."))),(0,r.kt)("p",null,"Par exemple pour la cat\xe9gorie des ressources professionnelles :"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Bienvenue dans l\u2019espace collaboratif ouvert aux professionnels de chaque \xe9tablissement."),"\nVous y retrouverez toutes les ressources mises \xe0 disposition en libre service : des s\xe9quences compl\xe8tes, des fiches pratiques, des document types, etc...")),(0,r.kt)("p",null,"La description s'affiche imm\xe9diatement sous le titre de la cat\xe9gorie."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Exemple de description int\xe9gr\xe9e dans une cat\xe9gorie Ateliers compl\xe9mentaires",src:a(5911).Z,width:"805",height:"412"})),(0,r.kt)("h3",{id:"export-dune-arborescence-existante"},"Export d'une arborescence existante"),(0,r.kt)("p",null,"Si vous avez d\xe9j\xe0 une instance Moodle avec une arborescence, vous pouvez en exporter tout ou partie avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"moosh category-export"),". L'export au format XML contient les titres et num\xe9ros d'identifiant des cat\xe9gories et peut \xeatre r\xe9utilis\xe9 pour l'import."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Export de toute l'arborescence des cat\xe9gories\nmoosh category-import 0\n")),(0,r.kt)("p",null,"Moosh propose des commandes pour manipuler diff\xe9rents types de donn\xe9es Moodle. Voir par exemple les ",(0,r.kt)("a",{parentName:"p",href:"https://moosh-online.com/commands/#category-config-set"},"commandes Moosh d\xe9di\xe9es aux cat\xe9gories"),"."),(0,r.kt)("h2",{id:"cr\xe9ation-des-s\xe9quences"},"Cr\xe9ation des s\xe9quences"),(0,r.kt)("p",null,"Moodle fournit une ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Upload_courses"},"fonctionnalit\xe9 pour cr\xe9er en masse des s\xe9quences (MoodleDoc)")," et importer du contenu existant (au format ",(0,r.kt)("inlineCode",{parentName:"p"},".mbz")," des sauvegardes de s\xe9quence). Cette fonctionnalit\xe9 est accessible via l'interface ou via la ligne de commande."),(0,r.kt)("p",null,"Voici un example de proc\xe9dure :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"donnees/backup")," avec les sauvegardes de s\xe9quence au format ",(0,r.kt)("inlineCode",{parentName:"p"},".mbz")," si vous en avez.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," avec la liste des s\xe9quences \xe0 cr\xe9er (",(0,r.kt)("a",{parentName:"p",href:"pathname:///ressources/sequences.csv"},"voir example de fichier sequences.csv"),")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"fullname,shortname,category_path,startdate,backupfile\nLes m\xe9tiers du numerique,num,Niveau 1 / Niveau 2 / Niveau 3 / Niveau 4,2022-02-01,../../../../donnees/backup/les-metiers-du-numerique.mbz\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Points d'attention")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"shortname : le nom court d'une s\xe9quence doit \xeatre ",(0,r.kt)("strong",{parentName:"li"},"unique sur tout le site")," (mais pas le fullname) - \xe9tablissez une convention de nommage ;"),(0,r.kt)("li",{parentName:"ul"},"category_path : bien utiliser les titres (attribut ",(0,r.kt)("strong",{parentName:"li"},"name"),") et la hi\xe9rarchie des cat\xe9gories - l'espace entre les barres obliques est n\xe9cessaire ;"),(0,r.kt)("li",{parentName:"ul"},"startdate : la date de d\xe9but est fix\xe9e par d\xe9faut \xe0 un jour apr\xe8s l'import. Vous pouvez indiquer une autre date afin que les s\xe9quences apparaissent aux stagiaires \xe0 la date donn\xe9e ;"),(0,r.kt)("li",{parentName:"ul"},"backupfile (facultatif) : le ",(0,r.kt)("strong",{parentName:"li"},"chemin est relatif")," \xe0 la position du script Moodle dans ",(0,r.kt)("inlineCode",{parentName:"li"},"admin/tool/uploadcourse/cli/")," - si vos sauvegardes sont dans un dossier ",(0,r.kt)("inlineCode",{parentName:"li"},"donnees/backup")," \xe0 la racine, il faut donc remonter de 4 niveaux d'abord ",(0,r.kt)("inlineCode",{parentName:"li"},"../../../../donnees/backup"),"."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Importez les cours en ligne de commande (notez le ",(0,r.kt)("strong",{parentName:"p"},"chemin relatif du fichier csv")," \xe0 la racine du projet) :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php admin/tool/uploadcourse/cli/uploadcourse.php --mode=createnew --file=../../../../donnees/sequences.csv\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Champs suppl\xe9mentaires")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Il existe de nombreux ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Upload_courses#Course_information_fields"},"autres champs pour configurer l'import des s\xe9quences (MoodleDoc)"),". Voici quelques d\xe9tails suppl\xe9mentaires :"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"une colonne ",(0,r.kt)("strong",{parentName:"li"},"category_idnumber")," peut remplacer category_path pour utiliser le num\xe9ro d'identifiant des cat\xe9gories ;"),(0,r.kt)("li",{parentName:"ul"},"format : pour pr\xe9ciser le format de s\xe9quence (th\xe9matique par d\xe9faut), il faut renseigner une colonne ",(0,r.kt)("strong",{parentName:"li"},"format")," avec ",(0,r.kt)("em",{parentName:"li"},"topics"),", ",(0,r.kt)("em",{parentName:"li"},"singleactivity"),"... ",(0,r.kt)("strong",{parentName:"li"},"Attention"),' le champ "type d\'activit\xe9" n\'est pas disponible pour le format "activit\xe9 unique" - il faut le corriger \xe0 la main si besoin (forum par d\xe9faut) ;'),(0,r.kt)("li",{parentName:"ul"},"summary : pour pr\xe9ciser le r\xe9sum\xe9 de la s\xe9quence ; ",(0,r.kt)("strong",{parentName:"li"},"attention")," il faut apr\xe8s import \xe9diter la s\xe9quence pour sauvegarder le r\xe9sum\xe9 avec le format correct (HTML, Markdown, texte brut...)"),(0,r.kt)("li",{parentName:"ul"},"enrolment_","[number]"," : diff\xe9rents champs permettent de configurer les m\xe9thodes d'inscription si besoin.")),(0,r.kt)("p",{parentName:"div"},"Notez que cette fonctionnalit\xe9 d'import en masse ne g\xe8re pas toutes les options, contrairement \xe0 la ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Course_restore"},"restauration unique d'une s\xe9quence (MoodleDoc)"),". En particulier le format du r\xe9sum\xe9 (HTML, Markdown, texte brut), l'image de s\xe9quence, le type d'activit\xe9 unique sont ignor\xe9s."))),(0,r.kt)("h3",{id:"gabarits"},"Import des gabarits"),(0,r.kt)("p",null,"Les gabarits sont des mod\xe8les de s\xe9quence ou d'atelier compl\xe9mentaire que vous pouvez importer sur votre instance PAD+ pour les mettre \xe0 disposition de vos contributeurs :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///ressources/sauvegarde-moodle2-course-76-gabarit-20220613-1810-nu.mbz"},'gabarit "s\xe9quence"')," : un mod\xe8le de s\xe9quence structur\xe9 avec 4 s\xe9ances par d\xe9faut et quelques conseils pour la pr\xe9sentation et l'accessibilit\xe9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///ressources/sauvegarde-moodle2-course-427-gabarit_atelier-20220613-1811-nu.mbz"},'gabarit "atelier compl\xe9mentaire"'),' : un mod\xe8le pour les informations d\'un atelier compl\xe9mentaire, sans s\xe9ance mais avec une activit\xe9 "feedback"')),(0,r.kt)("p",null,"Depuis la page ",(0,r.kt)("em",{parentName:"p"},"Administration du site / S\xe9quences / ",(0,r.kt)("strong",{parentName:"em"},"Restaurer une s\xe9quence"),","),' d\xe9posez un des fichiers de gabarit ci-dessus et suivez la proc\xe9dure de restauration. Pour le gabarit "Atelier compl\xe9mentaire", il est conseill\xe9 de s\xe9lectionner "Oui" pour le choix "Inclure les m\xe9thodes d\'inscription" qui permet de garder l\'auto-inscription pour les stagiaires. A vous de voir dans quel endroit de l\'arborescence les importer pour les rendre facilement disponible pour vos usagers (par exemple, parmi les ressources pour les professionnels).'),(0,r.kt)("h2",{id:"users-register"},"Cr\xe9ation des utilisateurs et inscription aux s\xe9quences"),(0,r.kt)("p",null,"Moodle fournit une ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Upload_users"},"fonctionnalit\xe9 pour cr\xe9er des utilisateurs (MoodleDoc)"),". Cette fonctionnalit\xe9 peut aussi les inscrire automatiquement \xe0 des s\xe9quences. Cette fonctionnalit\xe9 est accessible via l'interface ou via la ligne de commande."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," avec les utilisateurs (",(0,r.kt)("a",{parentName:"p",href:"pathname:///ressources/utilisateurs.csv"},"voir example de fichier utilisateurs.csv"),")."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"username,firstname,lastname,email,password,sysrole1,course1,role1,course2,role2,\njordan,Jordan,Richard,jordan.richard@padplus.org,randompassword,manager,,,,\nrose,Rose,Garnier,rose.garnier@padplus.org,randompassword,,shortnamecourse,editingteacher,shortname2,student\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Points d'attention")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},'les 4 premiers champs sont requis - le champ "mot de passe" est requis ou non en fonction de la configuration du site ;'),(0,r.kt)("li",{parentName:"ul"},"sysrole1 : il s'agit de ",(0,r.kt)("strong",{parentName:"li"},"r\xf4le au niveau syst\xe8me (instance globale)")," - dans une ",(0,r.kt)("a",{parentName:"li",href:"/organisation/contenu"},"organisation PAD+"),", seuls les ",(0,r.kt)("strong",{parentName:"li"},"gestionnaires d'instance")," ont ce r\xf4le ",(0,r.kt)("inlineCode",{parentName:"li"},"manager")," ; aucun autre r\xf4le ne doit \xeatre attribu\xe9 \xe0 ce niveau ;"),(0,r.kt)("li",{parentName:"ul"},"course1 : utiliser le nom court de la s\xe9quence ;"),(0,r.kt)("li",{parentName:"ul"},"role1 : r\xf4le de l'utilisateur dans la s\xe9quence, soit editingteacher pour un intervenant normal, teacher pour un intervenant non \xe9diteur, student pour un stagiaire."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Importez les utilisateurs (attention au ",(0,r.kt)("strong",{parentName:"p"},"chemin du fichier csv"),") :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php admin/tool/uploaduser/cli/uploaduser.php --file=../../../../donnees/utilisateurs.csv --delimiter_name=comma\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Champs suppl\xe9mentaires")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Il existe de nombreux ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/311/en/Upload_users#User_Fields_that_can_be_included"},"autres champs pour la cr\xe9ation des utilisateurs (MoodleDoc)"),"."))),(0,r.kt)("h2",{id:"users-categories"},"Attribution des r\xf4les utilisateurs dans les cat\xe9gories"),(0,r.kt)("p",null,"Pour finaliser une ",(0,r.kt)("a",{parentName:"p",href:"/organisation/contenu"},"organisation PAD+"),", il faut que les utilisateurs se voient affecter les r\xf4les ad\xe9quats dans les cat\xe9gories concern\xe9es. Si cela est possible par des ",(0,r.kt)("a",{parentName:"p",href:"/organisation/roles"},"proc\xe9dures manuelles dans l'interface"),", le script ",(0,r.kt)("inlineCode",{parentName:"p"},"assign_category_roles.php")," permet d'attribuer ses r\xf4les \xe0 partir d'un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".csv"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," avec les attributions des r\xf4les par cat\xe9gorie aux utilisateurs (",(0,r.kt)("a",{parentName:"p",href:"pathname:///ressources/utilisateurs_categories.csv"},"voir example de fichier utilisateurs_categories.csv"),")."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"category_name,role,username1,username2,username3\nSite 1,coursecreator,farida,felix,\nAteliers 1,coursecreator,farida,felix,\nAteliers 1,student,sabine,sami,sara\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Points d'attention")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"category_name : le nom de la cat\xe9gorie (le nom doit \xeatre unique - il s'agit normalement d'une cat\xe9gorie \xe0 la racine) ;"),(0,r.kt)("li",{parentName:"ul"},"role : le r\xf4le \xe0 attribuer dans cette cat\xe9gorie, soit ",(0,r.kt)("inlineCode",{parentName:"li"},"manager")," pour un gestionnaire de site, ",(0,r.kt)("inlineCode",{parentName:"li"},"coursecreator")," pour un professionnel contributeur, ",(0,r.kt)("inlineCode",{parentName:"li"},"student")," pour un stagiaire ;"),(0,r.kt)("li",{parentName:"ul"},"username_","[number]"," : la liste des utilisateurs pour qui attribuer le r\xf4le dans la cat\xe9gorie ;"),(0,r.kt)("li",{parentName:"ul"},"l'attribution des r\xf4les est idempotent : le script peut donc \xeatre jou\xe9 plusieurs fois."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Attribuez les r\xf4les (attention au ",(0,r.kt)("strong",{parentName:"p"},"chemin du fichier csv"),") :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php local/padplusextensions/cli/assign_category_roles.php ../../../donnees/utilisateurs_categories.csv\n")))),(0,r.kt)("h2",{id:"ansible-import"},"Automatisation des imports avec Ansible"),(0,r.kt)("p",null,"Les \xe9tapes ci-dessus peuvent \xeatre encha\xeen\xe9es par un playbook Ansible si toutes les donn\xe9es sont pr\xe9par\xe9es \xe0 l'avance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Construisez votre dossier des donn\xe9es \xe0 importer avec les diff\xe9rents fichiers ",(0,r.kt)("inlineCode",{parentName:"p"},".xml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," et ",(0,r.kt)("inlineCode",{parentName:"p"},".mbz"),". Voici un exemple d'organisation :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"\ud83d\udcc2 donnees\n\u2523\ud83d\udcc2 backup\n\u2503 \u2523 architecture-construction.mbz\n\u2503 \u2523 les-metiers-du-numerique.mbz\n\u2503 \u2517 tout-sur-le-droit-au-logement.mbz\n\u2523 category_1.xml\n\u2523 category_2.xml\n\u2523 sequences_1.csv\n\u2523 sequences_2.csv\n\u2523 utilisateurs.csv\n\u2517 utilisateurs_categories.csv\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Nommage du dossier source et chemins des fichiers")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Lors de l'ex\xe9cution du playbook, les donn\xe9es sont transf\xe9r\xe9es sur le serveur, \xe0 la racine du site, dans un dossier qui porte le ",(0,r.kt)("strong",{parentName:"p"},"nom terminal du dossier source"),". Par exemple si vos donn\xe9es sont dans un dossier local ",(0,r.kt)("inlineCode",{parentName:"p"},"/PAD/donnees"),", les donn\xe9es seront transf\xe9r\xe9es sur le serveur dans un dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/my-pad.org/donnees")," (o\xf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/my-pad.org/")," est le dossier du site). Il faut donc choisir un ",(0,r.kt)("strong",{parentName:"p"},"nom terminal sans collision")," avec les sources du site. Le ",(0,r.kt)("strong",{parentName:"p"},"dossier de donn\xe9es sur le serveur est supprim\xe9")," \xe0 la fin du playbook."),(0,r.kt)("p",{parentName:"div"},"V\xe9rifiez que le chemin d'acc\xe8s aux fichiers de sauvegarde est correct dans les ",(0,r.kt)("strong",{parentName:"p"},"fichiers csv de s\xe9quence"),". Le chemin est relatif au script Moodle ",(0,r.kt)("inlineCode",{parentName:"p"},"admin/tool/uploadcourse/cli/uploadcourse.php"),", et doit donc commencer par ",(0,r.kt)("inlineCode",{parentName:"p"},"../../../../")," pour remonter \xe0 la racine du projet. Dans les exemples ci-dessus, le chemin vers les sauvegardes commence toujours par ",(0,r.kt)("inlineCode",{parentName:"p"},"../../../../donnees/backup"),". On peut aussi utiliser des chemins absolus si connus d'avance.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dans votre fichier d'inventaire Ansible, rajouter une section ",(0,r.kt)("inlineCode",{parentName:"p"},"import_data"),". Notez qu'il est possible de scinder les sp\xe9cifications des cat\xe9gories et s\xe9quences en plusieurs fichiers qui seront lus les uns \xe0 la suite des autres :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"all:\nchildren:\n    webservers:\n    hosts:\n        XXX # adresse du serveur web\n    vars:\n        moodle:\n            # ...param\xe8tres Moodle\n        db:\n            # ...param\xe8tres base de donn\xe9es\n        import_data: # param\xe8tres pour l'import des donn\xe9es\n            # chemin vers le dossier source des donn\xe9es, sans barre oblique \xe0 la fin\n            source_folder: ../../PAD/donnees\n            # le nom terminal du dossier source sera le nom du dossier cible sur le serveur, ici 'donnees'\n            users_file: donnees/utilisateurs.csv\n            users_categories_file: donnees/utilisateurs_categories.csv\n            category_files:\n                - donnees/categories_1.xml\n                - donnees/categories_2.xml\n            course_files:\n                - donnees/sequences_1.csv\n                - donnees/sequences_2.csv\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ex\xe9cutez le playbook Ansible ",(0,r.kt)("inlineCode",{parentName:"p"},"import_data.yml")," avec votre fichier d'inventaire (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"my-pad.hosts.yml"),") :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ansible-playbook import_data.yml -i my-pad.hosts.yml -u root\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Ex\xe9cution s\xe9lective des t\xe2ches")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Il est possible de n'ex\xe9cuter qu'une partie des t\xe2ches d'import avec les ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_tags.html#selecting-or-skipping-tags-when-you-run-a-playbook"},"tags Ansibles"),". Notez que chaque \xe9tape d\xe9pend des pr\xe9c\xe9dentes :"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"transfer-data : transfert des donn\xe9es d'import sur le serveur"),(0,r.kt)("li",{parentName:"ol"},"categories : cr\xe9ation de l'arborescence des cat\xe9gories"),(0,r.kt)("li",{parentName:"ol"},"courses : cr\xe9ation de s\xe9quences dans l'arborescence"),(0,r.kt)("li",{parentName:"ol"},"users : cr\xe9ation des comptes utilisateurs et inscription aux s\xe9quences"),(0,r.kt)("li",{parentName:"ol"},"users_categories : attribution des r\xf4les utilisateurs dans les cat\xe9gories"),(0,r.kt)("li",{parentName:"ol"},"cleanup : suppression du dossier de donn\xe9es sur le serveur")),(0,r.kt)("p",{parentName:"div"},"Par exemple, pour n'ex\xe9cuter que la cr\xe9ation des cat\xe9gories puis des s\xe9quences :"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"ansible-playbook import_data.yml -i my-pad.hosts.yml -u root --tags categories,courses")),(0,r.kt)("p",{parentName:"div"},"Par d\xe9faut la premi\xe8re et derni\xe8re t\xe2che sont toujours ex\xe9cut\xe9es : transfert des donn\xe9es sur le serveur puis suppression quand les autres t\xe2ches sont effectu\xe9es."),(0,r.kt)("p",{parentName:"div"},"Si on souhaite ignorer la t\xe2che suppression pour conserver les donn\xe9es sur le serveur, il suffit d'utiliser la commande :"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"ansible-playbook import_data.yml -i my-pad.hosts.yml -u root --skip-tags cleanup")))),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"T\xe2ches optionnelles")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Le playbook d\xe9finit aussi des t\xe2ches qui ne sont pas ex\xe9cut\xe9es par d\xe9faut mais \xe0 la demande avec des tags :"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tags remove-misc-category"),' : supprimer la cat\xe9gorie par d\xe9faut de Moodle (avec l\'identifiant 1, "Divers" ou "Miscellaneous").'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tags force-single-activity-page"),' : forcer le type d\'activit\xe9 "page" pour ',(0,r.kt)("strong",{parentName:"li"},"toutes les s\xe9quences \xe0 activit\xe9 unique")," (le type d'activit\xe9 n'est pas restaur\xe9 par l'import, ces s\xe9quences se retrouvent alors avec une activit\xe9 \"forum\" par d\xe9faut)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tags force-one-page-per-topic")," : forcer la mise en page de toutes les s\xe9quences \xe0 ",(0,r.kt)("strong",{parentName:"li"},"une s\xe9ance par page")," (format recommand\xe9 pour la PAD+)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--tags force-html-format-for-description-and-summary")," : forcer le format HTML pour les ",(0,r.kt)("strong",{parentName:"li"},"descriptions des cat\xe9gories")," et les ",(0,r.kt)("strong",{parentName:"li"},"r\xe9sum\xe9s des s\xe9quences")," (ce format n'est pas restaur\xe9 par l'import).")))))}c.isMDXComponent=!0},5911:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/atelier_description-12e0948f2d901075b4cf325578848db9.png"}}]);