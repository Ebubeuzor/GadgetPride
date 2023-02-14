const pageheader = document.querySelector('.pageheader');
const cartBtn = document.querySelector('#cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const prductsDOM = document.querySelector('.Tproducts');
const prductsDOM1 = document.querySelector('.products1');
const prductsDOM2 = document.querySelector('.products2');
const prductsDOM3 = document.querySelector('.products3');
const prductsDOM4 = document.querySelector('.products4');
const emptyCart = document.querySelector('#empty-cart')
const fullCart = document.querySelector('#full-cart')
// emptyCart.classList.add('hide-details');
fullCart.classList.add('hide-details');


//cart
let cart = [];

//buttons
let buttonsDOM = [];
let buttonsDOM1 = [];
let buttonsDOM2 = [];
let buttonsDOM3 = [];
let buttonsDOM4 = [];

//getting the products
class TodayProduct{
    async getProducts() {
        try {
            let result = await fetch('myjs/TodayD.json');
            let data = await result.json();
            
            let products = data.items;
            
            products = products.map(item =>{
                const {title,category,link,price,price1} = item.fields;
                const{id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,category,link,price,price1,image,id};
            })

            return products;
        } catch (error) {
            console.log(error);
        }

    }
}

class Product1{
    async getProducts() {
        try {
            let result = await fetch('myjs/homecategory1.json');
            let data = await result.json();

            let products = data.items;
            products = products.map(item =>{
                const {title,category,link,price,price1} = item.fields;
                const{id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,category,link,price,price1,image,id};
            })
            return products;
        } catch (error) {
            console.log(error);
        }

    }
}

class Product2{
    async getProducts() {
        try {
            let result = await fetch('myjs/homecategory2.json');
            let data = await result.json();

            let products = data.items;
            products = products.map(item =>{
                const {title,category,link,price,price1} = item.fields;
                const{id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,category,link,price,price1,image,id};
            })
            return products;
        } catch (error) {
            console.log(error);
        }

    }
}

class Product3{
    async getProducts() {
        try {
            let result = await fetch('myjs/homecategory3.json');
            let data = await result.json();

            let products = data.items;
            products = products.map(item =>{
                const {title,category,link,price,price1} = item.fields;
                const{id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,category,link,price,price1,image,id};
            })
            return products;
        } catch (error) {
            console.log(error);
        }

    }
}

class Product4{
    async getProducts() {
        try {
            let result = await fetch('myjs/homecategory4.json');
            let data = await result.json();

            let products = data.items;
            products = products.map(item =>{
                const {title,category,link,price,price1} = item.fields;
                const{id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title,category,link,price,price1,image,id};
            })
            return products;
        } catch (error) {
            console.log(error);
        }

    }
}

//display products
class UI{
    todayDisplayProduct(products){
        let result = '';
        products.forEach(product =>{
            result += `
            <div class="pd">
                        <div><a href = ${product.link}><img src=${product.image} /></a></div>
                        <ul>
                            <li><a href = ${product.link}>${product.title}</a></li>
                            <li class="price-cancel"><span>₦</span>${product.price1}</li>
                            <li><span>₦</span>${product.price}</li>
                            <li>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span></li>
                            <li><button class="atc atcT" data-id=${product.id}>Add to cart <i class="fas fa-shopping-cart"></i></button></li>
                        </ul>
            </div>
            `
        });
        prductsDOM.innerHTML = result;
    }

    displayProduct(products){
        let result = '';
        products.forEach(product =>{
            result += `
            <div class="pd">
                <div><a href = ${product.link}><img src=${product.image} /></a></div>
                <ul>
                <li><a href = ${product.link}>${product.title}</a></li>
                    <li><span>₦</span>${product.price}</li>
                    <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span></li>
                    <li><button class="atc atc1" data-id=${product.id}>Add to cart <i class="fas fa-shopping-cart"></i></button></li>
                </ul>
            </div>
            `
        });
        prductsDOM1.innerHTML = result;
    }

    displayProduct2(products){
        let result = '';
        products.forEach(product =>{
            result += `
            <div class="pd">
                <div><a href = ${product.link}><img src=${product.image} /></a></div>
                <ul>
                    <li><a href = ${product.link}>${product.title}</a></li>
                            <li><span>₦</span>${product.price}</li>
                            <li>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span></li>
                            <li><button class="atc atc2" data-id=${product.id}>Add to cart <i class="fas fa-shopping-cart"></i></button></li>
                        </ul>
                    </div>
            `
        });
        prductsDOM2.innerHTML = result;
    }

    displayProduct3(products){
        let result = '';
        products.forEach(product =>{
            result += `
            <div class="pd">
                <div><a href = ${product.link}><img src=${product.image} /></a></div>
                <ul>
                    <li><a href = ${product.link}>${product.title}</a></li>
                    <li><span>₦</span>${product.price}</li>
                    <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span></li>
                    <li><button class="atc atc3" data-id=${product.id}>Add to cart <i class="fas fa-shopping-cart"></i></button></li>
                </ul>
            </div>
            `
        });
        prductsDOM3.innerHTML = result;
    }

    displayProduct4(products){
        let result = '';
        products.forEach(product =>{
            result += `
            <div class="pd">
                <div><a href = ${product.link}><img src=${product.image} /></a></div>
                <ul>
                    <li><a href = ${product.link}>${product.title}</a></li>
                    <li><span>₦</span>${product.price}</li>
                    <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span></li>
                    <li><button class="atc atc4" data-id=${product.id}>Add to cart <i class="fas fa-shopping-cart"></i></button></li>
                </ul>
            </div>
            `
        });
        prductsDOM4.innerHTML = result;
    }

    getTodayBagButton(){
        const buttons = [...document.querySelectorAll('.atcT')];
        buttonsDOM = buttons;
        buttons.forEach(button =>{
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener('click', (event) => {
                
                window.location.reload();
                event.target.innerText = "In Cart";
                event.target.disabled = true;

                // get product from products 
                let cartItem = {...Storage.getTodayProducts(id),amount:1};
                cart = [...cart,cartItem];
                // save cart in local storage
                Storage.saveCart(cart);

                // set cart values
                this.setCartValues(cart);
                // display cart item
                this.addTodayCartItem(cartItem)
            })
            
        })
    }

    getBagButton(){
        const buttons = [...document.querySelectorAll('.atc1')];
        buttonsDOM1 = buttons;
        buttons.forEach(button =>{
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener('click', (event) => {
                
                window.location.reload();
                event.target.innerText = "In Cart";
                event.target.disabled = true;

                // get product from products 
                let cartItem = {...Storage.getProducts(id),amount:1};
                cart = [...cart,cartItem];
                
                // save cart in local storage
                Storage.saveCart(cart);

                // set cart values
                this.setCartValues(cart);
                // display cart item
                this.addCartItem(cartItem)
                // show the cart
                // this.showCart();
            })
            
        })
    }

    getBagButton2(){
        const buttons = [...document.querySelectorAll('.atc2')];
        buttonsDOM2 = buttons;
        buttons.forEach(button =>{
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener('click', (event) => {
                window.location.reload();
                event.target.innerText = "In Cart";
                event.target.disabled = true;

                // get product from products 
                let cartItem = {...Storage.getProducts2(id),amount:1};
                cart = [...cart,cartItem];
                
                // save cart in local storage
                Storage.saveCart(cart);

                // set cart values
                this.setCartValues(cart);
                // display cart item
                this.addCartItem2(cartItem)
                // show the cart
                // this.showCart();
            })
            
        })
    }

    getBagButton3(){
        const buttons = [...document.querySelectorAll('.atc3')];
        buttonsDOM3 = buttons;
        buttons.forEach(button =>{
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener('click', (event) => {
                
                window.location.reload();
                event.target.innerText = "In Cart";
                event.target.disabled = true;

                // get product from products 
                let cartItem = {...Storage.getProducts3(id),amount:1};
                cart = [...cart,cartItem];
                
                // save cart in local storage
                Storage.saveCart(cart);

                // set cart values
                this.setCartValues(cart);
                // display cart item
                this.addCartItem3(cartItem)
                // show the cart
                // this.showCart();
            })
            
        })
    }

    getBagButton4(){
        const buttons = [...document.querySelectorAll('.atc4')];
        buttonsDOM4 = buttons;
        buttons.forEach(button =>{
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if(inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
            button.addEventListener('click', (event) => {
                
                window.location.reload();
                event.target.innerText = "In Cart";
                event.target.disabled = true;

                // get product from products 
                let cartItem = {...Storage.getProducts4(id),amount:1};
                cart = [...cart,cartItem];
                
                // save cart in local storage
                Storage.saveCart(cart);

                // set cart values
                this.setCartValues(cart);
                // display cart item
                this.addCartItem4(cartItem)
                // show the cart
                // this.showCart();
            })
            
        })
    }

    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item =>{
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    
    addTodayCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            
                
        <div class="cart-item-img"><a href = ${item.link}><img src=${item.image} /></a></div>
                <div class="products">
                    <div class="p"><span>₦</span>${item.price}</div>
                    <div class="d">${item.title}</div>
                    <div class="qtc">
                        <div>
                            <i class="fas fa-chevron-up upT" data-id=${item.id}></i>
                            <p class="item-amount">${item.amount}</p>
                            <i class="fas fa-chevron-down downT" data-id=${item.id}></i>
                        </div>
                        
                    </div>
                    <div class="save">
                        <a class="save-item" href="#">
                            <i class="far fa-heart" ></i> Save item
                        </a>

                        <a href="javascript:void(0)"  >
                        <span class="remove-item remove-itemT"  data-id=${item.id}>
                            <i class="fas fa-trash" ></i>
                            Remove Item
                        </span>
                        </a>

                    </div>
        `;
        if (cartContent.childNodes.length <= 2) {
            emptyCart.classList.remove('hide-details');
        }
        emptyCart.classList.add('hide-details');
        fullCart.classList.remove('hide-details');
        cartContent.appendChild(div);
        const link = document.querySelector('.save-item');
        function changeColor(e) {
            e.target.style.color = e.target.style.color ? null : '#87CEED';
        }
        link.addEventListener('click', changeColor);
    }
    
    addCartItem(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
                        
                <div class="cart-item-img"><a href = ${item.link}><img src=${item.image} /></a></div>
                <div class="products">
                    <div class="p"><span>₦</span>${item.price}</div>
                    <div class="d">${item.title}</div>
                    <div class="qtc">
                        <div>
                            <i class="fas fa-chevron-up up1" data-id=${item.id}></i>
                            <p class="item-amount">${item.amount}</p>
                            <i class="fas fa-chevron-down down1" data-id=${item.id}></i>
                        </div>
                        
                    </div>
                    <div class="save">
                        <a class="save-item" href="#">
                            <i class="far fa-heart" ></i> Save item
                        </a>

                        <a href="javascript:void(0)"  >
                        <span class="remove-item remove-item1"  data-id=${item.id}>
                            <i class="fas fa-trash" ></i>
                            Remove Item
                        </span>
                        </a>

                    </div>
        `;
        if (cartContent.childNodes.length <= 2) {
            emptyCart.classList.remove('hide-details');
        }
        emptyCart.classList.add('hide-details');
        fullCart.classList.remove('hide-details');
        cartContent.appendChild(div);
        const link = document.querySelector('.save-item');
        function changeColor(e) {
            e.target.style.color = e.target.style.color ? null : '#87CEED';
        }
        link.addEventListener('click', changeColor);
    }
    
    addCartItem2(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            
                <div class="cart-item-img"><a href = ${item.link}><img src=${item.image} /></a></div>
                <div class="products">
                    <div class="p"><span>₦</span>${item.price}</div>
                    <div class="d">${item.title}</div>
                    <div class="qtc">
                        <div>
                            <i class="fas fa-chevron-up up2" data-id=${item.id}></i>
                            <p class="item-amount">${item.amount}</p>
                            <i class="fas fa-chevron-down down2" data-id=${item.id}></i>
                        </div>
                        
                    </div>
                    <div class="save">
                        <a class="save-item" href="#">
                            <i class="far fa-heart" ></i> Save item
                        </a>

                        <a href="javascript:void(0)"  >
                        <span class="remove-item remove-item2"  data-id=${item.id}>
                        <i class="fas fa-trash" ></i>
                        Remove Item
                        </span>
                        </a>

                    </div>
        `;
        if (cartContent.childNodes.length <= 2) {
            emptyCart.classList.remove('hide-details');
        }
        emptyCart.classList.add('hide-details');
        fullCart.classList.remove('hide-details');
        cartContent.appendChild(div);
        const link = document.querySelector('.save-item');
        function changeColor(e) {
            e.target.style.color = e.target.style.color ? null : '#87CEED';
        }
        link.addEventListener('click', changeColor);
    }
    
    addCartItem3(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            
                <div class="cart-item-img"><a href = ${item.link}><img src=${item.image} /></a></div>
                <div class="products">
                    <div class="p"><span>₦</span>${item.price}</div>
                    <div class="d">${item.title}</div>
                    <div class="qtc">
                        <div>
                            <i class="fas fa-chevron-up up3" data-id=${item.id}></i>
                            <p class="item-amount">${item.amount}</p>
                            <i class="fas fa-chevron-down down3" data-id=${item.id}></i>
                        </div>
                        
                    </div>
                    <div class="save">
                        <a class="save-item" href="#">
                            <i class="far fa-heart" ></i> Save item
                        </a>

                        <a href="javascript:void(0)"  >
                        <span class="remove-item remove-item3"  data-id=${item.id}>
                        <i class="fas fa-trash" ></i>
                        Remove Item
                        </span>
                    </a>

                    </div>
        `;
        if (cartContent.childNodes.length <= 2) {
            emptyCart.classList.remove('hide-details');
        }
        emptyCart.classList.add('hide-details');
        fullCart.classList.remove('hide-details');
        cartContent.appendChild(div);
        const link = document.querySelector('.save-item');
        function changeColor(e) {
            e.target.style.color = e.target.style.color ? null : '#87CEED';
        }
        link.addEventListener('click', changeColor);
    }
    
    addCartItem4(item){
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            
                <div class="cart-item-img"><a href = ${item.link}><img src=${item.image} /></a></div>
                <div class="products">
                    <div class="p"><span>₦</span>${item.price}</div>
                    <div class="d">${item.title}</div>
                    <div class="qtc">
                        <div>
                            <i class="fas fa-chevron-up up4" data-id=${item.id}></i>
                            <p class="item-amount">${item.amount}</p>
                            <i class="fas fa-chevron-down down4" data-id=${item.id}></i>
                        </div>
                        
                    </div>
                    <div class="save">
                        <a class="save-item" href="#">
                            <i class="far fa-heart" ></i> Save item
                        </a>

                        <a href="javascript:void(0)"  >
                        <span class="remove-item remove-item4"  data-id=${item.id}>
                        <i class="fas fa-trash" ></i>
                        Remove Item
                        </span>
                        </a>

                    </div>
        `;
        if (cartContent.childNodes.length <= 2) {
            emptyCart.classList.remove('hide-details');
        }
        emptyCart.classList.add('hide-details');
        fullCart.classList.remove('hide-details');
        cartContent.appendChild(div);
        const link = document.querySelector('.save-item');
        function changeColor(e) {
            e.target.style.color = e.target.style.color ? null : '#87CEED';
        }
        link.addEventListener('click', changeColor);
    }

    showCart(){
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
        pageheader.classList.add('hide');
    }

    setupAPP(){
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click', this.showCart)
        closeCartBtn.addEventListener('click', this.hideCart);
    }
    
    populateCart(cart){
        if(this.addTodayCartItem){
            cart.forEach(item => this.addCartItem(item));
        }

        else if(this.addCartItem){
            cart.forEach(item => this.addCartItem(item));
        }

        else if(this.addCartItem2){
            cart.forEach(item => this.addCartItem2(item));
        }
        else if(this.addCartItem3){
            cart.forEach(item => this.addCartItem3(item));
        }
        else if(this.addCartItem4){
            cart.forEach(item => this.addCartItem4(item));
        }
    }

    hideCart(){
        cartOverlay.classList.remove('transparentBcg');
        pageheader.classList.remove('hide');
        cartDOM.classList.remove('showCart');
    }

    cartLogicT(){
        // clear cart button
        clearCartBtn.addEventListener('click', () =>{
            this.clearCart();
        });

        // cart functionality
        cartContent.addEventListener('click', event =>{
            if(event.target.classList.contains('remove-itemT')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement.parentElement.parentElement);
                this.removeItem(id);
            }else if(event.target.classList.contains('upT')){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            }else if(event.target.classList.contains('downT')){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0){
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
            
        });
    }

    cartLogic(){
        // clear cart button
        clearCartBtn.addEventListener('click', () =>{
            this.clearCart();
        });

        // cart functionality
        cartContent.addEventListener('click', event =>{
            if(event.target.classList.contains('remove-item1')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement.parentElement.parentElement);
                this.removeItem(id);
            }else if(event.target.classList.contains('up1')){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            }else if(event.target.classList.contains('down1')){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0){
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
            
        });
    }

    cartLogic2(){
        // clear cart button
        clearCartBtn.addEventListener('click', () =>{
            this.clearCart();
        });

        // cart functionality
        cartContent.addEventListener('click', event =>{
            if(event.target.classList.contains('remove-item2')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement.parentElement.parentElement);
                this.removeItem(id);
            }else if(event.target.classList.contains('up2')){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            }else if(event.target.classList.contains('down2')){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0){
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
            
        });
    }

    cartLogic3(){
        // clear cart button
        clearCartBtn.addEventListener('click', () =>{
            this.clearCart();
        });

        // cart functionality
        cartContent.addEventListener('click', event =>{
            if(event.target.classList.contains('remove-item3')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement.parentElement.parentElement);
                this.removeItem(id);
            }else if(event.target.classList.contains('up3')){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            }else if(event.target.classList.contains('down3')){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0){
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
            
        });
    }

    cartLogic4(){
        // clear cart button
        clearCartBtn.addEventListener('click', () =>{
            this.clearCart();
        });

        // cart functionality
        cartContent.addEventListener('click', event =>{
            if(event.target.classList.contains('remove-item4')){
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement.parentElement.parentElement);
                this.removeItem(id);
            }else if(event.target.classList.contains('up4')){
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerText = tempItem.amount;
            }else if(event.target.classList.contains('down4')){
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                if(tempItem.amount > 0){
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                }else{
                    cartContent.removeChild(lowerAmount.parentElement.parentElement.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
            
        });
    }

    clearCart(){
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        while (cartContent.children.length > 0){
            cartContent.removeChild(cartContent.children[0])
        }
        if(cartContent.childNodes.length <= 3){
            emptyCart.classList.remove('hide-details');
            fullCart.classList.add('hide-details');
        }
    }

    removeItem(id){
        cart = cart.filter(item => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
            let button = this.getSingleButton(id);
            button.disabled = false;
            button.innerHTML = `Add to cart<i class="fas fa-shopping-cart"></i>`;
            if(cartContent.childNodes.length <= 3){
                emptyCart.classList.remove('hide-details');
                fullCart.classList.add('hide-details');
            }
        
    }

    getSingleButton(id){
        if (buttonsDOM.find(button => button.dataset.id === id)) {
            return buttonsDOM.find(button => button.dataset.id === id);
        } 
        else if(buttonsDOM1.find(button => button.dataset.id === id)){
            return buttonsDOM1.find(button => button.dataset.id === id);
        }
        else if(buttonsDOM2.find(button => button.dataset.id === id)){
            return buttonsDOM2.find(button => button.dataset.id === id);
        }
        else if(buttonsDOM3.find(button => button.dataset.id === id)){
            return buttonsDOM3.find(button => button.dataset.id === id);
        }
        else if(buttonsDOM4.find(button => button.dataset.id === id)){
            return buttonsDOM4.find(button => button.dataset.id === id);
        }else {
            let cart2 = Storage.getCart();
            return cart2.map(t => t.id)
        }
    }
}

//local storage
class Storage{


    static saveTodayProducts(products){
        localStorage.setItem('productsT', JSON.stringify(products));
    }

    static getTodayProducts(id){
        let products = JSON.parse(localStorage.getItem('productsT'));
        return products.find(product => product.id === id);
    }

    static saveProducts(products){
        localStorage.setItem('products', JSON.stringify(products));
    }

    static getProducts(id){
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }

    static saveCart(cart){
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    static getCart(){
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    }

    static saveProducts2(products){
        localStorage.setItem('products2', JSON.stringify(products));
    }

    static getProducts2(id){
        let products = JSON.parse(localStorage.getItem('products2'));
        return products.find(product => product.id === id);
    }

    static saveProducts3(products){
        localStorage.setItem('products3', JSON.stringify(products));
    }

    static getProducts3(id){
        let products = JSON.parse(localStorage.getItem('products3'));
        return products.find(product => product.id === id);
    }

    static saveProducts4(products){
        localStorage.setItem('products4', JSON.stringify(products));
    }

    static getProducts4(id){
        let products = JSON.parse(localStorage.getItem('products4'));
        return products.find(product => product.id === id);
    }

}

document.addEventListener('DOMContentLoaded',()=>{
    const ui = new UI();
    const todayProduct = new TodayProduct();
    const product1 = new Product1();
    const product2 = new Product2();
    const product3 = new Product3();
    const product4 = new Product4();

    // setup app
    ui.setupAPP();

    //get all products
    todayProduct.getProducts().then(product => {ui.todayDisplayProduct(product)
    Storage.saveTodayProducts(product);
    }).then(() => {
        ui.getTodayBagButton();
        ui.cartLogicT();
    });

    product1.getProducts().then(product => {ui.displayProduct(product)
    Storage.saveProducts(product);
    }).then(() => {
        ui.getBagButton();
        ui.cartLogic();
    });

    product2.getProducts().then(product => {ui.displayProduct2(product)
        Storage.saveProducts2(product);
    }).then(() => {
        ui.getBagButton2();
        ui.cartLogic2();
    });

    product3.getProducts().then(product => {ui.displayProduct3(product)
        Storage.saveProducts3(product);
    }).then(() => {
        ui.getBagButton3();
        ui.cartLogic3();
    });

    product4.getProducts().then(product => {ui.displayProduct4(product)
        Storage.saveProducts4(product);
    }).then(() => {
        ui.getBagButton4();
        ui.cartLogic4();
    });

});
