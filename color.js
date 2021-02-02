let couleur = document.getElementById("bodyColor");


couleur.addEventListener('change', (choixCouleur) => {
    document.body.style.backgroundColor = choixCouleur.currentTarget.value
});