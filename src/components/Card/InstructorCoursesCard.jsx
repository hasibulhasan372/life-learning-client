

const InstructorCoursesCard = ({ course, index,handleDelete }) => {
    const { courseName, instructorName, instructorEmail, fee, image, status, seats, enrolled,_id } = (course);
    return (
        <tr className="">
            <td className="table-body text-sm text-gray-500">
                {index + 1}
            </td>
            <td className="table-body ">
                <img src={image} alt="Courses Image" className="w-12 md:w-20" />
            </td>
            <td className="table-body">
                <div className="text-sm text-gray-900">
                    {courseName}
                </div>
            </td>
            <td className="table-body">
                <div className="text-sm text-gray-500">
                    {instructorName}
                </div>
            </td>
            <td className="table-body">
                <div className="text-sm text-gray-500">
                    {instructorEmail}
                </div>
            </td>
            <td className="table-body">
                <div className="text-sm text-gray-500">
                    {seats}
                </div>
            </td>
            <td className="table-body">
                <div className="text-sm text-gray-500">
                    {fee}
                </div>
            </td>
            <td className="table-body">
                <div className="text-sm text-gray-500">
                    {enrolled}
                </div>
            </td>
            <td className="table-body">
                <div className={`${status === "approved" && "text-sm  capitalize font-semibold text-green-500 " || status === "denied" && "text-sm  capitalize font-semibold text-red-500 " || status === "pending" && "text-sm  capitalize font-semibold text-purple-500 "}`}>
                    {status}
                </div>
            </td>

            <td className="table-body">
                <div className="text-sm text-gray-500">
                    Need Feed Back
                </div>

            </td>
            <td className="table-body">
                <span className="px-4 py-1 text-sm text-white bg-green-400 rounded font-bold">Update</span>
            </td>
            <td className="table-body">
                <button onClick={()=>handleDelete(_id)}>
                    <span className="px-4 py-1 text-sm text-white bg-green-400 rounded font-bold">Delete</span>
                </button>
            </td>
        </tr>
    );
};

export default InstructorCoursesCard;