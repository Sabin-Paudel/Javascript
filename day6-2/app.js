const cart = [
  {
    name: 'RX 100',
    price: 100,
    des: 'This is our first product',
  },
  {
    name: 'Bicycle',
    price: 150,
    des: 'This is our Second product',
  },
];

const display = document.getElementById('cart');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');

btn1.addEventListener('click', () => {
  const product = cart[0];
  display.innerHTML = `
    <img src="download.jpg"> <br> ${product.name}<br>Description: ${product.des}<br>Price: $${product.price}
  `;
});

btn2.addEventListener('click', () => {
  const product = cart[1];
  display.innerHTML = `
    <img src="OIP.jpg"> <br> ${product.name}<br>Description: ${product.des}<br>Price: $${product.price}
  `;
});

