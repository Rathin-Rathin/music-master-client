import {NavLink } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { SiCoursera} from 'react-icons/si';

const Common = () => {
    return (
        <div>
            <div className="text-xl">
                <hr/>
                <li className=" hover:bg-slate-700"><NavLink to='/classes'><SiCoursera/>Classes</NavLink></li>
                <li className="hover:bg-slate-700"><NavLink to='/'><FaHome />Home</NavLink></li>
            </div>
        </div>
    );
};

export default Common;