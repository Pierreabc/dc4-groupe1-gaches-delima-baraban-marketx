///Nous déclarons la constante servant à récupérer l'élément HTML ayant pour ID #item 
const items = (document.getElementById('items'))

/* Nous initialisons la fonction fetchProduct, fonction asynchrone servant à récupérer les données présentes 
dans l'API, puis à les convertir au format Javascript 
  Les données au format Javascript sont ensuite stockées dans la variable meubleData*/
const fetchProduct = async () => {
  await fetch('http://localhost:3000/api/campaigns')
    .then((response) => response.json())
    .then((response) => { 
        console.log(response)
      campagneData = response
    })
}
fetchProduct()

/*Une fois la fonction fetchProduct exécutée, nous déclarons displayProduct, fonction asynchrone qui attend 
  l'éxecution de fetchProduct avant de s'éxecuter
  Lorsque l'éxecution de fetchProduct est terminée, nous appliquons la méthode .map() sur meubleData, afin de parcourir et de "cartographier" les données 
  qui s'y trouvent
  Cela nous permet ensuite d'injecter les données correspondantes au sein du HTML 
  Pour finir, nous appliquons la méthode .join(), afin de supprimer les apostrophres présentes entre chaque carte produit */
const displayProduct = async () => {
  await fetchProduct()
  items.innerHTML = campagneData // tab[prod, prod2, prod3]
    .map(                      //      0       1    2
      (campagne) =>
        `<a href="./product.html?_id=${campagne._id}">
        <article class = "article">
        <h3 class="productName">${campagne.name}</h3>
        <p class="productDescription">${campagne.description}</p>
    </article>
    </a>`,
    )
    .join(' ') 
}
displayProduct()