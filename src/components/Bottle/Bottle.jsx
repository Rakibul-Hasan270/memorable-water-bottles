import PropTypes from "prop-types";

const Bottle = ({ bottle, handelAddToCart }) => {
    const { name, price, img, id } = bottle;

    return (
        <div style={{ background: 'lightblue', margin: '10px' }}>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <img style={{ width: '200px' }} src={img} alt="" />
            <h4>{id}</h4>
            <button onClick={() => handelAddToCart(bottle)} style={{ padding: '10px' }}>Add To Card</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handelAddToCart: PropTypes.func.isRequired
}

export default Bottle;