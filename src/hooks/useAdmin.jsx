import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

    
    const useAdmin = () => {
        const {user, loading} = useAuth();
        const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
            queryKey: ["isAdmin", user?.email],
            enabled: !loading,
            queryFn: async()=>{
                const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/users/admin/${user?.email}`)
                return res.data.data
            }
        })
        return [isAdmin, isAdminLoading]
    };
    
    export default useAdmin;