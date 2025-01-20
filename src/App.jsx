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
            <a id="Kong_Fu_Logo" class="navbar-brand"></a>
          </div>
        </div>
        
        <div>
          <ul class="nav navbar-nav" id="button_nav">
            <li><a href="#"><button id="homeTab">Home</button></a></li>
            <li><a href="#"><button id="menuTab">Shop</button></a></li>
          </ul>
        </div>
      </div>
        
    </nav>
  </div>

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
          <li>
            <h1><Link to="home/image">Image</Link></h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
