import { toast } from "react-hot-toast";
import InstructorCoursesCard from "../../../../components/Card/InstructorCoursesCard";
import useInstructorCourses from "../../../../hooks/useInstructorCourses";


const InstructorCourses = () => {
    const [insCourses, refetch] = useInstructorCourses();

    const handleDelete = (id) =>{
        fetch(`${import.meta.env.VITE_LOCAL_HOST}/courses/${id}`,{
            method: "DELETE"
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount){
                refetch()
                toast.success("Course deleted");
            }
        })
    }
    return (
        <div>
        <div className="flex flex-col justify-center mt-4 md:mt-10 lg:mt-20 overflow-x-scroll lg:overflow-x-hidden">
            <div className="w-full lg:px-6 lg:mx-auto">
                <div className="  ">
                    <table className="w-full text-left">
                        <thead className="bg-pink-50 border-b-[2px]">
                            <tr>
                                <th className="table-head">

                                </th>
                                <th className="table-head">
                                    Banner
                                </th>
                                <th className="table-head">
                                    Course Name
                                </th>
                                <th className="table-head">
                                    Instructor Name
                                </th>
                                <th className="table-head">
                                Instructor Email
                                </th>
                                <th className="table-head">
                                Available Seat
                                </th>

                                <th className="table-head">
                                   Course Fee
                                </th>
                                <th className="table-head">
                                   Total Enrollment
                                </th>
                                <th className="table-head">
                                    Status
                                </th>
                                <th className="table-head">
                                Feedback
                                </th>
                                
                                <th className="table-head">
                                   Action
                                </th>
                                
                                <th className="table-head">
                                   Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" border-b-[2px]">
                            {
                                insCourses.map((course, index) => <InstructorCoursesCard
                                key={course._id}
                                course={course} 
                                index={index}
                                handleDelete={handleDelete}
                                ></InstructorCoursesCard>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};

export default InstructorCourses;