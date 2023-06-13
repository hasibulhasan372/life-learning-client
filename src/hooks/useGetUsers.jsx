import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useGetUsers = () => {
    const {loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ["allUsers"],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }

       })
       return [allUsers, refetch]
};

export default useGetUsers;