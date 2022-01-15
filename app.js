'use strict'
let buttons = document.querySelectorAll('.btn-overlay[id]')
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
    calculateAndRenderTotalCartSum()
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
    let productExist = document.querySelector(`.productCount[id="${productId}"]`);
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
            <div>${productArr[productId].name}</div>
            <div>
                <span class="productCount" id="${productId}">1</span> шт.
            </div>
            <div>$${productArr[productId].priceOfCard}</div>
            <div>
                $<span class="productTotalRow" id="${productId}">${productArr[productId].priceOfCard}</span>
            </div>
        </div>
    `
    let cartTotalEl = document.querySelector('.cart-total')
    cartTotalEl.insertAdjacentHTML("beforebegin", productRow)
}
let productArr = []
let productCards = document.querySelectorAll('.product-card')
productCards.forEach(function (productCard) {
    let name = productCard.querySelector('.card-title').innerText
    let priceOfCard = Number(productCard.querySelector('.number').innerText)
    productArr.push({
        name,
        priceOfCard
    })
})





function increaceProductCount(productId) {
    let productCountEl = document.querySelector(`.productCount[id="${productId}"]`)
    productCountEl.textContent++
}

function recalculateSum(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[id="${productId}"]`)
    let totalPriceForRow = (cart[productId] * productArr[productId].priceOfCard)
    productTotalRowEl.textContent = totalPriceForRow
}

function calculateAndRenderTotalCartSum() {
    let totalSum = 0
    for (let productId in cart) {
        totalSum += cart[productId] * productArr[productId].priceOfCard
    }
    cartTotalValueEl.innerText = Number(totalSum)
}

const cartTotalValueEl = document.querySelector('.total-value')