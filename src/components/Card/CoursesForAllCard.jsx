
import useVerifyInstructor from "../../hooks/useVerifyInstructor";
import useAdmin from "../../hooks/useAdmin";

const CoursesForAllCard = ({ course,handleEnrollCourses}) => {
    const { courseName, instructorName, fee, image, seats} = (course);
    const [isInstructor] =useVerifyInstructor();
    const [isAdmin] = useAdmin();
    return (
            <div className="card card-compact w-72 bg-base-100 shadow-xl mx-auto">
                <figure><img src={image} alt="Course Banner" className="w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>
                    <p className="font-semibold">Instructor: <span>{instructorName}</span></p>
                    <p className="font-semibold">Available Seats: {seats}</p>
                    <p className="font-semibold">Course Fee: ${fee}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleEnrollCourses(course)}
                        className="btn btn-primary capitalize" 
                        disabled={isAdmin || isInstructor } >Enrolled Now</button>
                    </div>
                </div>
            </div>
    );
};

export default CoursesForAllCard;