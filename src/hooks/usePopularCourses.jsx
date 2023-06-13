import { useQuery } from "@tanstack/react-query";


const usePopularCourses = () => {
    const {data: popularCourses = [], refetch} = useQuery({
        queryKey: ["popularCourses"],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/popularCourses`)
            return res.json()
        }
       })
       return [popularCourses, refetch]
};

export default usePopularCourses;