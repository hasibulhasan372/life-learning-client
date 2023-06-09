import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useGetUsers = () => {
    const {loading} = useAuth();

    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ["users"],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/users`)
            return res.json()
        }

       })
       return [allUsers, refetch]
};

export default useGetUsers;