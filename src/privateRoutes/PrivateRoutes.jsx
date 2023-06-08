import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingSpiner from "../components/LoadingSpiner";


const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    if (!user) {
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    } else {
        return children;
    }
    if (loading) {
        return <LoadingSpiner/>
    }
    
};

export default PrivateRoutes;