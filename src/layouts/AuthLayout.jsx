import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#f3f3f3]">
            <header className="py-3 w-11/12 mx-auto max-w-screen-2xl">
                <Navber/>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;