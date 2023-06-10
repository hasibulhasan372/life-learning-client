import { useQuery } from "@tanstack/react-query";
import useCourses from "./useCourses";


const useApprovedInstructorCourse = (email) => {
    const [courses] = useCourses()
    // TODO:Need to complete 
    const {data: instructorApprovedCourses = []} = useQuery({
        queryKey: ["instructorApprovedCourses", courses?.status],
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_LOCAL_HOST}/coursesInstructorApproved?instructorEmail=${email}&&status=${courses?.status}`)
            return res.json()
        }
       })
       return [instructorApprovedCourses]
};

export default useApprovedInstructorCourse;