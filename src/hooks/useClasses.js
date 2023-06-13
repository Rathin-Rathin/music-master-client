import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useClasses = () => {
    
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const { data: insClasses,refetch } = useQuery({
        queryKey: ['classes', email],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_url}/classes/${email}`)
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json(

            )
        },
    })
    return [insClasses,refetch]
};

export default useClasses;