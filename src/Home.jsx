import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
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
                              <li><a href="#"><button id="menuTab">Cart</button></a></li>
                            </ul>
                          </div>
                        </div>
                
            </nav>
        </div>
      <Link to="/">Click here to go back Home</Link>
      <Outlet />
    </div>
  );
};

export default Home;
