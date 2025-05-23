// Step 1: Create an array of products
const products = [
    { title: "Laptop", price: 49999, image: "https://cdn.mos.cms.futurecdn.net/FUi2wwNdyFSwShZZ7LaqWf.jpg" },
    { title: "Smartphone", price: 29999, image: "https://m.media-amazon.com/images/I/51AHHmX-17L.jpg" },
    { title: "Headphones", price: 1999, image: "https://shop.zebronics.com/cdn/shop/files/Zeb-Blast-Z-pic1.jpg?v=1708946658" },
    { title: "Books", price: 499, image: "https://m.media-amazon.com/images/I/810TnoSTRsL._AC_UF1000,1000_QL80_.jpg" },
    { title: "Smartwatch", price: 9999, image: "https://hammeronline.in/cdn/shop/files/Hammerglidebluetoothcallingsmartwatch_1.webp?v=1694851875" },
    { title: "Tablet", price: 15999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BiXvqfQ8e1AAuhLpGkoFRpayuiMlwU_Ukw&s" },
    { title: "Camera", price: 45999, image: "https://sharpi.in/wp-content/uploads/2022/06/1653353121_1708099.jpg" },
    { title: "Bluetooth Speaker", price: 2999, image: "https://m.media-amazon.com/images/I/81FzSswwCVL.jpg" },
    { title: "Gaming Console", price: 34999, image: "https://scx2.b-cdn.net/gfx/news/hires/2019/googleschall.jpg" },
    { title: "Wireless Mouse", price: 799, image: "https://m.media-amazon.com/images/I/61l33dfloaL._AC_UF1000,1000_QL80_.jpg" }
];

// Step 2: Find the container where products will be added
const container = document.getElementById('product-container');

// Step 3: Loop through products and create HTML for each
products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.title}')">Add to Cart</button>
    `;

    container.appendChild(card);
});

// Step 4: Add to Cart logic
let cart = [];
const cartCount = document.getElementById('cart-count');

function addToCart(productName) {
    cart.push(productName);
    cartCount.textContent = cart.length;
    alert(`${productName} added to cart!`);
}

// Step 5: Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
