import { useQuery } from "@tanstack/react-query";


const useCoursesForAll = () => {
    const {data: coursesForAll = []} = useQuery({
        queryKey: ["coursesForAll"],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/coursesForAll`)
            return res.json()
        }
       })
       return [coursesForAll];
};

export default useCoursesForAll;