
import { toast } from "react-hot-toast";
import AllCoursesCard from "../../../../components/Card/AllCoursesCard";
import useCourses from "../../../../hooks/useCourses"


const AllCourses = () => {
    const [courses, refetch] = useCourses();


    const handleApproved = (id) =>{
       fetch (`${import.meta.env.VITE_LOCAL_HOST}/courses/approved/${id}`,{
            method: "PATCH"
        })
       .then(res => res.json())
       .then(data => {
        if(data.modifiedCount > 0){
                refetch();
                toast.success("The Courses is approved Now ")
        }
       })
    };
    const handleDeny = (id) =>{
       fetch (`${import.meta.env.VITE_LOCAL_HOST}/courses/deny/${id}`,{
            method: "PATCH"
        })
       .then(res => res.json())
       .then(data => {
        if(data.modifiedCount > 0){
                refetch();
                toast.success("The Courses is Denied")
        }
       })
    };

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
                                        Status
                                    </th>
                                    <th className="table-head">
                                        Approved
                                    </th>
                                    <th className="table-head">
                                        Deny
                                    </th>
                                    <th className="table-head">
                                        Feedback
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" border-b-[2px]">
                                {
                                    courses.map((course, index) => <AllCoursesCard 
                                    key={course._id}
                                    course={course} 
                                    index={index}
                                    handleApproved={handleApproved}
                                    handleDeny={handleDeny}
                                    ></AllCoursesCard>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
