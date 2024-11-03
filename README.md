# tienda_online

entrega módulo JS simulador de tienda online de plantas

La parte del código que implementé inicalmente para añadir cada producto al carrito. Al final tuve que cambiar el código porque no conseguía sacar los totales y el tiempo se me echaba encima para seguir intentandolo.

/\*let productList = [];
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

}\*/
