import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedCourseDelete = (id) => {
    const [axiosSecure] = useAxiosSecure();
    const {data: deleteSelectCourses = []} = useQuery({
        queryKey: ["deleteSelectCourses", ],
        queryFn: async() =>{
            const res = await axiosSecure.delete(`/selectedCourses/${id}`)
            return res.data
        }

       })
       return [deleteSelectCourses]
};

export default useSelectedCourseDelete;