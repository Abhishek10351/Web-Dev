// common patters for updating arrays in react

const shoppingCart = [
    { id: 1, product: "HDMI cable", price: 10.0 },
    { id: 2, product: "Easy Bake Oven", price: 15.0 },
    { id: 3, product: "Shoes", price: 5.0 },
    { id: 4, product: "Candy", price: 2.0 },
];

// add an item to the cart
[...shoppingCart, { id: 5, product: "Laptop", price: 500.0 }];

// remove an item from the cart
shoppingCart.filter((item) => item.id === 3);

// update an item in the cart
shoppingCart.map((item) => {
    if (item.id === 3) {
        return { ...item, price: 10.0 };
    }
    return item;
});

//updatinf all elements in the array
shoppingCart.map((item) => ({ ...item, product: item.product.toLowerCase() }));
