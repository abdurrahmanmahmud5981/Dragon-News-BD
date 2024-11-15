import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({})
  const hanleSubmit = (e) => {
    e.preventDefault();
    // form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if(name.length< 5){
      setError({...error, name: "Name should be at least 5 characters long" });
      return;
    }
    const photo = form.get("photo");
    
    const email = form.get("email");
    const password = form.get("password");
   
    createNewUser(email, password).then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);

    }).catch((err) => {
        const errorMessage = err.message
        const errorCode = err.code;
        console.log( errorMessage + errorCode);
        setError({...error, register: errorMessage });
    });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Ragister Your Accoutn
        </h2>
        <form onSubmit={hanleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          {
            error.name && (
              <p className="text-red-500 text-xs">{error.name}</p>
            )
          }
          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/*email  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Allready have An Account ?{" "}
          <Link className="underline text-red-500" to="/auth/login">
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
