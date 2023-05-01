window.onload = populateProductList;
function populateProductList()
{
    let list = document.getElementById("product-unordered-list");

    //This could be loaded from a static JSON file but that would require a Live server for a fetch promise operation.
    const productsList = 
    [
        {
            "productName" : "Mariano Di Paola",
            "productDescription" : "Presenta un color muy intenso con matices violáceos, en la nariz aparecen notas frutales con toques de especias, y una leve sensación floral. En la boca es un vino de gran concentración y persistencia, muy especiado y frutal, con taninos muy firmes, pero a su vez muy suaves.",
            "productImage" : "data/img/vino-mariano-di-paola.jpeg"
        },
        {
            "productName" : "Montebaco Crianza 2014 (Ribera del Duero, España)",
            "productDescription" : "Montebaco Crianza presenta en nariz un predominio de frutos del bosque, especiados, minerales y maderas finas, y en boca se aprecian sus taninos, vivos aunque amables y elegantes. Un vino que no defraudará a los seguidores de la Ribera del Duero. Montebaco Crianza es ideal para acompañar con bistec a la pimienta, conejo a la brasa, queso manchego curado, quesos viejos.",
            "productImage" : "data/img/vino-montebaco-crianza.jpg"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción3",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción4",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Descripción5",
            "productImage" : "data/img/vinoejemplo.png"
        },
        {
            "productName" : "Nombre de producto",
            "productDescription" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio eum commodi porro, illo voluptatem, modi similique pariatur vel doloribus dolores ipsa iste perferendis, cumque soluta ullam molestiae veritatis dicta.",
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
        imageChild.src = productsList[index].productImage;
        imageChild.alt = "product-image";

        headerChild.innerText = productsList[index].productName;
        
        paragraphChild.innerText = productsList[index].productDescription;

        child.className = "product-item";
        
        child.appendChild(imageChild);
        child.appendChild(headerChild);
        child.appendChild(paragraphChild);

        list.appendChild(child);
    }
}