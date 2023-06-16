
import Swal from "sweetalert2";
import useTosta from "../../../../hooks/useTosta";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import useMyClasses from "../../../../hooks/useMyClasses";


const SelectedClasses = () => {
    const [notify] = useTosta();
    const [myClasses,refetch] = useMyClasses([]);
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

                                    <Link to={`/dashboard/payment/${myClass?._id}`} className="btn bg-green-400 font-bold ">Pay</Link>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
                <ToastContainer/>
            </div>
        </div>
    );
};

export default SelectedClasses;