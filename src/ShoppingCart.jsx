import { Link } from "react-router-dom";

const ShoppingCart = () => {
    return(
        <div>
            <h1>
                This is your Shopping Cart!
            </h1>
            <Link to="/">Click here to go back Home</Link>
        </div>
    )
}

export default ShoppingCart;