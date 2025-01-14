import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello from Home page!</h1>
      <p>So, how are you?</p>
      <Link to="/">Click here to go back Home</Link>
      <Outlet />
    </div>
  );
};

export default Home;
