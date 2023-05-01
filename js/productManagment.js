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
            "productName" : "Rutini Sauvignon Blanc",
            "productDescription" : "Intenso, en sus fragantes notas cítricas (pomelo rosado) y características de la variedad (hierbas, pasto recién cortado, mineral), tiene también un equilibrado parangón azúcar-acidez en el que además tiene cabida un dejo a vainilla, recreado por el discreto tiempo de crianza en roble.",
            "productImage" : "data/img/rutini-sauvignon-blanc.jpeg"
        },
        {
            "productName" : "Saurus Barrel Fermented Pinot Noir",
            "productDescription" : "En nariz se perciben aromas a frutos rojos como grosellas, frambuesas y frutillas. Por su fermentación en barricas de roble, se perciben notas a vainilla y cacao. En boca es muy frutado, con taninos dulces y buena acidez.",
            "productImage" : "data/img/saurus-barrel-fermented-pinot-noir.jpeg"
        },
        {
            "productName" : "Rutini Encabezado de Malbec",
            "productDescription" : "Rubí muy profundo, con matices violáceos y púrpura. Una compleja combinación de aromas gana la nariz: frutas rojas y negras frescas (frutillas, cassis, mora, arándanos), cacao amargo, torrefactos (café), junto al perfume propio del aguardiente utilizado. En la boca, se reiteran los precursores descriptos y también aparecen sabores frutales confitados (higos). Los taninos se mantienen firmes y medianamente sucrosos.",
            "productImage" : "data/img/rutini-encabezado-de-malbec.jpeg"
        },
        {
            "productName" : "Enzo Bianchi Gran Corte",
            "productDescription" : "Vino de color profundo e intensos matices violáceos, atractivo y seductor. En nariz se aprecia el perfecto balance entre las variedades que lo componen, por un lado, encontramos profundas notas de frutos rojos, floral, amalgamadas con notas especiadas, hierbas frescas y frutas negras maduras, fundidas elegantemente con dejos a chocolate y vainilla. Se trata de un vino notoriamente complejo, con muy buena estructura, taninos sedosos, untuoso y con muy buen equilibrio ácido, fresco de gran potencial de guarda.",
            "productImage" : "data/img/enzo-bianchi-gran-corte.jpeg"
        },
        {
            "productName" : "Luca Beso de Dante",
            "productDescription" : "Aromas de tostados de roble, cassis y el humo. Cascadas de fruta roja y grosella negra en el paladar. De cuerpo medio y de estilo clásico estructurado con buena densidad. La fruta Cabernet combina a la perfección con el Malbec, creando una mezcla bien estructurado y equilibrado, con taninos moderados y un final largo. Un vino que combina verdadera clase de emoción.",
            "productImage" : "data/img/luca-beso-de-dante.jpeg"
        },
        {
            "productName" : "Miraluna Malbec",
            "productDescription" : "Rojo rubí intenso con tonos violáceos de gran vivacidad, con centro de copa negro. Frutos negros como casis grosellas y peril de frutos rojos que recuerdan ciruelas. Entrada suave , jugosa, con una explosión de taninos marcados. Gusto intenso y acidez balanceada, acompaña su persistencia.",
            "productImage" : "data/img/miraluna-malbec.jpeg"
        },
        {
            "productName" : "Ekeko Malbec/Merlot",
            "productDescription" : "Rojo rubí de gran vivacidad. Se pueden apreciar notas a grafito, flores de hibiscus y especias como el coriandro molido. Gran intensidad de sabor a fruta negra deja una sensación muy fresca en la boca.",
            "productImage" : "data/img/luca-beso-de-dante.jpeg"
        },
        {
            "productName" : "Zuccardi Blanc de Blancs",
            "productDescription" : "Amarillo verdoso, con finas cadenas de continuas burbujas que forman un persistente anillo. Intenso ataque de miel, que se combina con la fruta blanca típica del chardonnay de Tupungato como la pera y el membrillo. El pan tostado y la manteca nos delatan su larga estadía en contacto con levaduras. Complejo con notas de cáscara de naranja y cerezas en almibar. De gran volumen, concuerda con la sensación de nariz. Reseñas a miel se hacen presentes nuevamente, combinándose con notas a cereales. De buen equilibrio, graso y de final largo y fresco. La fineza y elegancia de las burbujas dan una sensación de cremosidad en el paladar, delicado atributo al combinarse con los aromas a frutas blancas.",
            "productImage" : "data/img/zuccardi-blanc-de-blancs.jpeg"
        },
        {
            "productName" : "Rosell Boher Brut Rosé",
            "productDescription" : "Presenta un color rojo suave con tonos rubí, brillante, espuma persistente y burbujas pequeñas. Intensos aromas frutales como cerezas, frambuesas, cítricos, ananá, coco y algo de pan tostado y levadura. Buen cuerpo, fresco con buena acidez, largo y equilibrado. En boca la espuma es suave y delicada. En cuanto a los sabores se repite lo percibido en nariz, haciéndose presentes las frutas rojas y cítricos.",
            "productImage" : "data/img/rosell-boher-brut-rosé.jpeg"
        }
        ,
        {
            "productName" : "Estuche Escorihuela Gascón Extra Brut Rosé",
            "productDescription" : "Color rosado suave con finas burbujas que ascienden de modo constante y coronan la copa. En nariz es un espumoso expresivo y fresco con aromas de frutos rojos frescos y abrillantados, cítricos, frutos secos, levadura, pan tostados y brioche. En boca es un vino fragante con buena frescura y textura. Es amplio, con acidez crocante y sabor vivaz. Repite las notas de frutos rojos con tonos de panificación propios de la toma de espuma. Resulta seco y sabroso con final largo de regusto frutal y tostado.",
            "productImage" : "data/img/estuche-escorihuela-gascón-extra-brut-rosé.jpeg"
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