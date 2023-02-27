const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuBurguer = $('.menu');
const mobileMenu = $('.mobile-menu');
const carMenu = $('.navbar-shopping-cart');
const aside = $('.product-detail');
const cardsContainer = $('.cards-container');
const detailOrder = $('.product-description');
const detailOrderClose = $('.product-description-close');

menuBurguer.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
carMenu.addEventListener('click', toggleCarAside)
detailOrderClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    detailOrder.classList.add('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    detailOrder.classList.add('inactive');
}

function toggleCarAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    detailOrder.classList.add('inactive');
    aside.classList.toggle('inactive');
}

function openProductDetail() {
    detailOrder.classList.remove('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetail() {
    detailOrder.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Motocicleta',
    price: 3500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computador Gaming',
    price: 1500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.setAttribute('id', 'img-product');
        img.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productDivInfo = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productDivInfo.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productDivInfo, productInfoFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);