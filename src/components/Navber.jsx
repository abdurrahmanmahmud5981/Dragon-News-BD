import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navber = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""> </div>
      <div className="nav space-x-5 ">
        <Link to="/">Home</Link>
        <Link to="/carear">Carear</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex items-center gap-3">
        <div className="">
          <img src={userIcon} alt="usericon" />
        </div>
        <button className="btn btn-neutral rounded-none ">Login</button>
      </div>
    </div>
  );
};

export default Navber;
