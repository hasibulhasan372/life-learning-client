import { Slide } from "react-awesome-reveal";
import EnrollmentCourseCard from "../../../../components/Card/EnrollmentCourseCard";
import useEnrolledCourses from "../../../../hooks/useEnrolledCourses";


const EnrolledCourses = () => {
    const [enrolledCourses] = useEnrolledCourses();
    return (
        <Slide triggerOnce>
        <div className="flex flex-col justify-center mt-4 md:mt-10 lg:mt-20 overflow-x-scroll lg:overflow-x-hidden">
            {
                enrolledCourses.length > 0 ? <div className="w-full lg:w-5/6 lg:mx-auto">
                <div className="  ">
                    <table className="w-full text-left">
                        <thead className="bg-pink-50 border-b-[2px]">
                            <tr>
                                <th className="table-head">

                                </th>
                                <th className="table-head">

                                </th>
                                <th className="table-head">
                                    Course Name
                                </th>
                                <th className="table-head">
                                    Instructor Name
                                </th>
                                <th className="table-head">
                                    Enrollment Date
                                </th>

                                <th className="table-head">
                                    Course Fee
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" border-b-[2px]">
                            {
                                 enrolledCourses.map((course, index) => <EnrollmentCourseCard
                                key={course._id}
                                course={course}
                                index={index}
                            ></EnrollmentCourseCard>) 
                            }
                        </tbody>
                    </table>
                </div>

            </div> : 
            <div className="flex justify-center">
                <h2 className="text-4xl font-bold">Please Enroll Courses</h2>
            </div>

            }
        </div>
    </Slide>
    );
};

export default EnrolledCourses;