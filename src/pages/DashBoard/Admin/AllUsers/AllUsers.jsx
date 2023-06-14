import { toast } from "react-hot-toast";
import User from "../../../../components/Card/User";
import useGetUsers from "../../../../hooks/useGetUsers";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Slide } from "react-awesome-reveal";


const AllUsers = () => {
    const [allUsers, refetch] = useGetUsers();
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()


    const handleMakeAdmin = (id) => {

        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success(`User is Admin Now`)
                }
            })
    }
    const handleInstructor = (id) => {

        axiosSecure.patch(`/users/instructor/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success(`User is Instructor now`)
                }
            })
    };

    const handleDeleteUser = (id) => {
        axiosSecure.delete(`/users/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    toast.success(`User is deleted`)
                }
            })
    };



    return (
        <Slide>
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
                                        Make Instructor
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
                                {loading ? <span className="loading loading-bars loading-lg absolute mx-auto"></span> :

                                    allUsers.map((user, index) => <User
                                        user={user}
                                        key={user._id}
                                        index={index}
                                        handleMakeAdmin={handleMakeAdmin}
                                        handleMakeInstructor={handleInstructor}
                                        handleDeleteUser={handleDeleteUser}
                                    ></User>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Slide>

    );
};

export default AllUsers;