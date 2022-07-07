"use strict";(self.webpackChunkdoc_epshad=self.webpackChunkdoc_epshad||[]).push([[928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),p=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?s.createElement(g,l(l({ref:t},u),{},{components:n})):s.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var s=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},l="Guide du d\xe9veloppeur",r={unversionedId:"developpement/guide",id:"developpement/guide",title:"Guide du d\xe9veloppeur",description:"Cette page donne une compr\xe9hension g\xe9n\xe9rale des changements apport\xe9s sur la PAD+ par rapport \xe0 la base de code Moodle, en vue de faciliter sa maintenance. En particulier elle introduit les diff\xe9rents \xe9l\xe9ments pour :",source:"@site/docs/developpement/guide.md",sourceDirName:"developpement",slug:"/developpement/guide",permalink:"/pad-doc/developpement/guide",draft:!1,editUrl:"https://github.com/e-PSHAD/pad-doc/edit/main/docs/developpement/guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Fonctionnalit\xe9s PAD+",permalink:"/pad-doc/developpement/features"},next:{title:"Environnement local",permalink:"/pad-doc/developpement/setup-local"}},o={},p=[{value:"Vue d&#39;ensemble des changements du code",id:"vue-densemble-des-changements-du-code",level:2},{value:"Rep\xe8res de d\xe9veloppement PAD+",id:"rep\xe8res-de-d\xe9veloppement-pad",level:2},{value:"Langage",id:"langage",level:3},{value:"Apparence &amp; marque blanche (styles)",id:"apparence--marque-blanche-styles",level:3},{value:"Ic\xf4nes",id:"ic\xf4nes",level:3},{value:"Navigation lat\xe9rale",id:"navigation-lat\xe9rale",level:3},{value:"Structure et rendu HTML",id:"structure-et-rendu-html",level:3},{value:"Mes s\xe9quences et bloc vue d&#39;ensemble",id:"mes-s\xe9quences-et-bloc-vue-densemble",level:3},{value:"Options de configuration",id:"options-de-configuration",level:4},{value:"Apparence et affichage",id:"apparence-et-affichage",level:4},{value:"Sauvegarde des options",id:"sauvegarde-des-options",level:4},{value:"Modifications en profondeur",id:"modifications-en-profondeur",level:4},{value:"Parcours des stagiaires",id:"parcours-des-stagiaires",level:3},{value:"Visioconf\xe9rence",id:"visioconf\xe9rence",level:3},{value:"Comment rep\xe9rer le d\xe9tail des changements ?",id:"details-changements",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guide-du-d\xe9veloppeur"},"Guide du d\xe9veloppeur"),(0,a.kt)("p",null,"Cette page donne une compr\xe9hension g\xe9n\xe9rale des changements apport\xe9s sur la PAD+ par rapport \xe0 la base de code Moodle, en vue de faciliter sa maintenance. En particulier elle introduit les diff\xe9rents \xe9l\xe9ments pour :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"savoir comment les changements sont structur\xe9s"),(0,a.kt)("li",{parentName:"ul"},"conna\xeetre les rep\xe8res essentiels pour modifier diff\xe9rents aspects de la PAD+"),(0,a.kt)("li",{parentName:"ul"},"savoir rep\xe9rer ces changements dans le code")),(0,a.kt)("h2",{id:"vue-densemble-des-changements-du-code"},"Vue d'ensemble des changements du code"),(0,a.kt)("p",null,"Les changements apport\xe9s pour la PAD+ sont localis\xe9s dans diff\xe9rents endroits, en priorit\xe9 dans des plugins qui sont le m\xe9canisme de base pour les extensions de Moodle."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plugin du ",(0,a.kt)("strong",{parentName:"li"},"th\xe8me PAD+")," (",(0,a.kt)("inlineCode",{parentName:"li"},"theme/padplus"),") : ce plugin exploite les ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Themes"},"m\xe9canismes des th\xe8mes (MoodleDoc)")," pour d\xe9finir le style marque blanche de la PAD+ ainsi que les changements principaux sur les pages standards."),(0,a.kt)("li",{parentName:"ul"},"Plugin des ",(0,a.kt)("strong",{parentName:"li"},"extensions locales pour la PAD+")," (",(0,a.kt)("inlineCode",{parentName:"li"},"local/padplusextensions"),") : ce plugin h\xe9berge des extensions qui ne peuvent \xeatre fait dans le th\xe8me, ainsi que les fonctions communes \xe0 toutes les extensions PAD+."),(0,a.kt)("li",{parentName:"ul"},"Plugin ",(0,a.kt)("strong",{parentName:"li"},"PAD+ progression stagiaire")," (",(0,a.kt)("inlineCode",{parentName:"li"},"blocks/padplusmyprogress"),") : bloc pour l'affichage sur le tableau de bord des stagiaires, compl\xe9mentaire de la page parcours."),(0,a.kt)("li",{parentName:"ul"},"Plugin ",(0,a.kt)("strong",{parentName:"li"},"PAD+ visioconf\xe9rence")," (",(0,a.kt)("inlineCode",{parentName:"li"},"blocks/padplusvideocall"),") : bloc pour passer des appels vid\xe9os sur le tableau de bord des professionnels."),(0,a.kt)("li",{parentName:"ul"},"De plus, le ",(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/plugins/mod_bigbluebuttonbn"},"plugin externe BigBlueButtonBN (Moodle)")," est directement int\xe9gr\xe9 dans la base de code PAD+ (comme dans Moodle 4).")),(0,a.kt)("p",null,"Deux pages ont \xe9t\xe9 d\xe9velopp\xe9es pour de nouvelles fonctionnalit\xe9s n'existant pas dans la version 3 de Moodle. Ces pages-fichiers suivent ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle_architecture#How_Moodle_code_is_organised"},'le pattern "Transaction Script" (MoodleDoc)')," et ne sont pas h\xe9berg\xe9s directement sous un plugin PAD+. Le code qu'elles utilisent est cependant modularis\xe9 dans le plugin des ",(0,a.kt)("strong",{parentName:"p"},"extensions locales"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La page ",(0,a.kt)("strong",{parentName:"li"},"Mes s\xe9quences")," sous ",(0,a.kt)("inlineCode",{parentName:"li"},"my/courses.php"),", qui \xe9mule la page pr\xe9sente dans Moodle 4."),(0,a.kt)("li",{parentName:"ul"},"La page ",(0,a.kt)("strong",{parentName:"li"},"Mon parcours / Parcours des stagiaires")," sous ",(0,a.kt)("inlineCode",{parentName:"li"},"my/progress.php"),".")),(0,a.kt)("p",null,"Des modifications \xe0 la base de code Moodle ont \xe9t\xe9 apport\xe9es quand ce n'\xe9tait pas possible autrement."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plusieurs modifications sur le bloc ",(0,a.kt)("strong",{parentName:"li"},"Vue d'ensemble des s\xe9quences"),' pr\xe9sent sur le tableau de bord et la page "Mes s\xe9quences", ainsi que dans les ',(0,a.kt)("strong",{parentName:"li"},"fonctions et services associ\xe9s"),"."),(0,a.kt)("li",{parentName:"ul"},"La mise \xe0 jour de la ",(0,a.kt)("strong",{parentName:"li"},"biblioth\xe8que d'ic\xf4nes FontAwesome")," de la version 4 vers la version 5."),(0,a.kt)("li",{parentName:"ul"},"La d\xe9finition des ",(0,a.kt)("strong",{parentName:"li"},"couleurs d'avant-plan")," accessibles pour l'\xe9diteur ATTO (voir ",(0,a.kt)("inlineCode",{parentName:"li"},"lib/editor/atto/plugins/fontcolor/yui/src/button/js/button.js"),").")),(0,a.kt)("p",null,"Les derniers changements visibles dans le d\xe9p\xf4t sont des fichiers ajout\xe9s pour le d\xe9veloppement (Docker) et le d\xe9ploiement (GitHub Actions), qui n'impactent pas les fonctionnalit\xe9s."),(0,a.kt)("h2",{id:"rep\xe8res-de-d\xe9veloppement-pad"},"Rep\xe8res de d\xe9veloppement PAD+"),(0,a.kt)("h3",{id:"langage"},"Langage"),(0,a.kt)("p",null,"Moodle propose un syst\xe8me de complet de traduction et adaptation des cha\xeenes de langage dans l'interface."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les nouvelles cha\xeenes des extensions PAD+ sont d\xe9finies sous ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"theme/padplus/lang"))," pour toues les plugins PAD+ \xe0 l'exception de ",(0,a.kt)("inlineCode",{parentName:"li"},"blocks/padplusvideocall"),"."),(0,a.kt)("li",{parentName:"ul"},"Les cha\xeenes standards modifi\xe9es pour la PAD+ sont d\xe9finies dans un ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/developpement/custom-lang"},"paquetage de personnalisation")),".")),(0,a.kt)("p",null,"Cette approche permet de limiter le nombre d'endroits o\xf9 rechercher ces cha\xeenes."),(0,a.kt)("h3",{id:"apparence--marque-blanche-styles"},"Apparence & marque blanche (styles)"),(0,a.kt)("p",null,"Les styles de la PAD+ sont une extension du th\xe8me par d\xe9faut Boost de Moodle (lui-m\xeame bas\xe9 sur Bootstrap v4). Les extensions sont toutes localis\xe9es sous ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"theme/padplus/scss"))," pour faciliter la r\xe9utilisation et la modification, y compris pour les autres plugins PAD+."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    \ud83d\udcc2 scss\n    \u2523 pre.scss  # d\xe9finition des couleurs et variables de base, surcharg\xe9es par la marque blanche\n    \u2523 post.scss # d\xe9finition des r\xe8gles PAD+ surchargeant Boost\n    \u2517\ud83d\udcc2 post\n      \u2523 _animations.scss\n      \u2523 _focus.scss      # red\xe9finition des styles de focus pour diff\xe9rents \xe9l\xe9ments\n      \u2523 _typography.scss # r\xe8gles typographiques de base\n      \u2523\ud83d\udcc2 components # composants graphiques r\xe9utilisables\n      \u2523\ud83d\udcc2 layouts    # mise en page g\xe9n\xe9rale des pages\n      \u2523\ud83d\udcc2 mixins     # fonctions r\xe9utilisables\n      \u2517\ud83d\udcc2 pages      # r\xe8gles sp\xe9cifiques \xe0 chaque page\n")),(0,a.kt)("p",null,"Les param\xe9trages de la marque blanche dans l'administration sont pris en compte par la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"theme_padplus_get_main_scss_content")," de ",(0,a.kt)("inlineCode",{parentName:"p"},"/theme/padplus/lib.php"),"."),(0,a.kt)("h3",{id:"ic\xf4nes"},"Ic\xf4nes"),(0,a.kt)("p",null,"Afin de mettre \xe0 jour le panel d'ic\xf4nes disponibles, la version 5 de FontAwesome a \xe9t\xe9 install\xe9 dans le th\xe8me Boost (dont h\xe9rite le th\xe8me PAD+). Cette mise \xe0 jour demande des modifications particuli\xe8res : voir le fichier ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/PAD/blob/pad-main/theme/boost/scss/fontawesome/readme_moodle.txt"},"fontawesome/readme_moodle.txt")," et le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/PAD/commit/ed65f58ee493c92b8e6a316eab6058f459a67a65"},'commit "DANGER: fix FA5 to be used by Moodle Boost theme"')," pour la fa\xe7on de proc\xe9der."),(0,a.kt)("p",null,"Par endroit, Moodle rajoute une surcouche pour ins\xe9rer des ic\xf4nes. Cette surcouche peut \xeatre \xe9tendue ou surcharg\xe9e dans la classe ",(0,a.kt)("inlineCode",{parentName:"p"},"theme/padplus/classes/output/icon_system_fontawesome.php"),"."),(0,a.kt)("h3",{id:"navigation-lat\xe9rale"},"Navigation lat\xe9rale"),(0,a.kt)("p",null,"Le menu de navigation qui appara\xeet dans la colonne lat\xe9rale est construit en fonction de l'utilisateur et de la page sur laquelle il se trouve. Moodle passe par plusieurs \xe9tapes complexes pour construire ce menu. Cette section r\xe9capitule la couche apport\xe9e par la PAD+."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"local_padplusextensions_extend_navigation")," dans la fichier ",(0,a.kt)("inlineCode",{parentName:"li"},"local/padplusextensions/lib.php"),' permet d\'ajouter des \xe9l\xe9ments \xe0 la navigation globale (par exemple l\'acc\xe8s aux pages "Mes s\xe9quences" et "Mon parcours").'),(0,a.kt)("li",{parentName:"ul"},"Le fichier surcharg\xe9 ",(0,a.kt)("inlineCode",{parentName:"li"},"theme/padplus/layout/columns2.php")," d\xe9finit l'ordre et l'affichage final des \xe9l\xe9ments dans le menu lat\xe9ral, en particulier l'acc\xe8s aux cat\xe9gories de s\xe9quences.")),(0,a.kt)("h3",{id:"structure-et-rendu-html"},"Structure et rendu HTML"),(0,a.kt)("p",null,"Le th\xe8me PAD+ surcharge quand c'est n\xe9cessaire la structure et le rendu HTML du th\xe8me Boost. Il utilise les deux m\xe9canismes qui coexistent dans Moodle pour cela :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"les classes ",(0,a.kt)("inlineCode",{parentName:"li"},"renderer"),", qui peuvent g\xe9n\xe9rer directement du HTML et \xeatre ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Overriding_a_renderer"},"surcharg\xe9es dans Moodle (MoodleDoc)")," ;"),(0,a.kt)("li",{parentName:"ul"},"les fichiers ",(0,a.kt)("inlineCode",{parentName:"li"},"mustache"),", qui utilisent les ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Templates"},"mod\xe8les mustache pour HTML (MoodleDoc)"),", mais pr\xe9sents uniquement dans les parties les plus r\xe9centes de Moodle.")),(0,a.kt)("p",null,"La surcharge dans un th\xe8me repose sur des conventions de nommage aux r\xe8gles complexes. Il est donc recommand\xe9 de s'inspirer de l'arborescence d\xe9crite ci-dessous."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," \ud83d\udcc2 theme\n  \u2517\ud83d\udcc2 padplus\n    \u2523\ud83d\udcc2 classes         # surcharge des classes renderer\n    \u2503 \u2517\ud83d\udcc2 output\n    \u2503   \u2523 core_renderer.php             # fonctions de rendu pour les \xe9l\xe9ments communs de l'interface\n    \u2503   \u2523 format_topics_renderer.php    # fonctions de rendu des activit\xe9s dans les s\xe9quences th\xe9matiques\n    \u2503   \u2523 icon_system_fontawesome.php   # extensions du syst\xe8me d'ic\xf4ne (voir ci-dessus)\n    \u2503   \u2517\ud83d\udcc2 core\n    \u2503     \u2517 course_renderer.php         # fonctions de rendu de l'arborescence des cat\xe9gories et s\xe9quences\n    \u2523...\n    \u2523\ud83d\udcc2 layout\n    \u2503 \u2517 columns2.php     # contexte pour la mise en page \"2 colonnes\" de Boost (menu lat\xe9ral)\n    \u2523...\n    \u2517\ud83d\udcc2 templates       # surcharge des fichier mustache\n      \u2523\ud83d\udcc2 block_myoverview  # mod\xe8les pour le bloc \"vue d'ensemble des s\xe9quences\"\n      \u2523\ud83d\udcc2 core              # mod\xe8les g\xe9n\xe9riques (blocs, fil d'ariane, ent\xeate de page)\n      \u2523\ud83d\udcc2 core_calendar     # mod\xe8les pour les calendriers\n      \u2523\ud83d\udcc2 core_course       # mod\xe8les g\xe9n\xe9riques pour les s\xe9quences et activit\xe9s\n      \u2523...\n      \u2517\ud83d\udcc2 theme_boost\n        \u2523 flat_navigation.mustache  # mod\xe8le pour le menu lat\xe9ral, li\xe9 \xe0 columns2.php\n        \u2523 footer.mustache           # pied de page g\xe9n\xe9ral\n        \u2517 navbar.mustache           # ent\xeate g\xe9n\xe9ral (bandeau de navigation sur le site)\n")),(0,a.kt)("h3",{id:"mes-s\xe9quences-et-bloc-vue-densemble"},"Mes s\xe9quences et bloc vue d'ensemble"),(0,a.kt)("p",null,"La page \"Mes s\xe9quences\" affiche toutes les s\xe9quences auxquels l'utilisateur est inscrit, en qualit\xe9 de stagiaire, intervenant ou autre. Cette page existe dans Moodle 4 mais pas dans Moodle 3. Il s'agit en fait d'une nouvelle page affichant le bloc \"Vue d'ensemble des s\xe9quence\". Celui-ci est d\xe9j\xe0 pr\xe9sent sur le tableau de bord avec d'autres blocs (progr\xe8s, \xe9v\xe9nements, visioconf\xe9rence) mais cette page permet de n'afficher que les s\xe9quences."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Voir\n- page my/courses.php\n- classe local/padplusextensions/classes/output/mycourses_renderer.php\n")),(0,a.kt)("p",null,"Le bloc \"Vue d'ensemble des s\xe9quence\" a \xe9t\xe9 adapt\xe9 pour simplifier ses fonctionnalit\xe9s et promouvoir les filtres d'affichage. Cependant toutes les modifications apport\xe9es n'ont pu \xeatre modularis\xe9es dans les plugins PAD+. Cette section d\xe9taille donc les diff\xe9rents changements du bloc."),(0,a.kt)("h4",{id:"options-de-configuration"},"Options de configuration"),(0,a.kt)("p",null,"Les options de filtre et d'affichage sont modifi\xe9es par la ",(0,a.kt)("a",{parentName:"p",href:"/installation/configuration"},"configuration automatique")," (visible sous ",(0,a.kt)("em",{parentName:"p"},"Administration du site / Plugins / Blocs / ",(0,a.kt)("strong",{parentName:"em"},"Vue d'ensemble des s\xe9quences")," "),") :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"filtres disponibles"),(0,a.kt)("li",{parentName:"ul"},"affichage en carte ou liste uniquement")),(0,a.kt)("h4",{id:"apparence-et-affichage"},"Apparence et affichage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modification de l'apparence du bloc pour plus de lisibilit\xe9"),(0,a.kt)("li",{parentName:"ul"},'Affichage du nombre total de s\xe9quences dans le filtre "Toutes mes s\xe9quences"'),(0,a.kt)("li",{parentName:"ul"},"S\xe9quences affich\xe9es par ordre de consultation (les plus r\xe9centes en premier) ; options de tri masqu\xe9es."),(0,a.kt)("li",{parentName:"ul"},"Ajout en favori mis en avant ; option pour cacher des s\xe9quences retir\xe9e.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Voir\n- styles theme/padplus/scss/post/components/_block_padplusmyprogress.scss\n- mod\xe8les mustache surcharg\xe9s theme/padplus/templates/block_myoverview\n")),(0,a.kt)("h4",{id:"sauvegarde-des-options"},"Sauvegarde des options"),(0,a.kt)("p",null,"Par d\xe9faut Moodle m\xe9morise les derni\xe8res options choisies par l'utilisateur. Cette sauvegarde automatique est d\xe9sactiv\xe9e car elle perturbe les utilisateurs en modifiant l'affichage par d\xe9faut de la page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Voir modules Javascript surcharg\xe9s PAD/theme/padplus/amd/src/myoverview_*.js\n")),(0,a.kt)("h4",{id:"modifications-en-profondeur"},"Modifications en profondeur"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Modifications dans Moodle")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Les fonctionnalit\xe9s ci-dessous ont demand\xe9 des modifications ou des correctifs dans la base de code Moodle. La liste des fichiers impact\xe9s est donn\xe9e \xe0 titre indicatif, cependant ces modifications induisent une bonne compr\xe9hension du code Moodle."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},'Ajout du filtre "Mes ressources professionnelles" pour les professionnels'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"blocks/myoverview/classes/output/main.php"),(0,a.kt)("li",{parentName:"ul"},"blocks/myoverview/lib.php"),(0,a.kt)("li",{parentName:"ul"},"blocks/myoverview/settings.php"),(0,a.kt)("li",{parentName:"ul"},"course/externallib.php"),(0,a.kt)("li",{parentName:"ul"},"course/lib.php"),(0,a.kt)("li",{parentName:"ul"},"local/padplusextensions/lib.php"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Affichage des tags pour rep\xe9rer les ateliers compl\xe9mentaires et les ressources professionnelles"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"course/classes/external/course_summary_exporter.php"),(0,a.kt)("li",{parentName:"ul"},"course/externallib.php"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Affichage d'une pagination classique"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"blocks/myoverview/amd/src/view.js"),(0,a.kt)("li",{parentName:"ul"},"lib/amd/src/paged_content_factory.js")))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"D\xe9tail des changements")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/e-PSHAD/PAD/commit/d5a3e0fb9c260648de6cc478cb8e87c3d8358c7b"},"commit \"Merge branch 'my-sequences' into pad-dev\"")," int\xe8gre la plupart des changements d\xe9crits ci-dessus. Voir aussi la ",(0,a.kt)("a",{parentName:"p",href:"#details-changements"},"section sur le d\xe9tail des changements ci-dessous")," pour les rep\xe8res dans le code."))),(0,a.kt)("h3",{id:"parcours-des-stagiaires"},"Parcours des stagiaires"),(0,a.kt)("p",null,"La page ",(0,a.kt)("strong",{parentName:"p"},"Mon parcours / Parcours des stagiaires")," est une fonctionnalit\xe9 sp\xe9cifique de la PAD+. Elle se trouve d\xe9finie par la page ",(0,a.kt)("inlineCode",{parentName:"p"},"my/progress.php")," et des modules sous ",(0,a.kt)("inlineCode",{parentName:"p"},"local/padplusextensions"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La page d'entr\xe9e ",(0,a.kt)("inlineCode",{parentName:"li"},"my/progress.php")," initialise la page et appelle la classe ",(0,a.kt)("inlineCode",{parentName:"li"},"myprogress_renderer")," pour le rendu initial ;"),(0,a.kt)("li",{parentName:"ul"},"dans le navigateur, le module Javascript ",(0,a.kt)("inlineCode",{parentName:"li"},"myprogress_view")," interroge le service web ",(0,a.kt)("inlineCode",{parentName:"li"},"progress_overview")," pour r\xe9cup\xe9rer les donn\xe9es de progression, fait le rendu final et g\xe8re les interactions ;"),(0,a.kt)("li",{parentName:"ul"},"les donn\xe9es de progression sont calcul\xe9es dans les fonctions de ",(0,a.kt)("inlineCode",{parentName:"li"},"progresslib.php")," ;"),(0,a.kt)("li",{parentName:"ul"},"l'export Excel est r\xe9alis\xe9 dans ",(0,a.kt)("inlineCode",{parentName:"li"},"progress_xls.php")," gr\xe2ce \xe0 la biblioth\xe8que Excel int\xe9gr\xe9e \xe0 Moodle.")),(0,a.kt)("p",null,"Le bloc ",(0,a.kt)("strong",{parentName:"p"},"PAD+ progression stagiaire"),' affich\xe9 sur le tableau de bord des stagiaires utilise les m\xeames mod\xe8le et fonction que le r\xe9sum\xe9 affich\xe9 en t\xeate de la page "Parcours".'),(0,a.kt)("h3",{id:"visioconf\xe9rence"},"Visioconf\xe9rence"),(0,a.kt)("p",null,"Le ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.org/plugins/mod_bigbluebuttonbn"},"plugin externe BigBlueButtonBN (Moodle)")," est directement int\xe9gr\xe9 dans la base de code PAD+. Il permet d'ajouter l'activit\xe9 \"classe virtuelle\" dans les s\xe9quences. Aucune modification n'a \xe9t\xe9 apport\xe9e \xe0 ce plugin."),(0,a.kt)("p",null,"La PAD+ ajoute deux fonctionnalit\xe9s pour faciliter la cr\xe9ation de visioconf\xe9rence hors des s\xe9quences :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"le bloc ",(0,a.kt)("strong",{parentName:"li"},"PAD+ visioconf\xe9rence")," pour les professionnels permet d'inviter ou de cr\xe9er un lien \xe0 partager pour une visioconf\xe9rence avec des utilisateurs PAD+ ;"),(0,a.kt)("li",{parentName:"ul"},"un bouton d'appel direct en visioconf\xe9rence est disponible sur la page profil des utilisateurs (voir la fonction ",(0,a.kt)("inlineCode",{parentName:"li"},"render_context_header")," du ",(0,a.kt)("inlineCode",{parentName:"li"},"core_renderer")," PAD+).")),(0,a.kt)("p",null,"Ces extensions pour la visioconf\xe9rence sont en grande partie localis\xe9es dans le plugin ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks/padplusvideocall"),". Le plugin contient les biblioth\xe8ques, mod\xe8les mustache, modules Javascript pour l'interface et les interactions avec l'utilisateur. Il utilise la biblioth\xe8que du plugin BigBlueButtonBN pour interagir avec le serveur BigBlueButton."),(0,a.kt)("p",null,"En plus des interfaces et des modules Javascript, le bloc Visioconf\xe9rence d\xe9finit plusieurs entit\xe9s Moodle sous ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks/padplusvideocall/db")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 permissions (pour les professionnels) ",(0,a.kt)("inlineCode",{parentName:"li"},"block/padplusvideocall:createvideocall")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"block/padplusvideocall:invitevideocall")," ;"),(0,a.kt)("li",{parentName:"ul"},"2 notifications, pour les invitations et les liens de visioconf\xe9rence ;"),(0,a.kt)("li",{parentName:"ul"},"2 services web, un pour la recherche des participants et un pour la g\xe9n\xe9ration de lien de visioconf\xe9rence.")),(0,a.kt)("p",null,"Quand un participant rejoint une visioconf\xe9rence par un des deux moyens ci-dessus, il est dirig\xe9 vers la page ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks/padplusvideocall/bbbpad_videocall.php"),". Cette page sert de contr\xf4leur pour entrer et sortir d'une visioconf\xe9rence (son r\xf4le est similaire au contr\xf4leur ",(0,a.kt)("inlineCode",{parentName:"p"},"mod/bigbluebuttonbn/bbb_view.php")," du plugin BigBlueButtonBN). En particulier, le contr\xf4leur v\xe9rifie que la session de visioconf\xe9rence existe ou la cr\xe9e si l'utilisateur en a les droits, avant de rediriger celui-ci vers l'interface BigBlueButton."),(0,a.kt)("h2",{id:"details-changements"},"Comment rep\xe9rer le d\xe9tail des changements ?"),(0,a.kt)("p",null,"Les m\xe9canismes de surcharge propres \xe0 Moodle imposent souvent de copier des fichiers ou des fonctions enti\xe8res. Cette approche aboutit malheureusement \xe0 dupliquer le code et noie parfois les modifications dans un vaste ensemble. Pour comprendre pr\xe9cis\xe9ment comment les modifications impactent le code original, il est utile d'exploiter les m\xe9canismes suivant."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Des marqueurs ",(0,a.kt)("strong",{parentName:"li"},"PADPLUS")," dans les fichiers PHP et Javascript permettent de rep\xe9rer les sections de code patch\xe9s, en particulier dans les fonctions longues. Il peut s'agir du code :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"directement dans les fichiers source de Moodle, hors des plugins PAD+ ;"),(0,a.kt)("li",{parentName:"ul"},"dans les fichiers PAD+ qui surchargent Moodle par copie.")))),(0,a.kt)("p",null,"Cet extrait de la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"coursecat_coursebox")," surcharg\xe9e dans ",(0,a.kt)("inlineCode",{parentName:"p"},"course_renderer.php")," montre la section modifi\xe9e pour l'affichage des s\xe9quences et des ateliers compl\xe9mentaires (NB - cette fonction est originellement d\xe9finie dans ",(0,a.kt)("inlineCode",{parentName:"p"},"course/renderer.php"),") :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/*** PADPLUS: course image & course/workshop info. */\n$content .= html_writer::start_tag('div', array('class' => 'coursecat-image'));\n$content .= $this->coursebox_image($course);\n$content .= html_writer::end_tag('div');\n// The content of the coursebox changes depending on whether it is a course or a workshop.\nif (course_is_workshop($course, $this->page->theme)) {\n    ...\n} else {\n    ...\n}\n$content .= $this->coursecat_coursebox_details($course, $chelper, $contactbox, $studentsbox, $buttonlabel, $boxclassname);\n/*** PADPLUS END */\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L'historique git"),", en particulier en utilisant les commits pr\xe9fix\xe9s par ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"override:"))," comme r\xe9f\xe9rence (il s'agit toujours de la copie du code source original, avant modification). Cette m\xe9thode est utilis\xe9e pour les fichiers PHP et Javascript mais aussi pour les mod\xe8les Mustache.")),(0,a.kt)("p",null,"Dans l'exemple ci-dessous, le mod\xe8le ",(0,a.kt)("inlineCode",{parentName:"p"},"loginform.mustache")," a \xe9t\xe9 copi\xe9 tel quel dans le th\xe8me PAD+ avant d'\xeatre surcharg\xe9 dans le commit suivant ",(0,a.kt)("em",{parentName:"p"},'"Toggle password visibility..."')," pour l'ajout du bouton d'accessibilit\xe9 du mot de passe."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Exemple d&#39;un historique git avec l&#39;override sur le template de login",src:n(7836).Z,width:"818",height:"255"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le d\xe9veloppement PAD+ a commenc\xe9 avec la version 3.11.4 de Moodle. Pour voir la ",(0,a.kt)("strong",{parentName:"li"},"liste compl\xe8te des fichiers affect\xe9s"),", il suffit de faire un ",(0,a.kt)("inlineCode",{parentName:"li"},"diff")," avec la ",(0,a.kt)("em",{parentName:"li"},"derni\xe8re version")," de Moodle int\xe9gr\xe9e.")),(0,a.kt)("p",null,"Par exemple, avec le tag v3.11.7 de la version de mai 2022, la commande est :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git diff v3.11.7 --stat\n")),(0,a.kt)("p",null,"Cette liste affiche tous les fichiers diff\xe9rents de la PAD+ par rapport \xe0 la derni\xe8re version int\xe9gr\xe9e de Moodle."))}d.isMDXComponent=!0},7836:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/git_override-52680034749bbc133f3f88119aca459f.png"}}]);