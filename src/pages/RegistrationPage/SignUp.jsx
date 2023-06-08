import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";
import './SignUp.css';
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import googleIcon from '../../assets/images/googleIcon/google_sign.jpg';
const SignUp = () => {
    const [active, setActive] = useState(true);
    useTitle('SignUp');
    const { register, handleSubmit,formState: { errors }, reset } = useForm();
    const showPassword = signal => {
        setActive(signal);
    }

    const onSubmit = data => {
        console.log(data);
        reset();
    };


    return (
        <div className="" >

            <form onSubmit={handleSubmit(onSubmit)} className=" rounded shadow-md p-8 bg-indigo-300" >
                <h1 className="text-2xl font-bold">SignUp please</h1>
                {/* Name field  */}
                <input type="text" name="name" {...register("name", { required: true })} placeholder="Type your name" className="mt-4" />
                {errors.name && <p>Name  is required</p>}

                {/* Email Field */}
                <input type="email" name="email" {...register("email", { required: true })} placeholder="Type your@ email" />
                {errors.email && <p >Email is required</p>}
                {/* Password field  */}
                <div className="relative">
                    <input type={active ? "password" : "text"} name="password"  {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*[!@#$&*]).+$/
                    })} placeholder="Type your@ Password" />
                    <FaEye onClick={() => showPassword(!active)} className="cursor-pointer absolute top-1/3 right-5" />
                </div>

                {errors.password?.type === 'required' && <p >Password is required</p>}
                {errors.password?.type === 'minLength' && <p >Password is less then 6 characters </p>}
                {errors.password?.type === 'pattern' && <p >Password mush have one Uppercase and one special  symbol</p>}
                {/* confirm password  */}


                <div className="flex mt-4  gap-4 p-2 items-center">
                    <input className="bg-indigo-900 mt-[6px] cursor-pointer text-white w-4/12  font-bold" type="submit" />
                    <img src={googleIcon} className="cursor-pointer rounded h-[40px] w-full" alt="" />
                </div>
            </form>
        </div>
    );
};

export default SignUp;