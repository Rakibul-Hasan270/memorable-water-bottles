import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLocalStg, getStoredCart, removeFromLocalStg } from "../../Utility/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(response => response.json())
            .then(data => setBottles(data))
    }, []);
    console.log(cart)
    // load data for local stg 
    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStoredCart();

            const saveCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle);
                }
            }
            setCart(saveCart);
        }
    }, [bottles]);

    const handelRemoveToCart = id => {
        removeFromLocalStg(id);

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
    }

    const handelAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToLocalStg(product.id);
    }

    return (
        <div>
            <Cart cart={cart} handelRemoveToCart={handelRemoveToCart}></Cart>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    bottles.map((bottle, idx) => <Bottle key={idx} bottle={bottle} handelAddToCart={handelAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;