

function init() {

        loadProducts();
        eventClickShopCart();
        eventClickAddProductButton();
}



function loadProducts() {

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


// Creo una sección donde incluyo el cuadro de productos y lo incluyo en el main

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
$buttonPlant.dataset.id = product.id;
$buttonPlant.dataset.price = product.price;
$containerPlant.appendChild($buttonPlant);

$mainSection.appendChild($containerPlant);

}

}


/*EVENTO CLICK CARRITO COMPRA*/


let clickCartIcon = 1;

function eventClickShopCart() {

        let $shopCartIcon = document.querySelector('.yellow');
        console.log($shopCartIcon);
        $shopCartIcon.addEventListener('click', showCart);
}



function showCart() {


        if (clickCartIcon === 1) {
                let $shopContainer = document.querySelector('.shopContainer');
                $shopContainer.classList.add('showCart');
                clickCartIcon +=1;
                
        } else {
                let $shopContainer = document.querySelector('.shopContainer');
                $shopContainer.classList.remove('showCart');
                clickCartIcon = 1;
        }

}

/*END EVENTO CLICK CARRITO COMPRA*/




function eventClickAddProductButton(){

        let $buttonPlant = document.querySelectorAll('.buttonPlant');
        for (let $button of $buttonPlant) {              
        $button.addEventListener('click', addProduct);      
        }
} 


/*EVENTO CLICK BOTON AGREGAR AL CARRITO*/

function addProduct() {


        
        let $shopContainer = document.querySelector('.shopContainer');
        let $shopTitle = $shopContainer.querySelector('h4:nth-child(1)');

 
        let $productAdd = document.createElement('div');
        $productAdd.classList.add('productAdd');
        //$productAdd.textContent = 'hola';
        $shopTitle.after($productAdd);
        //console.log($productAdd);

        let $productAddInfo = document.createElement('p');
        $productAddInfo.classList.add =('productAddInfo');
        $productAddInfo.textContent = `${this.dataset.name} - ${this.dataset.price} X 1`
        $productAdd.appendChild($productAddInfo);
        
        }
      


        

        




/* END EVENTO CLICK BOTON AGREGAR AL CARRITO*/




/*if($firstCard === null) {
        //Primer click
        $firstCard = this;
    } else {
        //Segundo click
        addAttempt();*/


        init();