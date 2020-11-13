//===========================================
// Dans le formulaire d'inscription, lorsqu'on
// entre de l'information dans un champ, le 
// champ suivant apparait. Le bouton "continuer"
// devient utilisable en dernier.
//============================================
function afficherProchainChamp(id){
    switch(id){
        case "champNomUsager":
            document.getElementById("champCourriel").setAttribute("onkeypress", "return afficherProchainChamp(this.id)");
            document.getElementById("champCourriel").readOnly = false;            

            document.getElementById("divCourriel").style.opacity= "1";
            document.getElementById("divCourriel").style.userSelect= "auto";
        break;
        case "champCourriel":
            document.getElementById("champMotDePasse").setAttribute("onkeypress", "return afficherProchainChamp(this.id)");
            document.getElementById("champMotDePasse").readOnly = false;

            document.getElementById("divMotDePasse").style.opacity= "1";
            document.getElementById("divMotDePasse").style.userSelect= "auto";
        break;
        case "champMotDePasse" :
            document.getElementById("btnContinuer").disabled = false;
            document.getElementById("btnContinuer").style.backgroundColor = "rgba(70, 139, 96, 0.80)";
        break;
    }
    
}

//===========================================
// Sur la page d'acceuil de l'application
// lorsqu'on appuie sur les fleches de 
// la barre de navigation, l'option de 
// navigation changes (recettes ou exercices).
//============================================
function changeCibleNavigation() {

    if( document.getElementById("navigationRecettesPub")) {
        document.getElementById("navigationAcceuil").innerHTML = "<a id=\"navigationExercicesPub\" href=\"/pageExercices\"><p>Parcourir nos exercices</p></a>";
    }else {
        document.getElementById("navigationAcceuil").innerHTML = "<a id=\"navigationRecettesPub\" href=\"/pageRecettes\"><p>Parcourir nos recettes</p></a>";
    }
    
}