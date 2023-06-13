import { useQuery } from "@tanstack/react-query";
import useCourses from "./useCourses";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useApprovedInstructorCourse = (email) => {
    const [courses] = useCourses();
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure()
    // TODO:Need to complete 
    const {data: instructorApprovedCourses = []} = useQuery({
        queryKey: ["instructorApprovedCourses", courses?.status],
        enabled: !loading&& !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async() =>{
            const res = await axiosSecure.get(`/coursesInstructorApproved?instructorEmail=${email}&&status=${courses?.status}`)
            return res.json()
        }
       })
       return [instructorApprovedCourses]
};

export default useApprovedInstructorCourse;