import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTosta from "../../../../hooks/useTosta";


const SelectedClasses = () => {
    const [notify] = useTosta();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: myClasses,refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/selectClass/${user?.email}`)
            return res.data;
        }
    })
    //Class delete
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_url}/classDelete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            notify('Deleted successful!');
                            refetch();
                            
                        }
                    })
            }
        })
    }
    return (
        <div className="">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-orange-400 font-bold text-lg text-white ">
                        <tr>
                            <th>#</th>
                            <th>Photo</th>
                            <th>Course name</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-md font-bold">
                        {
                            myClasses?.map((myClass, i) => <tr key={myClass._id} >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="mask mask-square rounded w-12 h-12">
                                        <img src={myClass?.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>

                                </td>
                                <td>{myClass?.courseName}</td>
                                <td> $ {myClass.price}</td>
                                <th className="flex gap-2 items-center justify-center">
                                    <button onClick={() => handleDelete(myClass._id)} className="btn bg-red-400 font-bold ">Delete</button>

                                    <button className="btn bg-green-400 font-bold ">Pay</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;