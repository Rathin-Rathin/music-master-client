import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader/>
    }
    if (!user) {
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    } else {
        return children;
    }
  
    
};

export default PrivateRoutes;