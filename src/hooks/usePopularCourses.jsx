import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const usePopularCourses = () => {
    const {loading} = useAuth()
    const {data: popularCourses = [], refetch} = useQuery({
        queryKey: ["popularCourses"],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/popularCourses`)
            return res.json()
        }
       })
       return [popularCourses, refetch]
};

export default usePopularCourses;