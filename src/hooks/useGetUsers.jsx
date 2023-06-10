import { useQuery } from "@tanstack/react-query";


const useGetUsers = () => {

    const {data: allUsers = [], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/users`)
            return res.json()
        }

       })
       return [allUsers, refetch]
};

export default useGetUsers;