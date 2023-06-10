import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useCourses = () => {
    const {loading} = useAuth();

    const {data: courses = [], refetch} = useQuery({
        queryKey: ["courses"],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/courses`)
            return res.json()
        }
       })
       return [courses, refetch]
};

export default useCourses;