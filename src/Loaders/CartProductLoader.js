import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () =>{
    const addedProducts = await fetch('products.json');
    const produdcts = await addedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = []
    for(const id in storedCart){
        const addedProduct = produdcts.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}

export default cartProductLoader;