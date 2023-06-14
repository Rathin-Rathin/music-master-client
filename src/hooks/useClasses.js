import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    const { data: insClasses, refetch } = useQuery({
        queryKey: ['classes', email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${email}`)
            console.log('res from axios', res)
            return res.data;
        },

    })
    return [insClasses, refetch]
};

export default useClasses;