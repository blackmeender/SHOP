'use strict'
let buttons = document.querySelectorAll('.btn-overlay')
buttons.forEach(function (button) {
    button.addEventListener('click', addProduct)
})

function addProduct(event) {
    let productId = event.currentTarget.getAttribute('id')
    productInCart(productId)
}

function productInCart(productId) {

    increaceProductsCount()
    addToObject(productId)
    renderInCart(productId)
}

function increaceProductsCount() {
    let cartCounterEl = document.querySelector('.cart-index');
    cartCounterEl.textContent++
}

let cart = {}

function addToObject(productId) {
    if (!(productId in cart)) {
        cart[productId] = 1
    } else {
        cart[productId]++
    }
}

let openCart = document.querySelector('.cart-link')
let cartEl = document.querySelector('.cart')

openCart.addEventListener('click', function () {
    cartEl.classList.toggle('hidden')
})

function renderInCart(productId) {
    let productExist = document.querySelector('.product-count[id="${productId}"]');
    if (productExist) {
        increaceProductCount(productId)
        recalculateSum(productId)
    } else {
        newRenderInCart(productId)
    }
}

function newRenderInCart(productId) {
    let productRow = `
        <div class="cart-row">
            <div>${nameOfCard}</div>
            <div>
                <span class="productCount" id="${productId}">1</span> шт.
            </div>
            <div>$${price}</div>
            <div>
                $<span class="productTotalRow" id="${productId}">${price}</span>
            </div>
        </div>
    `
    let cartTotalEl = document.querySelector('.cart-total')
    cartTotalEl.insertAdjacentHTML("beforebegin", productRow)
}

let pp = document.querySelector('.number')
let f = pp.innerHTML
console.log(f)

let price = document.querySelector('.number')
let a = price.innerHTML
console.log(a)
let p = document.querySelector('card-title')
let nameOfCard = p.innerHTML
console.log(nameOfCard)






function increaceProductCount(productId) {
    let productCountEl = document.querySelector(`.productCount[id="${productId}"]`)
    productCountEl.textContent++;
}

function recalculateSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[id="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

