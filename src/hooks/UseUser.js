import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allUsers, refetch } = useQuery(['allUsers'], async () => {
        const res = await axiosSecure.get(`${import.meta.env.VITE_url}/allUsers`)
        return res.data;
    })
    return [allUsers,refetch];
}
export default useUser;