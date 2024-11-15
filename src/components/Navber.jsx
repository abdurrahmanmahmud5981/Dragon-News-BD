import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navber = () => {
  const { user,logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user?.email} </div>
      <div className="nav space-x-5 ">
        <Link to="/">Home</Link>
        <Link to="/carear">Carear</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex items-center gap-3">
        <div className="">
          <img src={userIcon} alt="usericon" />
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none ">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
