
function init() { //funcion que agrupa el resto de funciones, facilita la lectura del codigo.

        loadProducts();
        eventClickHamburguer();
        eventClickShopCart();
        eventClickAddProductButton();
}

function loadProducts() {

        let $main = document.querySelector('main'); // Entro en el main que es donde estara contenido el cuadro de productos y el contenedor del carrito de compras

        /*Creo CONTENEDOR DEL CARRITO DE COMPRAS*/

        let $shopContainer = document.createElement('div');
        $shopContainer.classList = 'shopContainer';

        let $shopTitle = document.createElement('h4');
        $shopTitle.classList = 'shopTitle';
        $shopTitle.textContent = 'Carrito de Compras';
        $shopContainer.appendChild($shopTitle);

        let $priceTotal = document.createElement('p');
        $priceTotal.classList = 'priceTotal';
        $priceTotal.textContent = `Total: `;
        $shopContainer.appendChild($priceTotal);

        let $tableProductAdd = document.createElement('table');
        $tableProductAdd.classList = 'tableProductAdd';
        $shopTitle.after($tableProductAdd);

        let $priceTotalSpan = document.createElement('span');
        $priceTotalSpan.classList = 'priceTotalSpan';
        $priceTotalSpan.textContent = '';
        $shopContainer.appendChild($priceTotalSpan);

        let $shopButtonDelete = document.createElement('button');
        $shopButtonDelete.classList = 'shopButtonDelete';
        $shopButtonDelete.textContent = 'Vaciar Carrito';
        $shopContainer.appendChild($shopButtonDelete);

        let $shopButtonProceed = document.createElement('button');
        $shopButtonProceed.classList = 'shopButtonProceed';
        $shopButtonProceed.textContent = 'Proceder a Comprar';
        $shopContainer.appendChild($shopButtonProceed);

        $main.appendChild($shopContainer);

        /*END CONTENEDOR DEL CARRITO DE COMPRAS*/

        /*SECCIÓN PRODUCTOS*/
        //Creo una sección donde incluyo el cuadro de productos y lo incluyo en el main

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
                $priceUnitPlant.textContent = `Precio: ${product.price}€`;
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

/*EVENTO CLICK MENU HAMBURGUESA*/
let clickMenu = 1;

function eventClickHamburguer() { //busco el icono y le asigno el evento click
        let $hamburguer = document.querySelector('.hamburguer');
        $hamburguer.addEventListener('click', showMenu);
}

function showMenu() { //1º click asigno la clase showMenu que tiene un display block

        if (clickMenu === 1) {
                let navList = document.querySelector('.navList');
                navList.classList.add('showMenu');
                clickMenu += 1;

        } else { //2º click quito la clase showMenu y asi se queda solo con la clase navList display: none
                let navList = document.querySelector('.navList');
                navList.classList.remove('showMenu');
                clickMenu = 1;
        }
}
/*END EVENTO CLICK MENU HAMBURGUESA*/

/*EVENTO CLICK CARRITO COMPRA*/
let clickCartIcon = 1;

function eventClickShopCart() { //busco el icono y le asigno el evento click

        let $shopCartIcon = document.querySelector('.yellow');
        $shopCartIcon.addEventListener('click', showCart);
}

function showCart() { //1º click asigno la clase showCart que tiene un display block

        if (clickCartIcon === 1) {
                let $shopContainer = document.querySelector('.shopContainer');
                $shopContainer.classList.add('showCart');
                clickCartIcon += 1;

        } else { //2º click quito la clase show Cart y asi se queda solo con la clase shopContainer display: none
                let $shopContainer = document.querySelector('.shopContainer');
                $shopContainer.classList.remove('showCart');
                clickCartIcon = 1;
        }
}
/*END EVENTO CLICK CARRITO COMPRA*/

/*EVENTO CLICK AL BOTON AGREGAR AL CARRITO / VACIAR CARRITO / PROCEDER A LA COMPRA*/
function eventClickAddProductButton() {

        //evento click botones de agregar al carrito
        let $buttonPlant = document.querySelectorAll('.buttonPlant'); 
        for (let $button of $buttonPlant) {
        $button.addEventListener('click', addItemToShoppingList);
        }
        //evento click boton vaciar carrito
        let $shopButtonDelete = document.querySelector('.shopButtonDelete'); 
        $shopButtonDelete.addEventListener('click', deleteShoppingList);
        //evento click boton proceder a la compra
        let $shopButtonProceed = document.querySelector('.shopButtonProceed');
        $shopButtonProceed.addEventListener('click', proceedShoppingList);
}

/* FUNCIONALIDAD CARRTITO DE LA COMPRA*/
let shoppingList = {}; //creo un objeto donde se pintaran los productos que añada al carrito

function addItemToShoppingList() { 

        let $containerPlant = this.closest('.containerPlant');

        let id = $containerPlant.dataset.id;
        let name = $containerPlant.dataset.name;
        let price = $containerPlant.dataset.price;
        let stock = $containerPlant.dataset.stock;

        if (!shoppingList.hasOwnProperty(id)) {//al hacer click en el boton añadir al carrito si la id del producto no está ya en el objeto shoppingList lo añade.

                shoppingList[id] = {//el producto tiene el id, name, price, stock del producto de la pildora que corresponda. Además tiene un contador para poder añadir 1 si no estuviera ya en la shoppinList y para poder añadir más o restar más unidades.
                        id: parseInt(id),
                        name: name,
                        price: parseInt(price),
                        count: 0,
                        stock: parseInt(stock)
                };
        }

        changeCountProduct(id, 1); //le paso el parametro 1 para que añada 1 vez el producto correspondiente que no está aún en la shoppingList
}

function refreshShoppingList() { //actualizo el carrito de compras

        let $tableProductAdd = document.querySelector('.tableProductAdd');
        $tableProductAdd.innerHTML = ''; //1º vacío lo que hubiera en el contendor(tabla).

        let $headerProductAdd = document.createElement('tr'); //añado la cabecera de tabla
        $headerProductAdd.classList = 'headerProductAdd';
        $headerProductAdd.innerHTML = `
                <th>Producto</th>
                <th>€</th>
                <th>Nº</th>
                <th>Total</th>
                <th></th>
                <th></th>
                 `;

        $tableProductAdd.appendChild($headerProductAdd);

        let totalPrice = 0;
        for (let productId in shoppingList) { //recorro todos los productos de la shoppingList
                let product = shoppingList[productId];
                let $tr = document.createElement('tr'); //añado el cuerpo de la tabla con el contenido correspondiente a cada producto y los botones que quiero tenga para asignarles funcionalidad.
                $tr.classList = 'trProduct';
                $tr.dataset.id = product.id;
                $tr.dataset.stock = product.stock;
                $tr.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price}€</td>
                <td>${product.count}</td>
                <td>${product.count * product.price}€ </td> 
                <td>
                <button class= "addProduct fa-solid fa-plus"></button>
                <button class= "reduceProduct fa-solid fa-minus"></button>
                </td>
                <td>
                <button data-id = ${product.id} class= "delete fa-solid fa-trash"></button>
                </td>
                
                `;
                $tableProductAdd.appendChild($tr);

                totalPrice += product.count * product.price; //calculo el precio total de la compra

                //evento click botton + añadir una unidad adicional
                let $addProductButton = $tr.querySelector('.addProduct');
                $addProductButton.addEventListener('click', addProductButton);

                //evento click botton + reducir una unidad
                let $reduceProductButton = $tr.querySelector('.reduceProduct');
                $reduceProductButton.addEventListener('click', reduceProductButton);

                //evento click botton + eliminar el producto del shoppingList
                let $deleteButton = document.querySelectorAll('.delete');
                for (let $delButton of $deleteButton) {
                $delButton.addEventListener('click', deleteProduct);
                }
        }

        let $priceTotalSpan = document.querySelector('.priceTotalSpan');//busco el span del Total y le asigo el valor de la variable totalPrice que se incializa en 0
        $priceTotalSpan.textContent = totalPrice + '€';
}

//funcion del evento click del botton + añadir una unidad adicional
function addProductButton() {
        let $row = this.closest('tr');
        let productId = $row.dataset.id;
        changeCountProduct(productId, 1);
}

//funcion del evento click del botton - reducir una uniad
function reduceProductButton() {
        let $row = this.closest('tr');
        let productId = $row.dataset.id;
        changeCountProduct(productId, -1);
}

//funcion para añadir unidades o reducir unidades
function changeCountProduct(productId, change) { 

        if (shoppingList[productId].count + change > shoppingList[productId].stock) {// alerta en caso de que se soliciten mas unidad que las disponbles en stock salta una alerta
                swal({
                        text: 'Se ha excedido el número máximo de unidades disponibles de este producto',
                        icon: 'warning',
                        className: "alertPopup",
                        button: {
                                text: 'OK',
                                className: 'buttonAlert',
                        }
                });
                return;
        }

        const shoppingListProduct = shoppingList[productId];
        shoppingListProduct.count += change; //contador para añadir la cantidad que correponda segun el valor que le ponga al parametro change. que en este caso sera 1 para añadir un producto o -1 para reducirlo
        if (shoppingList[productId].count <= 0) { //si la unidades llegan a cero, elimino el producto del carrito
        delete shoppingList[productId];
        }
        refreshShoppingList();
}

//funcion del evento click del boton basura para elimar el producto del carrito de compras independientemente del numero de unidades que haya en el contador
function deleteProduct() {
        $row = this.closest('tr');
        let productId = $row.dataset.id;
        delete shoppingList[productId];
        refreshShoppingList();
}

//funcion del boton vaciar carrito de la compra
function deleteShoppingList() {
        shoppingList = {}; //vacío el shoppingList
        refreshShoppingList();
}

//funcion del boton procesar comprar
function proceedShoppingList() {

        let totalPrice = 0; 
        //repito la logica del calculo de totalPrice para poder aplicarle la condicion de si es === 0  o no en el evento click del boton prodeder con la compra.

        for (let productId in shoppingList) {
                let product = shoppingList[productId];
                totalPrice += product.count * product.price;
        }

        if (totalPrice === 0) {
                swal({
                        title: '¡Carrito Vacío!',
                        text: 'Por favor seleccione los productos deseados y proceda con la compra.',
                        icon: 'warning',
                        className: "alertPopup",
                        button: {
                                text: 'OK',
                                className: 'buttonAlert',
                        }
                });
        } else {
                swal({
                        title: 'Compra realizada con éxito',
                        text: 'Si desea consejos para cuidar sus plantas, no olvide visitar nuestro blog.',
                        icon: 'success',
                        className: "alertPopup",
                        button: {
                                text: 'OK',
                                className: 'buttonAlert',
                        }
                });
                deleteShoppingList();// una vez realiza la compra vacio el carro
        }
}

init(); //llamo a la funcion init donde se incluian las funciones de la funcionalidad general del simulador de tienda online