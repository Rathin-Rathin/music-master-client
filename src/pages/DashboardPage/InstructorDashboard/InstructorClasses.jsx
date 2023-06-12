import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const InstructorClasses = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [insClass, setInsClass] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_url}/classes/${email}`)
            .then(res => res.json())
            .then(data => setInsClass(data))
        
        
    },[email])

    console.log(`${import.meta.env.VITE_url}/classes/:${email}`);
    return (
        <div className="p-4">
           
        </div>
    );
};

export default InstructorClasses;