import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructorCourses = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const {data: insCourses = [], refetch} = useQuery({
        queryKey: ["insCourses", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/coursesInstructor?instructorEmail=${user?.email}`)
            return res.data;
        }
       })
       return [insCourses, refetch];
};

export default useInstructorCourses;