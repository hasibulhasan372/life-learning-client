import useEnrolledCourses from "../../../../hooks/useEnrolledCourses";


const EnrolledCourses = () => {
    const [enrolledCourses] = useEnrolledCourses()
    console.log(enrolledCourses)
    return (
        <div>
        <div className="flex flex-col justify-center mt-4 md:mt-10 lg:mt-20 overflow-x-scroll lg:overflow-x-hidden">
            <div className="w-full lg:w-5/6 lg:mx-auto">
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
                                    Course Fee
                                </th>

                                <th className="table-head">
                                    Payment
                                </th>
                                <th className="table-head">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody className=" border-b-[2px]">
                            {
                                enrolledCourses.map((course, index) => <SelectedCoursesCard
                                    key={course._id}
                                    course={course}
                                    index={index}
                                ></SelectedCoursesCard>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
    );
};

export default EnrolledCourses;