

import CoursesForAllCard from "../../components/Card/coursesForAllCard";
import useCoursesForAll from "../../hooks/useCoursesForAll";
const Courses = () => {
    const [coursesForAll] = useCoursesForAll();
    

    return (
        <div className="content-con mt-4 md:mt-8 lg:mt-12">
            <h1 className="text-lg text-center md:text-left md:text-2xl lg:text-3xl font-bold">Welcome! <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-500 font-bold md:font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Life Learning</span> Languages Courses</h1>
            <h3 className="text-lg text-center md:text-left md:text-xl lg:text-2xl mt-3 md:mt-5 font-bold">Choose your course and start learning</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 justify-center items-center gap-6 mt-4 md:mt-8 lg:mt-12">
                {
                    coursesForAll.map(course => <CoursesForAllCard key={course._id} course={course}></CoursesForAllCard>)
                }
            </div>
        </div>
    );
};

export default Courses;