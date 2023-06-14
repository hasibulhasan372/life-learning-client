
import { toast } from "react-hot-toast";
import AllCoursesCard from "../../../../components/Card/AllCoursesCard";
import useCourses from "../../../../hooks/useCourses"
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import FeedbackModal from "../../../../components/Modal/FeedbackModal";


const AllCourses = () => {
    const [courses, refetch] = useCourses();
    const [axiosSecure] = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false)


    const handleApproved = (id) =>{

        axiosSecure.patch(`/courses/approved/${id}`)
       .then(res => {
        if(res.data.modifiedCount > 0){
                refetch();
                toast.success("The Courses is approved Now ")
        }
       })
    };
    const handleDeny = (id) =>{
       axiosSecure.patch(`/courses/deny/${id}`)
       .then(res => {
        if(res.data.modifiedCount > 0){
                refetch();
                toast.success("The Courses is Denied")
        }
       })
    };
    // TODO: Handle feedback by getting id from this event and match with courses 
    const handleFeedbackModal =()=>{
        setIsOpen(true);
    };
    const closeModal = () =>{
        setIsOpen(false);
    };
   
      

    return (
        <div>
            <div className="flex flex-col justify-center mt-4 md:mt-10 lg:mt-20 overflow-x-scroll lg:overflow-x-hidden">
                <div className="w-full lg:px-8 lg:mx-auto">
                    <div >
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
                                    handleFeedbackModal={handleFeedbackModal}
                                   
                                    ></AllCoursesCard>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <FeedbackModal isOpen={isOpen} closeModal={closeModal}></FeedbackModal>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
