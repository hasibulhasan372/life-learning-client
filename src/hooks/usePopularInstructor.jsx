import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const usePopularInstructor = () => {
    const {loading} = useAuth();
    const {data: popularInstructors = []} = useQuery({
        queryKey: ["popularInstructors"],
        enabled: loading,
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/popularInstructors`)
            return res.json()
        }
       })
       return [popularInstructors]
};

export default usePopularInstructor;