import { useQuery } from "@tanstack/react-query";


const usePopularCourses = () => {
    const {data: popularCourses = []} = useQuery({
        queryKey: ["popularCourses"],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/popularCourses`)
            return res.json()
        }
       })
       return [popularCourses]
};

export default usePopularCourses;