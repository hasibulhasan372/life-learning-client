


const CoursesForAllCard = ({ course,handleEnrollCourses,isAdmin, isInstructor}) => {
    const { courseName, instructorName, fee, image, seats, enrolled,} = (course);
    
    return (
        
             <div className={`card card-compact h-[430px] w-72 bg-base-100 shadow-xl mx-auto ${seats === 0 && "bg-red-500"}`}>
                <figure><img src={image} alt="Course Banner" className="w-full " /></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>
                    <p className="font-semibold">Instructor: <span>{instructorName}</span></p>
                    <p className="font-semibold">Available Seats: {seats}</p>
                    <p className="font-semibold">Student: {enrolled}</p>
                    <p className="font-semibold">Course Fee: ${fee}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleEnrollCourses(course)}
                        className="btn btn-primary capitalize" 
                        disabled={isAdmin || isInstructor || seats === 0 } >Enroll Now</button>
                    </div>
                </div>
            </div>
         
    );
};

export default CoursesForAllCard;