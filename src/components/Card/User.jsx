import {MdAdminPanelSettings} from "react-icons/md"
import {GiTeacher} from "react-icons/gi"

const User = ({user, index, handleMakeAdmin, handleMakeTeacher}) => {
    const {name, photo, role, email, _id} = user;
    // TODO: Use Conditional of role 
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
        <button onClick={()=>handleMakeTeacher(_id)} disabled={role==="admin"}>
            {user && role === "teacher" ?
             <span className="font-bold flex items-center gap-1 text-red-600"><GiTeacher className="text-lg"></GiTeacher>Teacher</span> :
             <span  className= "px-4 py-1 text-sm text-white bg-blue-600 rounded font-bold">Teacher</span> 
            }
            </button>
        </td>
        <td className="px-6 py-4">
            <button onClick={()=>handleMakeAdmin(_id)} disabled={role==="teacher"}>
            {user && role === "admin" ?
             <span className="font-bold flex items-center gap-1 text-red-600"><MdAdminPanelSettings className="text-lg"></MdAdminPanelSettings>  Admin</span> :
             <span  className="px-4 py-1 text-sm text-white bg-blue-600 rounded font-bold">Admin</span> }
            </button>
        </td>
        <td className="px-6 py-4">
            <a href="#" className="px-4 py-1 text-sm text-white bg-red-400 rounded font-bold">Delete</a>
        </td>
    </tr>
      
    );
};

export default User;