//ARRAY DE PRODUCTOS

const products = [

        { id: 1, name: "Pachira Aquática", image: "images/pachira_aquatica.jpeg", description: "Descubre cómo la Pachira Aquatica puede atraer la fortuna a tu vida.", price: 35, stock: 25 },
        { id: 2, name: "Limonero", image: "images/limonero.jpeg", description: "Como purificador del aire natural.", price: 17, stock: 60 },
        { id: 3, name: "Peperomia Watermelon", image: "images/peperomia_watermelon.jpeg", description: "Sus hojas se asemejana a una sandía", price: 12, stock: 5 },
        { id: 4, name: "Rosa Jewel", image: "images/rosa_jewel.jpeg", description: "Destaca por sus flores de color naranja vibrante y llamativo.", price: 8, stock: 32 },
        { id: 5, name: "Bonsai", image: "images/bonsai.jpeg", description: "También conocido como Árbol escorpión por la forma de crecimiento de sus ramas.", price: 40, stock: 10 },
        { id: 6, name: "Echeveria", image: "images/echeveria.jpeg", description: "Ideal planta de interior.", price: 18, stock: 5 },
        { id: 7, name: "Peperomia Raindrop", image: "images/peperomia_raindrop.jpeg", description: "Sus hojas se asemejana a las gotas de lluvia.", price: 12, stock: 15 },
        { id: 8, name: "Palma del Paraiso", image: "images/palma_paraiso.jpeg", description: "Fomentará la productividad de aquel que la tenga cerca.", price: 21, stock: 50 },
        { id: 9, name: "Asparagus", image: "images/asparagus.jpeg", description: "Conocido también como helecho plumoso.", price: 24, stock: 8 },
       
];


// Entro en el main que es donde estará contenido el cuadro de productos

let $main = document.querySelector('main');

// Creo el contenedor Div para el carrito de compras que incluye un titulo, total y dos botones.

let $shopContainer = document.createElement('div');
$shopContainer.classList = 'shopContainer';

let $shopTitle = document.createElement('h4');
$shopTitle.classList = 'shopTitle';
$shopTitle.textContent = 'Carrito de Compras';
$shopContainer.appendChild($shopTitle);


let $priceTotal = document.createElement('p');
$priceTotal.classList = 'priceTotal';
$priceTotal.textContent= 'Total:' + ' ' + '€';
$shopContainer.appendChild($priceTotal);

let $priceTotalSpan = document.createElement('span');
$priceTotalSpan.classList = 'priceTotalSpan';
$priceTotalSpan.textContent = '0';
$shopContainer.appendChild($priceTotalSpan);

let $shopButtonDelete = document.createElement('button');
$shopButtonDelete.classList = 'shopButtonDelet';
$shopButtonDelete.textContent = 'Vaciar Carrito';
$shopContainer.appendChild($shopButtonDelete);


let $shopButtonProceed = document.createElement('button');
$shopButtonProceed.classList = 'shopButtonProceed';
$shopButtonProceed.textContent = 'Proceder a Comprar';
$shopContainer.appendChild($shopButtonProceed);


$main.appendChild($shopContainer);


// Creo una sección donde incluyo el cuadro de productos y lo incluyo en el mains

let $mainSection = document.createElement('section');
$mainSection.classList = 'mainSection'
$main.appendChild($mainSection);
console.log($mainSection);


/*Recorro el array de productos para crear por cada producto un contendor div que contendrá a su vez una imagen (dentro de un figure, un titulo con el nombre del producto, un párrafo con la descripción, un párrafo para incluir el precio del producto y un boton para poder agregar el producto al carro)*/

for (let product of products) {


let $containerPlant = document.createElement('div');
$containerPlant.classList = 'containerPlant';
$containerPlant.dataset.id = product.id;
$containerPlant.dataset.name = product.name;


let $figureImg = document.createElement('figure');
$figureImg.classList = 'figureImg';
$containerPlant.appendChild($figureImg);


let $imagePlant = document.createElement('img');
$imagePlant.classList = 'imagePlant';
$imagePlant.src = product.image;
$imagePlant.alt = product.name;
$figureImg.appendChild($imagePlant);


let $namePlant = document.createElement('h3');
$namePlant.classList = 'namePlant';
$namePlant.textContent = product.name;
$containerPlant.appendChild($namePlant);


let $descriptionPlant = document.createElement('p');
$descriptionPlant.classList = 'descriptionPlant';
$descriptionPlant.textContent = product.description;
$containerPlant.appendChild($descriptionPlant);


let $priceUnitPlant = document.createElement('p');
$priceUnitPlant.classList = 'priceUnitPlant';
$priceUnitPlant.textContent = ('Precio:' + " " + '€' + product.price);
$containerPlant.appendChild($priceUnitPlant);


let $buttonPlant = document.createElement('button');
$buttonPlant.classList = 'buttonPlant';
$buttonPlant.textContent = 'Agregar al carrito';
$buttonPlant.dataset.name = product.name;
$containerPlant.appendChild($buttonPlant);



$mainSection.appendChild($containerPlant);

}



