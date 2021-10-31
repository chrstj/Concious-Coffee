const baseUrl = "https://www.floewerpoewer.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    console.log(url);
    products.forEach(function(product){
        productContainer.innerHTML += `
        <a href="details.html?id=${product.id}">
        <div class="product"><h2>${product.name}</h2>
        <div> <img src="${product.images[0].src}" alt="${product.name}">
        <div>$${product.prices.price}</div>
        <div> <button>Add to cart</button> </div>
       
                </div>`
    })
}

getProducts(baseUrl);