document.querySelector("header").innerHTML = `
    <button>show</button>
    <ul>
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#onglet">Onglets</a></li>
        <li><a href="#articles">Articles</a></li>
    </ul>
`;

document.querySelector("header").addEventListener("click", function(e){
    if(e.target.nodeName === "BUTTON" && e.target.innerText === "show" ){
        e.target.innerText = "hide";
        e.target.nextElementSibling.style.visibility = "hidden";
        // document.querySelector() body > header
        // .closest() element > parent
        // .nextElementSibling element > frere direct après lui 
    }else if(e.target.nodeName === "BUTTON" && e.target.innerText === "hide") {
        e.target.innerText = "show";
        e.target.nextElementSibling.style.visibility = "visible" ;
    }
})
