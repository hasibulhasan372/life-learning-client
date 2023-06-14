import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelectCourse = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: selectCourses = [], refetch} = useQuery({
        queryKey: ["selectCourses", user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async() =>{
            const res = await axiosSecure.get(`/selectedCourses?email=${user?.email}`)
            return res.data
        }

       })
       return [selectCourses, refetch];
};

export default useSelectCourse;