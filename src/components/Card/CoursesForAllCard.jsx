import { useEffect, useState } from "react";
import useGetUsers from "../../hooks/useGetUsers";
import useAuth from "../../hooks/useAuth";



const CoursesForAllCard = ({ course }) => {
    const { courseName, instructorName, fee, image, seats} = (course);
    const [visitedUser, setVisitedUser] = useState(null)
    const { user } = useAuth();
    const [allUsers] = useGetUsers();

    useEffect(() =>{
        const getUser = allUsers.find(u => u?.email === user?.email)
        setVisitedUser(getUser)
    },[allUsers, user])
    
    return (
            <div className="card card-compact w-72 bg-base-100 shadow-xl mx-auto">
                <figure><img src={image} alt="Shoes" className="w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{courseName}</h2>
                    <p className="font-semibold">Instructor: <span>{instructorName}</span></p>
                    <p className="font-semibold">Available Seats: {seats}</p>
                    <p className="font-semibold">Course Fee: ${fee}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary capitalize" disabled={visitedUser?.role === "admin" || visitedUser?.role === "instructor"} >Enrolled Now</button>
                    </div>
                </div>
            </div>
    );
};

export default CoursesForAllCard;