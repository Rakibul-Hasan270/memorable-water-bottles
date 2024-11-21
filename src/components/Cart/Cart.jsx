import PropTypes from "prop-types";

const Cart = ({ cart, handelRemoveToCart }) => {

    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    cart.map((bottle, idx) =>
                        <div style={{ textAlign: 'center' }} key={idx}>
                            <div><img style={{ width: '100px', margin: '2px', background: 'lightblue', border: '2px solid purple' }} src={bottle.img} alt="" /></div>
                            <button onClick={() => handelRemoveToCart(bottle.id)} style={{ padding: '5px' }}>Remove Cart</button>
                        </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handelRemoveToCart: PropTypes.func.isRequired
}

export default Cart;