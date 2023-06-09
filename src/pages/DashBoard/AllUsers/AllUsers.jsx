import { toast } from "react-hot-toast";
import { makeAdmin } from "../../../api/auth";
import User from "../../../components/Card/User";
import useGetUsers from "../../../hooks/useGetUsers";


const AllUsers = () => {
    const [allUsers, refetch] = useGetUsers();


    const handleMakeAdmin = (id) =>{
        makeAdmin(id)
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success("You are Admin Now")
            }
        })
        .catch(error =>{
            toast.error(error.message)
        })
    }



    return (
        <div className="flex flex-col justify-center mt-4 md:mt-10 lg:mt-20 overflow-x-scroll lg:overflow-x-hidden">
        <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="  ">
                <table className="w-full text-left">
                    <thead className="bg-pink-50 border-b-[2px]">
                        <tr>
                            <th className="table-head">
                                
                            </th>
                            <th className="table-head">
                                User
                            </th>
                            <th className="table-head">
                                Name
                            </th>
                            <th className="table-head">
                                Email
                            </th>
                          
                            <th className="table-head">
                                Make Teacher
                            </th>
                            <th className="table-head">
                                Make Admin
                            </th>
                            <th className="table-head">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" border-b-[2px]">
                        {
                            allUsers.map((user, index) => <User user={user} key={user._id} index={index} handleMakeAdmin={handleMakeAdmin}></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    );
};

export default AllUsers;