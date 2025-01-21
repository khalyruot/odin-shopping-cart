import { Link } from "react-router-dom";

const Cart = () => {
    return(
        <div>
            <h1>
                This is your Cart!
            </h1>
            <Link to="/">Click here to go back Home</Link>
        </div>
    )
}

export default Cart;