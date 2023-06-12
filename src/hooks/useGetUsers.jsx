import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useGetUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ["allUsers"],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users`)
            return res.data;
        }

       })
       return [allUsers, refetch]
};

export default useGetUsers;