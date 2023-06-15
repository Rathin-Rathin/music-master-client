import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClasses, refetch, } = useQuery(['allClasses'], async () => {
        const res = await axiosSecure.get(`/allClasses`)
        return res.data;
    })
    const handleApprove = id => {
        fetch(`${import.meta.env.VITE_url}/approved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Approved success')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Approved success !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
            })
    }
    const handleDeny = id => {
        fetch(`${import.meta.env.VITE_url}/deny/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Classes deny !')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Deny success !',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
            })
    }
    const handleFeedback = () => {
    
    }
    return (
        <div className="grid p-2 grid-cols-1 md:grid-cols-3  gap-4  shadow-md">

            {
                allClasses?.map(data => <div className="card px-2 mt-4 w-full  shadow-xl"
                    key={data._id}
                    data={data} >

                    <figure className="">
                        <img src={data?.img} alt="loading" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center ">
                        <div className="mb-9 text-start">
                            <h2 className="text-xl text-orange-600 font-semibold mb-3">{data?.name}</h2>
                            <p className="mb-2"><span className="font-bold  text-indigo-700 text-md">Instructor : </span>{data?.userName}</p>

                            <p className="mb-2"><span className="font-bold  text-indigo-700 text-md">Status : </span>{data?.status}</p>
                            <p className="mb-2"><span className="font-bold  text-indigo-700 text-md">Available seats : </span>{data?.availableSeats}</p>
                            <p className="mb-2 font-bold text-orange-500"><span className="font-bold  text-indigo-700 text-md">Price : </span>$ {data?.price}</p>
                        </div>

                        <div className="flex absolute bottom-4">
                            <div className="w-full flex  gap-2">
                                <button onClick={() => handleDeny(data._id)} className={data?.status === "approved" || data?.status === 'deny' ? "btn bg-red-400 btn-disabled text-[10px] font-bold btn-sm" : "btn bg-red-400 text-[10px] font-bold btn-sm"}>Deny</button>
                                <button onClick={() => handleApprove(data._id)} className={data?.status == 'deny' ? "btn text-[10px] bg-green-400 btn-disabled font-bold btn-sm" : "btn text-[10px] bg-green-400 font-bold btn-sm"}>Approve</button>
                {/* ToDo:have to implemented feedback */}
                                <button onClick={() =>handleFeedback()} className={data?.status === "approved" ? "btn btn-disabled  text-[10px] bg-blue-400 font-bold btn-sm" : "btn  text-[10px] bg-blue-400 font-bold btn-sm"}> Feedback</button>

                            </div>
                        </div>

                    </div>

                </div>)

            }


        </div >
    );
};

export default ManageClasses;