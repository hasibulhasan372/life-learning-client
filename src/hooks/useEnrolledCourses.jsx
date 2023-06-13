import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useEnrolledCourses = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: enrolledCourses = [], refetch} = useQuery({
        queryKey: ["enrolledCourses", user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async() =>{
            const res = await axiosSecure.get(`/enrolledCourses?email=${user?.email}`)
            return res.data
        }

       })
       return [enrolledCourses, refetch]
};

export default useEnrolledCourses;