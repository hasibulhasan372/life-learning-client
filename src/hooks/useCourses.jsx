import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCourses = () => {
    const {loading} = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const {data: courses = [], refetch} = useQuery({
        
        queryKey: ["courses"],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/courses`)
            return res.data;
            
        }
       })
       return [courses, refetch]
};

export default useCourses;