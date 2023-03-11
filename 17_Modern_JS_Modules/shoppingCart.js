// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finished fetching users');

// Scoped to current module
const shippingCost = 10;
export const cart = [];

export const addToCart = function (quantity, product) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (quantity, product) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
