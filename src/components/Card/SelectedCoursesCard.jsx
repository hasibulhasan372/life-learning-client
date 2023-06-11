

const SelectedCoursesCard = ({ course, index, handlePay, handleDelete }) => {
    const { name, instructorName,  fee, image, _id } = (course)
    return (
        <tr className="">
            <td className="px-6 py-4 text-sm text-gray-500">
                {index + 1}
            </td>
            <td className="px-6 py-4 ">
                <img src={image} alt="Course Image" className="w-12 md:w-20" />
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                    {name}
                </div>
            </td>
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {instructorName}
                </div>
            </td>
          
            <td className="px-6 py-4">
                <div className="text-sm text-gray-500">
                    {fee}
                </div>
            </td>
            
            <td className="px-6 py-4">
                <button onClick={() => handlePay(_id)}>
                <span  className="px-4 py-1 text-sm text-white bg-blue-500 hover:bg-blue-800 duration-500 transition rounded font-bold">Pay</span>
                </button>
            </td>
            <td className="px-6 py-4">
                <button onClick={() => handleDelete(_id)} >
                <span 
                className="px-4 py-1 text-sm text-white bg-red-500 rounded font-bold hover:bg-red-800 duration-500 transition"
                >Delete</span>
                </button>
            </td>
            
        </tr>
    );
};

export default SelectedCoursesCard;