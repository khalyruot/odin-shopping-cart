import { Link } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div>
      <div id="top_menu_fix">
          <nav class="navbar navbar-inverse navbar-fixed-top" >
            <div id="navbar">
              <div class="container-fluid">
                <div >
                  <a id="shop_logo" class="navbar-brand">bbbbbb</a>
                </div>
              </div>
              
              <div>
                <ul class="nav navbar-nav" id="button_nav">
                  <button id="homeTab"><Link to="home">Home</Link></button>
                  <button id="menuTab"><Link to="shoppingcart">Shope</Link></button>
                  <button id="menuTab"><Link to="cart">Cart</Link></button>
                </ul>
              </div>
            </div> 
          </nav>
      </div>

      <div id="homePage">
      <nav>
          <ul>
            <li>
              <h1><Link to="home/aboutpage">About page</Link></h1>
            </li>
            <li>
              <h1><Link to="home/image">Image</Link></h1>
            </li>
          </ul>
        </nav>

      </div>

    </div>
  );
};

export default App;
