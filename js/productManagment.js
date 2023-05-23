window.onload = populateProductList;
function populateProductList()
{
    let JSONpath = "data/json/products.json";
    let canFetch = fetchJson(JSONpath);

}

async function fetchJson(path)
{
    fetch(new Request(path))
    .then((response) => response.json())
    .then((data) => {

        let list = document.getElementById("product-unordered-list");

        for (const product of data.products) {
            //Children variables
            let child = document.createElement("li");
            let imageChild = document.createElement("img");
            let headerChild = document.createElement("h3");
            let paragraphChild = document.createElement("p");

            //Set children variables data
            imageChild.src = product.productImage;
            imageChild.alt = "product-image";

            headerChild.innerText = product.productName;

            paragraphChild.innerText = product.productDescription;

            child.className = "product-item";

            child.appendChild(imageChild);
            child.appendChild(headerChild);
            child.appendChild(paragraphChild);

            list.appendChild(child);
        }

    })
    .catch( error => 
        {
            console.log(error)
            let div = document.getElementById("product-container");
            let text = document.createElement("h1");
            text.innerHTML = "UPS ! ... Algo salió mal 🤔";
            div.appendChild(text);
        }
    );
}