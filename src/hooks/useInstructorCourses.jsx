import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useInstructorCourses = () => {
    const {user, loading} = useAuth();
    const {data: insCourses = [], refetch} = useQuery({
        queryKey: ["insCourses", user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/courses?instructorEmail=${user?.email}`)
            return res.json()
        }
       })
       return [insCourses, refetch]
};

export default useInstructorCourses;