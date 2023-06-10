import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useSelectCourse = () => {
    const {user, loading} = useAuth()
    const {data: selectCourses = [], refetch} = useQuery({
        queryKey: ["selectCourses", user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/selectedCourses?email=${user?.email}`)
            return res.json()
        }

       })
       return [selectCourses, refetch]
};

export default useSelectCourse;