// shopping cart functionality
let cart = [];

// add item to cart function
function addToCart(item) {
    cart.push(item);
    console.log(`${item} added to cart`);
}

// remove item from cart function
function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
        console.log(`${item} removed from cart`);
    } else {
        console.log(`${item} not found in cart`);
    }
}

// checkout function
function checkout() {
    if (cart.length === 0) {
        console.log('Cart is empty. Please add items to cart before checking out.');
        return;
    }
    console.log('Order processed:', cart);
    cart = []; // clear cart after processing order
}

// example usage
addToCart('item1');
addToCart('item2');
removeFromCart('item1');
checkout();
