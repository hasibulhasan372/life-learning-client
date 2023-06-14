import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useGetUsers = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ["allUsers"],
        enabled: !loading && !!user?.email,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }

       })
       return [allUsers, refetch];
};

export default useGetUsers;