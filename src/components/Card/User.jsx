

const User = ({user, index}) => {
    const {name, photo, role, email} = user
    return (
        <tr className="">
        <td className="px-6 py-4 text-sm text-gray-500">
            {index + 1}
        </td>
        <td className="px-6 py-4 ">
           <img src={photo} alt="User image" className="w-12 md:w-20" />
        </td>
        <td className="px-6 py-4">
            <div className="text-sm text-gray-900">
              {name}
            </div>
        </td>
        <td className="px-6 py-4">
            <div className="text-sm text-gray-500">{email}</div>
        </td>
        <td className="px-6 py-4">
            <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">Teacher</a>
        </td>
        <td className="px-6 py-4">
            <a href="#" className="px-4 py-1 text-sm text-white bg-blue-400 rounded">Admin</a>
        </td>
        <td className="px-6 py-4">
            <a href="#" className="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</a>
        </td>
    </tr>
      
    );
};

export default User;