import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello from Home page!</h1>
      <p>So, how are you?</p>
      <Outlet />
    </div>
  );
};

export default Home;
