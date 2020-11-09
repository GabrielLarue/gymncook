function afficherProchainChamp(id){
    switch(id){
        case "champPrenom":
            document.getElementById("champNom").setAttribute("onkeypress", "return afficherProchainChamp(this.id)");
            document.getElementById("champNom").readOnly = false;            

            document.getElementById("divNom").style.opacity= "1";
            document.getElementById("divNom").style.userSelect= "auto";
        break;
        case "champNom":
            document.getElementById("champAge").setAttribute("onkeypress", "return afficherProchainChamp(this.id)");
            document.getElementById("champAge").readOnly = false;

            document.getElementById("divAge").style.opacity= "1";
            document.getElementById("divAge").style.userSelect= "auto";
        break;
        case "champAge":
            document.getElementById("champPoids").setAttribute("onkeypress", "return afficherProchainChamp(this.id)");
            document.getElementById("champPoids").readOnly = false;

            document.getElementById("divPoids").style.opacity= "1";
            document.getElementById("divPoids").style.userSelect= "auto";
        break;
        case "champPoids":
            document.getElementById("champTaille").setAttribute("onkeypress", "return afficherProchainChamp(this.id)");
            document.getElementById("champTaille").readOnly = false;

            document.getElementById("divTaille").style.opacity= "1";
            document.getElementById("divTaille").style.userSelect= "auto";
        break;
        case "champTaille":
            document.getElementById("champObjectif").setAttribute("onkeypress", "return afficherProchainChamp(this.id)");
            document.getElementById("champObjectif").readOnly = false;

            document.getElementById("divObjectif").style.opacity= "1";
            document.getElementById("divObjectif").style.userSelect= "auto";
        break;
    }
    
}