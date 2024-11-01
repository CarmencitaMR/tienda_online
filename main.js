


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
        $priceTotal.textContent = 'Total:' + ' ' + '€';
        $shopContainer.appendChild($priceTotal);

        let $tableProductAdd = document.createElement('table');
        $tableProductAdd.classList = ('tableProductAdd');
        $shopTitle.after($tableProductAdd);

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
                $containerPlant.dataset.price = product.price;
                $containerPlant.dataset.stock = product.stock;


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
                $buttonPlant.dataset.stock = product.stock;
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
                clickCartIcon += 1;

        } else {
                let $shopContainer = document.querySelector('.shopContainer');
                $shopContainer.classList.remove('showCart');
                clickCartIcon = 1;
        }

}

/*END EVENTO CLICK CARRITO COMPRA*/




function eventClickAddProductButton() {

        let $buttonPlant = document.querySelectorAll('.buttonPlant');
        for (let $button of $buttonPlant) {
                $button.addEventListener('click', addItemToShoppingList);
        }
}


/*EVENTO CLICK BOTON AGREGAR AL CARRITO*/

let shoppingList = {};


function addItemToShoppingList() {

        let $containerPlant = this.closest('.containerPlant');

        let id = $containerPlant.dataset.id;
        let name = $containerPlant.dataset.name;
        let price = $containerPlant.dataset.price;
        let stock = $containerPlant.dataset.stock;

        if (!shoppingList.hasOwnProperty(id)) {

                shoppingList[id] = {

                        id: parseInt(id),
                        name: name,
                        price: parseInt(price),
                        count: 0,
                        stock: parseInt(stock)
                };

             
        } 

        changeCountProduct(id, 1);

}

function refreshShoppingList() {

        let $tableProductAdd = document.querySelector('.tableProductAdd');
        $tableProductAdd.innerHTML = '';

        let $headerProductAdd = document.createElement('tr');
        $headerProductAdd.classList = ('headerProductAdd');
        $headerProductAdd.innerHTML = `
                <th>Producto</th>
                <th>Precio</th>
                <th>Nº</th>
                <th>Total</th>
                 `;

        $tableProductAdd.appendChild($headerProductAdd);

        let totalPrice = 0;
        for (let productId in shoppingList) {
                let product = shoppingList[productId];
                let $tr = document.createElement('tr');
                $tr.classList=('trProduct');
                $tr.dataset.id = product.id;
                $tr.dataset.stock = product.stock;
                $tr.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price}€</td>
                <td>${product.count}</td>
                <td>${product.count * product.price}</td>
                <td>
                <button class= "addProduct fa-solid fa-plus"></button>
                <button class= "reduceProduct fa-solid fa-minus"></button>
                </td>
                <td>
                <button class= "delete fa-solid fa-trash"></button>
                </td>
                
                `;
                $tableProductAdd.appendChild($tr);

                totalPrice += product.count * product.price;

                let $addProductButton = $tr.querySelector('.addProduct');
                $addProductButton.addEventListener('click', addProductButton);

                let $reduceProductButton = $tr.querySelector('.reduceProduct');
                $reduceProductButton.addEventListener('click', reduceProductButton);


                let $deleteButton = document.querySelector('.delete');
                $deleteButton.addEventListener('click', deleteProduct);                       

        }


        let $priceTotalSpan = document.querySelector('.priceTotalSpan');
        $priceTotalSpan.textContent = totalPrice;

}

function addProductButton() {

        let $row = this.closest('tr');
        let productId = $row.dataset.id;
        changeCountProduct(productId, 1);

}


function reduceProductButton() {

        let $row = this.closest('tr');
        let productId = $row.dataset.id;
        changeCountProduct(productId, -1);

}

function changeCountProduct(productId, change) {

        if(shoppingList[productId].count + change > shoppingList[productId].stock){
                alert('estas excediendo el stock');
                return;
        }

        shoppingList[productId].count += change;
        if (shoppingList[productId].count <= 0) {
                delete shoppingList[productId];
        }
        
        refreshShoppingList();       

}



function deleteProduct(){

        alert('hola');
        /*let $row = this.closest('tr');
        let productId = $row.dataset.id;
        delete shoppingList[productId];*/
        

}









/*let productList = [];
let unitCounter = 1;



function addProduct() {



        if (!productList.includes(this.dataset.id) && this.dataset.stock > 0) {

                productList.push(this.dataset.id);
                console.log(productList);


                let $shopContainer = document.querySelector('.shopContainer');
                let $shopTitle = $shopContainer.querySelector('h4:nth-child(1)');

                let $productAdd = document.createElement('div');
                $productAdd.classList.add('productAdd');
                //$productAdd.textContent = 'hola';
                $shopTitle.after($productAdd);
                //console.log($productAdd);

                let $productAddInfo = document.createElement('p');
                $productAddInfo.classList.add = ('productAddInfo');
                $productAddInfo.textContent = `${this.dataset.name} - € ${this.dataset.price} X`
                $productAdd.appendChild($productAddInfo);


                let $productUnitCounter = document.createElement('span');
                $productUnitCounter.classList = ('counterSpan');
                $productUnitCounter.textContent = 1;
                $productUnitCounter.dataset.productStock = this.dataset.stock;
                $productUnitCounter.dataset.productId = this.dataset.id;
                $productAdd.appendChild($productUnitCounter);

                let $productTotalInfo = document.createElement('span');
                $productTotalInfo.classList = ('productTotalInfo');
                $productTotalInfo.dataset.productId = this.dataset.id;
                $productTotalInfo.textContent = this.dataset.price;
                $productAdd.appendChild($productTotalInfo);


                let $buttonAdd = document.createElement('button');
                $buttonAdd.classList = 'buttonAdd';
                $buttonAdd.textContent = '+';
                $buttonAdd.dataset.productId = this.dataset.id;
                $buttonAdd.dataset.productStock = this.dataset.stock;
                $productAdd.appendChild($buttonAdd);


                let $buttonSubtract = document.createElement('button');
                $buttonSubtract.classList = 'buttonSubtract';
                $buttonSubtract.textContent = '-';
                $buttonSubtract.dataset.productId = this.dataset.id;
                $buttonSubtract.dataset.productStock = this.dataset.stock;
                $productAdd.appendChild($buttonSubtract);


                let $buttonDelete = document.createElement('button');
                $buttonDelete.classList = 'buttonDelete';
                $buttonDelete.textContent = 'El';
                $buttonDelete.dataset.productId = this.dataset.id;
                $buttonDelete.dataset.productStock = this.dataset.stock;
                $productAdd.appendChild($buttonDelete);




        } else {


                let $productUnitCounter = document.querySelector('.counterSpan[data-product-id="' + this.dataset.id + '"]');
                unitCounter <= this.dataset.productStock
                unitCounter++;
                $productUnitCounter.textContent = unitCounter;

                let $productTotalInfo = document.querySelector('.productTotalInfo[data-product-id="' + this.dataset.id + '"]');
                $productTotalInfo.textContent = this.dataset.price * unitCounter;


        }


}*/


/* END EVENTO CLICK BOTON AGREGAR AL CARRITO*/




init();