import { useQuery } from "@tanstack/react-query";


const usePopularInstructor = () => {
    const {data: popularInstructors = []} = useQuery({
        queryKey: ["popularInstructors"],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/popularInstructors`)
            return res.json()
        }
       })
       return [popularInstructors]
};

export default usePopularInstructor;