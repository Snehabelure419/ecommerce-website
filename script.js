const products = [

{
id:1,
name:"Laptop",
price:50000,
category:"Laptop",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
},

{
id:2,
name:"Smart Phone",
price:25000,
category:"Phone",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
},

{
id:3,
name:"Headphones",
price:3000,
category:"Accessories",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
},

{
id:4,
name:"Smart Watch",
price:7000,
category:"Accessories",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
}

];

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const productsContainer =
document.getElementById("products");

function displayProducts(items){

productsContainer.innerHTML="";

items.forEach(product=>{

productsContainer.innerHTML += `

<div class="card">

<div class="badge">
20% OFF
</div>

<img src="${product.image}">

<div class="card-content">

<h3>${product.name}</h3>

<div class="rating">
⭐⭐⭐⭐⭐
</div>

<p>₹${product.price}</p>

<button
onclick="addToCart(${product.id})"
>
Add To Cart
</button>

</div>

</div>

`;

});

}

function addToCart(id){

const item =
products.find(
product=>product.id===id
);

cart.push(item);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}

function updateCart(){

document.getElementById(
"cart-count"
).innerText = cart.length;

const cartItems =
document.getElementById(
"cart-items"
);

cartItems.innerHTML="";

let total = 0;

cart.forEach(item=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>₹${item.price}</p>

</div>

`;

});

document.getElementById(
"total-price"
).innerText = total;

}

function toggleCart(){

document
.getElementById("cartSidebar")
.classList
.toggle("active");

}

function filterProducts(category){

if(category==="all"){

displayProducts(products);

}
else{

displayProducts(
products.filter(
product=>
product.category===category
)
);

}

}

document
.getElementById("search")
.addEventListener(
"keyup",
e=>{

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(
product=>
product.name
.toLowerCase()
.includes(value)
);

displayProducts(filtered);

});

displayProducts(products);
updateCart();