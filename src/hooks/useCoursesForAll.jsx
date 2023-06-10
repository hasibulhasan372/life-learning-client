import { useQuery } from "@tanstack/react-query";
import useCourses from "./useCourses";


const useCoursesForAll = () => {
    const [courses] = useCourses()
    const {data: coursesForAll = []} = useQuery({
        queryKey: ["insCourses", courses?.status],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/coursesForAll?status=${courses?.status}`)
            return res.json()
        }
       })
       return [coursesForAll]
};

export default useCoursesForAll;