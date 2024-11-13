
import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-2">
            <div className="">
                <img className="w-72" src={logo} alt="Logo" />
            </div>
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>{moment().format('dddd, MMMM Do, YYYY')}</p>
        </div>
    );
};

export default Header;