import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {data: instructors = []} = useQuery({
        queryKey: ["instructors"],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/instructors`)
            return res.json()
        }
       })
       return [instructors];
};

export default useInstructor;