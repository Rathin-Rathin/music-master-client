import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    const { data: myClasses, refetch,isLoading } = useQuery({
        queryKey: ['selectedClass', email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectClass/${email}`)
            return res.data
        },

    })
    return [myClasses, refetch,isLoading]
}
export default useMyClasses;