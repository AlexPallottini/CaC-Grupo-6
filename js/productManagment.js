window.onload = populateProductList;
function populateProductList()
{
    let list = document.getElementById("product-unordered-list");

    //This could be loaded from a static JSON file but that would require a Live server for a fetch promise operation.
    const productsList = 
    [
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción",
            "productImage" : "data/img/vinoejemplo.png"
        }
    ];

    for (let index = 0; index < productsList.length; index++) {

        //Children variables
        let child = document.createElement("li");
        let imageChild = document.createElement("img");
        let headerChild = document.createElement("h3");
        let paragraphChild = document.createElement("p");

        //Set children variables data
        imageChild.src = productsList[0].productImage;
        imageChild.alt = "product-image";

        headerChild.innerText = productsList[0].productName;
        
        paragraphChild.innerText = productsList[0].productDescription;

        child.className = "product-item";
        
        child.appendChild(imageChild);
        child.appendChild(headerChild);
        child.appendChild(paragraphChild);

        list.appendChild(child);
    }
}