import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useSelectedCourseDelete = (id) => {
    const {loading}  = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: deleteSelectCourses = []} = useQuery({
        queryKey: ["deleteSelectCourses", ],
        enabled : !loading,
        queryFn: async() =>{
            const res = await axiosSecure.delete(`/selectedCourses/${id}`)
            return res.data;
        }

       })
       return [deleteSelectCourses];
};

export default useSelectedCourseDelete;