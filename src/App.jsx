import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <h1><Link to="home">Home page</Link></h1> 
          </li>
          <li>
            <h1><Link to="home/shoppingcart">Sopping Cart</Link></h1> 
          </li>
          <li>
            <h1><Link to="home/aboutpage">About page</Link></h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
