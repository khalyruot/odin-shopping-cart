import { Link } from "react-router-dom";

const Aboutpage = () => {
    return(
        <div>
            <h1>
                This is your About Page!
            </h1>
            <Link to="/">Click here to go back home</Link>
        </div>
    )
}

export default Aboutpage;