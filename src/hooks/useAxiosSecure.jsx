import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: (`${import.meta.env.VITE_LOCAL_HOST}`)
});

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate()
   
    

    useEffect(() =>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItems("access-token");
            if(token){
                config.headers.authorization = `Bearer ${token}`
            }
            return config;
        });
        axiosSecure.interceptors.request.use((response) => response, async(error) =>{
            if(error.response || error.response.status === 401 || error.response.status === 403){
                await logOut();
                navigate("/login")
            }
            return Promise.reject(error)
        })

    },[logOut, navigate]);

    return[axiosSecure];
};

export default useAxiosSecure;