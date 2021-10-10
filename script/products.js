const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const buttons = document.querySelectorAll("button");
const cart = document.querySelector(".cart");
const cartTotal = document.querySelector(".cart-total");
let total = 0;
let count = 0;

button1.onclick = function(){
    count++;
    total += 5.00
    cart.style.display = "block";
    cartTotal.innerHTML = `Items: ${count} Total: $ ${total}`;

}

button2.onclick = function(){
    count++;
    total += 6.00
    cart.style.display = "block";
    cartTotal.innerHTML = `Items: ${count} Total: $ ${total}`;

}

button3.onclick = function(){
    count++;
    total += 7.00
    cart.style.display = "block";
    cartTotal.innerHTML = `Items: ${count} Total: $ ${total}`;
}


function removeCart() {
    cart.style.display = "none";
}

buttons.onclick = setTimeout(removeCart, 2000);


