
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
const imgHostingKey = import.meta.env.VITE_image_api_token;

const AddAClass = () => {
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors },reset } = useForm();

    const onSubmit = (data) => {
        const name = data.courseName;
        const availableSeats = parseInt(data.availableSeats);
        const userEmail = data.availableSeats;
        const userName = data.instructorName;
        const price = parseInt(data.price);
        const status = parseInt(data.status);
        const userPhoto = user.photoURL;
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(resImg => {
                if (resImg.success) {
                    const img = resImg.data.display_url;
                    const courseInfo = { name, availableSeats, userEmail, userName, price, status, userPhoto, img };

                    fetch(`${import.meta.env.VITE_url}/classes`, {
                        method: 'POST',
                        headers: { 'Content-type': 'application/json' },
                        body: JSON.stringify(courseInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                Swal.fire({
                                    icon: 'success',
                                    title: `Wow ${user ?.displayName}`,
                                    text: 'Class update successful',
                                })
                            }
                            reset();
                    })
                }
            })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" m-4 shadow-md p-8">
            <div className=" mb-4">
                <label htmlFor="courseName" className="text-black text-lg font-medium mb-2">
                    Course Name
                </label>
                <input
                    type="text"
                    id="courseName"

                    {...register('courseName', { required: 'Course Name is required' })}
                    className=" border-black p-2 rounded-md w-full"
                />
                {errors.courseName && (
                    <span className="text-red-500">{errors.courseName.message}</span>
                )}
            </div>



            <div className='flex gap-4'>
                <div className="mb-4 w-full">
                    <label htmlFor="imageUpload" className="block text-black text-lg font-medium mb-2">
                        Choose a File for Image
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        {...register('image', { required: 'Image is required' })}
                        className="border border-black p-2 rounded-md"
                    />
                    {errors.imageUpload && (
                        <span className="text-red-500">{errors.imageUpload.message}</span>
                    )}
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="availableSeats" className="block text-black text-lg font-medium mb-2">
                        Available Seats
                    </label>
                    <input
                        type="text"
                        id="availableSeats"
                        {...register('availableSeats', { required: 'Available Seats is required' })}
                        className="border border-black p-2 rounded-md w-full"
                    />
                    {errors.availableSeats && (
                        <span className="text-red-500">{errors.availableSeats.message}</span>
                    )}
                </div>

                <div className="mb-4 w-full">
                    <label htmlFor="price" className="block text-black text-lg font-medium mb-2">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        {...register('price', { required: 'Price is required' })}
                        className="border border-black p-2 rounded-md w-full"
                    />
                    {errors.price && (
                        <span className="text-red-500">{errors.price.message}</span>
                    )}
                </div>
            </div>
            <div className='flex gap-4 '>
                <div className="w-full mb-4">
                    <label htmlFor="courseName" className="text-black text-lg font-medium mb-2">
                        Instructor Name
                    </label>

                    <input className='border border-black  p-2 rounded-md w-full' value={user?.displayName} {...register("instructorName", { required: true })} />
                    {errors.courseName && (
                        <span className="text-red-500">{errors.courseName.message}</span>
                    )}
                </div>

                <div className="w-full mb-4">
                    <label htmlFor="courseName" className="text-black text-lg font-medium mb-2">
                        Instructor email
                    </label>
                    <input className='border border-black  p-2 rounded-md w-full' value={user?.email} {...register("instructorEmail", { required: true })} />
                    {errors.courseName && (
                        <span className="text-red-500">{errors.courseName.message}</span>
                    )}
                </div>
            </div>


            <div className="mb-4 hidden">
                <label htmlFor="status" className="block text-black text-lg font-medium mb-2">
                    Status
                </label>
                <input
                    type='number'
                    id="status"
                    value="0"
                    {...register('status', { required: 'Status is required' })}
                    className="border  border-black p-2 rounded-md w-full"
                >

                </input>

            </div>

            <button
                type="submit"
                className="cursor-pointer bg-orange-500 text-white p-2 shadow-lg rounded hover:bg-orange-400  font-bold"
            >
                Add class
            </button>
        </form>
    );
};



export default AddAClass;