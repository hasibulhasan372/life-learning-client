import { toast } from "react-hot-toast";
import CoursesForAllCard from "../../components/Card/coursesForAllCard";
import useCoursesForAll from "../../hooks/useCoursesForAll";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useVerifyInstructor from "../../hooks/useVerifyInstructor";
import useAdmin from "../../hooks/useAdmin";
import { Slide } from "react-awesome-reveal";
const Courses = () => {
    const [coursesForAll] = useCoursesForAll();
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const [isInstructor] =useVerifyInstructor();
    const [isAdmin] = useAdmin();

    const handleEnrollCourses = (course) => {
        if (user && user?.email) {
            const { courseName, instructorName, fee, image, _id } = course;
            const selectedCourse = {
                name: courseName,
                instructorName,
                fee,
                image,
                courseId: _id,
                email: user?.email,
            }
            fetch(`${import.meta.env.VITE_LOCAL_HOST}/selectedCourses`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(selectedCourse)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        toast.success("You have selected the course for enrollment")
                    }
                })
        }
        else {
            toast.error("please login first");
            navigate("/login")
        }
    };


    return (
       <Slide triggerOnce>
         <div className="content-con mt-4 md:mt-8 lg:mt-12 ">
            <h1 className="text-lg text-center md:text-left md:text-2xl lg:text-3xl font-bold">Welcome! <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 font-bold md:font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Life Learning</span> Languages Courses</h1>
            <h3 className="text-lg text-center md:text-left md:text-xl lg:text-2xl mt-3 md:mt-5 font-bold">Choose your course and start learning</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 justify-center items-center gap-6 mt-4 md:mt-8 lg:mt-12 lg:pb-20 ">
                {loading ? <span className="loading loading-bars loading-lg mx-auto"></span> :
                    coursesForAll.map(course => <CoursesForAllCard key={course._id} course={course}
                        handleEnrollCourses={handleEnrollCourses}
                        isInstructor={isInstructor} isAdmin={isAdmin}
                    ></CoursesForAllCard>)
                }
            </div>
        </div>
       </Slide>
    );
};

export default Courses;