import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    if (!user) {
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    } else {
        return children;
    }
    if (loading) {
        return <Loader/>
    //    return <p className='w-4/12 mx-auto'>
    //         <progress className="progress progress-secondary  w-full"></progress>
    //     </p>
    }
    
};

export default PrivateRoutes;