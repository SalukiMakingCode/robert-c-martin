//document.getElementById("accueil").style.display = "none";
//document.getElementById("main").style.display = "flex";
//let x=centre.dataset.x;
//document.getElementById("droite").style.backgroundImage="url('./assets/img/"+goto+"-"+yRight+".jpg')";
//centre.dataset.x=goto;

function pushTheButton () {
    const theButton=document.querySelector('#theButton');
    let data=Number(theButton.dataset.x);
    if (data===0) document.getElementById("s1").style.display = "flex";
    data++;
    getData(data);
    theButton.dataset.x=data;
    document.getElementById("img").style.backgroundImage="url('./assets/img/"+data+".jpg')";
}

function getData(data) {
    if (data===1) {
        document.getElementById("titre").textContent="Connaissez-vous Robert C Martin ?";
        document.getElementById("texteInfoTitre").textContent="";
        document.getElementById("texteInfoP1").textContent="";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===2) {
        document.getElementById("texteInfoTitre").textContent="Qui est donc cet homme ?";
    }
    if (data===3) {
        document.getElementById("texteInfoP1").textContent="Robert C Martin est un ingenieur informaticien et un auteur";
    }
    if (data===4) {
        document.getElementById("texteInfoP2").textContent="Ok, mais pourquoi en parler ?";
    }
    if (data===5) {
        document.getElementById("texteInfoP3").textContent="Il a crée ou inventer des concepts très important en développement logiciel, tant au niveau organisation du code qu'en organisation du travail";
    }
    if (data===6) {
        document.getElementById("texteInfoP4").textContent="Il est aussi connu sous le surnom de UNCLE BOB";
    }
    if (data===7) {
        document.getElementById("texteInfoP5").textContent="Voyons un peu ce qu'il a réalisé";
    }
    if (data===8) {
        document.getElementById("titre").textContent="Agile";
        document.getElementById("texteInfoTitre").textContent="Le Manifeste Agile";
        document.getElementById("texteInfoP1").textContent="";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===9) {
        document.getElementById("texteInfoP1").textContent="La méthode Agile provient directement des applications de ce manifeste. Il a été écrit par 17 ingénieurs et programmeurs. Robert C Martin est l'un de ces 17.";
    }
    if (data===10) {
        document.getElementById("texteInfoP2").textContent="Son premier livre sorti en 2002 (Agile Software Development : Principles, Patterns, and Practices) n'a d'ailleurs pas trainé à sortir et à marquer le monde de l'informatique !";
    }
    if (data===11) {
        document.getElementById("texteInfoP3").textContent="Car au-délà de la méthode Agile, ce livre parle d'une autre création de Robert C Martin ...";
    }
    if (data===12) {
        document.getElementById("titre").textContent="Agile, c'est du SOLID";
        document.getElementById("texteInfoTitre").textContent="les principes SOLID";
        document.getElementById("texteInfoP1").textContent="Et oui, c'est lui le créateur des principe SOLID et STUPID. Un petit rappel sur ce que sont ces deux concepts à toujours avoir en tête en programmation orienté objet :";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===13) {
        document.getElementById("texteInfoP2").textContent="S : SINGLE RESPONSIBILITY : une classe, une fonction ou une méthode doit avoir une et une seule responsabilité";
    }
    if (data===14) {
        document.getElementById("texteInfoP3").textContent="O : OPEN/CLOSED : une entité (classe, fonction...) doit être fermée à la modification directe mais ouverte à l'extension";
    }
    if (data===15) {
        document.getElementById("texteInfoP4").textContent="L : LISKOV SUBSTITUTION : Concernant l'héritage : Lors de l'ajout d'une nouvelle classe dans la hiérarchie, le système existant ne doit pas dysfonctionner lorsqu'il utilise la nouvelle classe. ";
    }
    if (data===16) {
        document.getElementById("texteInfoP5").textContent="I : INTERFACE SEGREGATION : Préférer plusieurs interfaces spécifiques pour chaque client plutôt qu'une seule interface générale";
    }
    if (data===17) {
        document.getElementById("texteInfoP6").textContent="D : DEPENDENCY INVERSION : Les classes de haut niveau ne sont pas censées changer à cause des modifications réalisées dans les classes de bas niveau.";
    }
    if (data===18) {
        document.getElementById("titre").textContent="SOLID VS STUPID";
        document.getElementById("texteInfoTitre").textContent="STUPID : Ce qu'il ne faut pas faire !";
        document.getElementById("texteInfoP1").textContent="";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===19) {
        document.getElementById("texteInfoP1").textContent="S :SINGLETON : Récourir aux instances uniques";
    }
    if (data===20) {
        document.getElementById("texteInfoP2").textContent="T :TIGHT COUPLING : Le couplage fort entre 2 entités (l'une ne peut fonctionner sans l'autre)";
    }
    if (data===21) {
        document.getElementById("texteInfoP3").textContent="U : UNTESTABILITY : Un composant peut s'avèrer difficile à tester s'il enfreint le principe de responsabilité unique et effectue trop de choses";
    }
    if (data===22) {
        document.getElementById("texteInfoP4").textContent="P : PREMATURE OPTIMIZATIONS : L'optimisation prématurée consiste à anticiper un problème avant qu'il ne devienne un problème... et qu'il ne sera probablement jamais un";
    }
    if (data===23) {
        document.getElementById("texteInfoP5").textContent="I : INDESCRIPTIVE NAMING : Ne pas donner de sens au naming de ses variables (genre : x1, y2, myArray, myClass, data, ....)";
    }
    if (data===24) {
        document.getElementById("texteInfoP6").textContent="D : DUPLICATION : Copier/coller/modifier. En répétant cette méthode, vous finissez par avoir du code dupliqué à de nombreux endroits. Si quelque chose de fondamental doit être modifié, toutes ces duplications doivent être identifiées et modifiées.";
    }
    if (data===25) {
        document.getElementById("titre").textContent="Clean Architecture";
        document.getElementById("texteInfoTitre").textContent="Clean architecture";
        document.getElementById("texteInfoP1").textContent="Il est aussi le créateur de la clean architecture";
        document.getElementById("texteInfoP2").textContent="La Clean Architecture vise à réduire les dépendances de votre logique métier avec les services que vous consommez (API, Base de données, Framework, Librairies tierces), pour maintenir une application stable au cours de ses évolutions, de ses tests mais également lors de changements ou mises à jour des ressources externes.";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===26) {
        document.getElementById("texteInfoP3").textContent="Lors de l’implémentation de cette architecture il existe des règles, ayant toutes pour maître-mot « l’indépendance ».";
    }
    if (data===27) {
        document.getElementById("texteInfoP4").textContent="Voyons quels sont les règles à suivre pour faire de la Clean Architecture";
    }
    if (data===28) {
        document.getElementById("texteInfoP1").textContent="Comment mettre en place une logique de Clean architecture ?";
        document.getElementById("texteInfoP2").textContent="Elle doit être indépendante des frameworks : les frameworks et librairies doivent être des outils, sans pour autant vous contraindre. ";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===29) {
        document.getElementById("texteInfoP3").textContent="Elle doit être testable indépendamment : les tests doivent pouvoir être réalisés sans éléments externes (interface utilisateur, base de données ...)";
    }
    if (data===30) {
        document.getElementById("texteInfoP4").textContent="Elle doit être indépendante de l’interface utilisateur : l’interface utilisateur doit pouvoir changer de forme (console, interface web ...)";
    }
    if (data===31) {
        document.getElementById("texteInfoP5").textContent="Elle doit être indépendante de la base de données : il doit être possible de changer de SGBD.";
    }
    if (data===32) {
        document.getElementById("texteInfoP6").textContent="Elle doit être indépendante de tout service ou système externe : en résumé elle ne doit pas avoir conscience de ce qui l’entoure.";
    }
    if (data===33) {
        document.getElementById("titre").textContent="Clean Code";
        document.getElementById("texteInfoTitre").textContent="Le Clean code";
        document.getElementById("texteInfoP1").textContent="Et oui, c'est aussi de lui que vient ce terme suite à ses livres de 2009 et 2011";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===34) {
        document.getElementById("texteInfoP2").textContent="Si vous ne le connaissiez pas, vous avez donc déjà utilisez des termes qu'il a crée :)";
    }
    if (data===35) {
        document.getElementById("texteInfoP3").textContent="Il edite actuellement un site dédié au clean code nommé cleancoders";
    }
    if (data===36) {
        document.getElementById("titre").textContent="Un vent de folie";
        document.getElementById("texteInfoTitre").textContent="Un grain de folie";
        document.getElementById("texteInfoP1").textContent="Et cerise sur le gateau, il a un petit grain de folie et beaucoup d'humour. Il édite des vidéos explicatives sur des concepts avancés en les rendant digeste et distrayante ";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===37) {
        document.getElementById("texteInfoP2").textContent="On s'en rend directement compte en visitant son site :";
    }
    if (data===38) {
        document.getElementById("texteInfoP3").innerHTML="<a href='https://cleancoders.com/' target='_blank'> cleancoders.com </a>";
    }
    if (data===39) {
        document.getElementById("titre").textContent="Découvrez ses vidéos";
        document.getElementById("texteInfoTitre").textContent="Des vidéos à visionner";
        document.getElementById("texteInfoP1").textContent="Je ne pouvais pas vous présenter l'homme sans vous présentez ses vidéos mythiques";
        document.getElementById("texteInfoP2").textContent="Voici donc quelques minutes d'une de ses vidéos pour vous faire une idée de son oeuvre";
        document.getElementById("texteInfoP3").textContent="Elles sont totalement en anglais, mais rassurez-vous, j'enclenche les sous-titres (même si son anglais est facile à comprendre)";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").innerHTML="<a href='https://www.youtube.com/watch?v=Wibk0IfjfaI&t=25s' target='_blank'>Clean code 1 (durée 52 minutes : extrait de 7 minutes)</a>";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===40) {
        document.getElementById("titre").textContent="Fin";
        document.getElementById("texteInfoTitre").textContent="Voilà, c'est fini";
        document.getElementById("texteInfoP1").textContent="C'était mon dernier tech talk :)";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="Merci";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="PS : Arnaud, Corentin ... Vous nous faites quand un Tech Talk ?";
    }
}

