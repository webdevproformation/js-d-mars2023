const onglets = [
    { 
        titre : "les dernières news",
        contenu : `
            <ul>
                <li>nouvelle information</li>
                <li>nouvelle fonction dans javascript</li>
                <li>utiliser les fonctions fléchées</li>
            </ul>
        `
    },
    {
        titre : "les derniers likes",
        contenu :  `
            <ul>
                <li>nouvelle information a reçu un like</li>
                <li>nouvelle fonction dans javascript a reçu 3 likes</li>
                <li>utiliser les fonctions fléchées a recu 5 likes</li>
            </ul>
        `
    },
    {
        titre : "les derniers photos",
        contenu : "voici les dernières photos"
    }
]

let htmlOnglet = `<h2>Système d'onglet</h2>`;
let iOnglet = 0;
for(let o of onglets){
    htmlOnglet += `<button data-index="${iOnglet}">${o.titre}</button>`;
    iOnglet++ ;
} 
for(let o of onglets){
    htmlOnglet += `<div>${o.contenu}</div>`
} 

document.querySelector(".onglet").innerHTML = htmlOnglet ;

document.querySelector(".onglet").addEventListener("click", function(e){
    if(e.target.nodeName === "BUTTON"){
        for(let onglet of document.querySelectorAll(".onglet div")){
            onglet.style.display = "none"
        }
        const index = e.target.dataset.index ;
        document.querySelectorAll(".onglet div")[index].style.display = "block"
    }
})