import { toast } from "react-hot-toast";
import CoursesForAllCard from "../../../components/Card/coursesForAllCard";
import useAuth from "../../../hooks/useAuth";
import usePopularCourses from "../../../hooks/usePopularCourses";


const PopularCourses = () => {
    const [popularCourses] = usePopularCourses();
    const {user} = useAuth()
    const handleEnrollCourses = (course) =>{
        const { courseName, instructorName, fee, image, _id} = course
        const selectedCourse = {
                name: courseName,
                instructorName,
                fee,
                image,
                courseId: _id,
                email: user?.email,
        }
        fetch(`${import.meta.env.VITE_LOCAL_HOST}/selectedCourses`,{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(selectedCourse)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success("You have selected the course for enrollment")
            }
        })
    }
    return (
        <div className="py-6 sm:py-8 md:py-10 lg:py-16">
           <div className="content-con">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 justify-center items-center gap-6 mt-4 md:mt-8 lg:mt-12">
                {
                    popularCourses.map(course => <CoursesForAllCard key={course._id} course={course}
                    handleEnrollCourses={handleEnrollCourses}
                    ></CoursesForAllCard>)
                }
            </div>
           </div>
            
        </div>
    );
};

export default PopularCourses;