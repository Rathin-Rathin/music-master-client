import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
     baseURL: `${import.meta.env.VITE_url}`
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = `Bearer ${localStorage.getItem('access-token')}`;
            if (token) {
                config.headers.Authorization = token
            }
            return config;
        })

        axiosSecure.interceptors.response.use((response) => response,
            async (error) => {
            if (error.response && error.response.status === 401 || error.response.status === 403) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        })
    }, [ navigate, logOut])

    return [axiosSecure];
}
export default useAxiosSecure;