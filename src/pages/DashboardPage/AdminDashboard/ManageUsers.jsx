
import useUser from "../../../hooks/useUser";


const ManageUsers = () => {

    const [allUsers, refetch] = useUser();
    const makeAdmin = user => {

        fetch(`${import.meta.env.VITE_url}/makeAdmin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Make admin successful');
                refetch();
                console.log(user);
            })
    }
    const makeInstructor = user => {
        fetch(`${import.meta.env.VITE_url}/makeInstructor/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Make An instructor successful');
                refetch();
                console.log(user);
            })
    }
    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 font-bold text-white ">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((user, i) => <tr key={user._id} >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="mask mask-square rounded w-12 h-12">
                                        <img src={user?.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>

                                </td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user.role ? user.role : 'Student'}</td>
                                <th className="flex gap-2 items-center justify-center">
                                    <button onClick={() => makeAdmin(user)} className={user.role === "admin" ? "btn  btn-xs btn-disabled" : "btn btn-success btn-xs"}>Make Admin</button>

                                    <button onClick={() => makeInstructor(user)} className={user.role === "admin" || user.role === "instructor" ? "btn  btn-xs btn-disabled" : "btn btn-primary btn-xs"}>Make Ins..</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;