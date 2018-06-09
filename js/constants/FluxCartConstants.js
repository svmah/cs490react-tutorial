var keyMirror = require('keymirror');

// Define action constants
module.exports = keyMirror({
  CART_ADD: null,     // Adds item to cart
  CART_REMOVE: null,  // Remove item from cart
  CART_VISIBLE: null, // SHows or hides the cart
  SET_SELECTED: null, // Selects a product option
  RECEIVE_DATA: null, // loads our mock data
});
