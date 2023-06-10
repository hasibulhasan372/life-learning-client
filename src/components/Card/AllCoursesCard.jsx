

const AllCoursesCard = ({ course, index, handleApproved, handleDeny }) => {
    const { courseName, instructorName, instructorEmail, fee, image, status, seats, _id } = (course)
    return (

        <tr className="">
            <td className="px-6 py-4 text-sm text-gray-500">
                {index + 1}
            </td>
            <td className="px-6 py-4 ">
                <img src="" alt={image} className="w-12 md:w-20" />
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                    {courseName}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {instructorName}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {instructorEmail}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {seats}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {fee}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm  capitalize font-semibold text-red-500 ">
                    {status}
                </div>
            </td>
            <td className="px-6 py-4">
                <button onClick={() => handleApproved(_id)}>
                <span className="px-4 py-1 text-sm text-white bg-blue-600 rounded font-bold">Approved</span>
                </button>
            </td>
            <td className="px-6 py-4">
                <button onClick={() => handleDeny(_id)}>
                <span className="px-4 py-1 text-sm text-white bg-blue-600 rounded font-bold">Deny</span>
                </button>
            </td>
            <td className="px-6 py-4">
                <span className="px-4 py-1 text-sm text-white bg-green-400 rounded font-bold">Feedback</span>

            </td>
        </tr>

    );
};

export default AllCoursesCard;