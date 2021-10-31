const detailContainer = document.querySelector(".product-details");

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://www.floewerpoewer.one/wp-json/wc/store/products/" + id;



console.log(url);

async function fetchDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
    }
    
}
fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML += `
    <div>
    <section class="headline"> <h1>${details.name}</h1> </section>
    <section class="image"><img src="${details.images[0].src}" alt="${details.name}"> 
    <div>$${details.prices.price}</div>
    <div><button>Add to cart</button>
    <p class="text">${details.description}</p>
    </section>
    </div>
    
    `
                                
} 
