import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import React from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const customStyles = {
    content: {
        width: '30%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'gray',
    },
};
Modal.setAppElement(document.getElementById('root'));

const AddedClasses = ({data,handleLoading}) => {
    const notify = () => toast("Wow Updated class!");
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // let subtitle;
    function afterOpenModal() {
        //  subtitle.style.color = '#fffff';
    }
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    const onSubmit = updatedClass => {
        const { courseName, img, availableSeats, price, } = updatedClass;
        const updateData = { courseName, img, availableSeats: parseInt(availableSeats), price };


        fetch(`${import.meta.env.VITE_url}/updateInsData/${data._id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    notify();
                    handleLoading();
                }
            })

    }

    return (
        <>
            <div className="group  rounded relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl">
                <div className="h-80 w-80">
                    <img className="h-80 w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={data.img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    {/* Class name */}
                    <p className="border-b-2 pb-2 border-white text-xl mb-2 font-bold text-white">{data.name}</p>
                    {/* Status pending */}
                    {data.status === 'pending' && <p className="mb-1 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="font-bold ">Status:- </span><span className="text-orange-600 fond-bold">{data?.status}...</span></p>}

                    {/* Status Approved */}
                    {data.status === 'approved' && <p className="mb-1 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="font-bold ">Status:- </span><span className="text-green-600 fond-bold">{data?.status}</span></p>}
                    {/* Status Denied */}
                    {data.status === 'denied' && <p className="mb-1 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="font-bold ">Status:- </span><span className="text-red-600 fond-bold">{data?.status}</span></p>}

                    {/* Available sits  */}
                    <p className="mb-3 text-md italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="font-bold">Students :- </span>
                        {data?.enrolled || 0}
                    </p>
                    {/* Price  */}
                    <p className="mb-3 text-xl font-bold text-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="">Price :- $ </span>{data.price}</p>
                    <div className="flex ">
                        {/* TO:DO have to implement feddback modal after update admin dashboard   */}
                        <Link className="font-bold text-md bg-orange-400 bg-opacity-50 text-white p-1 px-2 hover:bg-orange-400 hover:border-0  border-white  mx-2">Feedback</Link>
                        {/* Update */}
                        <Link onClick={openModal} className="font-bold text-md bg-opacity-50 text-white bg-green-600 p-1 px-2 hover:bg-green-400 hover:border-0  border-white  mx-2">Update</Link>
                    </div>
                </div>

            </div>

            {/* Modal For Update */}
            <Modal

                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >

                <form onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" >
                        <input className='hidden' defaultValue={data?._id} {...register("id", { required: true })} />
                        <div className="w-full">
                            <label>Course Name</label>
                            <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded ' defaultValue={data?.name} {...register("courseName", { required: true })} />
                        </div>

                        <div className="w-full">
                            <label>Course price</label>
                            <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded'
                                defaultValue={data?.price}

                                {...register("price", { required: true })} />
                        </div>
                        <div className="w-full">
                            <label>Total seats</label>
                            <input className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded'
                                defaultValue={data?.availableSeats}

                                {...register("availableSeats", { required: true })} />
                        </div>

                        <div className="w-full">
                            <label>Course photo url</label>
                            <input type="photo"
                                className='border customShadow w-full py-2 ps-2 text-md font-serif my-2 rounded'
                                defaultValue={data?.img}
                                {...register("img", { required: true })}
                            />
                        </div>
                    </div>


                    <div className='flex mt-6 justify-between font-bold gap-6 items-center'>
                        <button className=" bg-orange-400 hover:bg-orange-600 px-4 rounded  p-2 text-white border-0" onClick={closeModal}>close</button>

                        <input onClick={notify} className=' bg-orange-400 hover:bg-orange-600 px-4 rounded p-2 text-white border-0 ' type="submit" value='update' />


                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}
                </form>


            </Modal>
        </ >
    );
};

export default AddedClasses;