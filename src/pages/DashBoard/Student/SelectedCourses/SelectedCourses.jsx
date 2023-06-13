
import useSelectCourse from "../../../../hooks/useSelectCourse";
import SelectedCoursesCard from "../../../../components/Card/SelectedCoursesCard";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";


const SelectedCourses = () => {
    const [selectCourses, refetch] = useSelectCourse();
    const [axiosSecure] = useAxiosSecure()

    //  Delete Selected Course
    const handleDelete = (id) => {
        axiosSecure.delete(`/selectedCourses/${id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    toast.success("Selected Course Deleted Successfully")
                }
            })
    };

    return (
        <div>
            <div className="flex flex-col justify-center mt-4 md:mt-10 lg:mt-20 overflow-x-scroll lg:overflow-x-hidden">
                {
                    selectCourses.length > 0 ?  <div className="w-full lg:w-5/6 lg:mx-auto">
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
                                    selectCourses.map((course, index) => <SelectedCoursesCard
                                        key={course._id}
                                        course={course}
                                        index={index}
                                        handleDelete={handleDelete}
                                    ></SelectedCoursesCard>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>  :
                <div className="flex justify-center">
                <h2 className="text-4xl font-bold">Please Select Courses</h2>
            </div>
                }
            </div>
        </div>
    );

};

export default SelectedCourses;