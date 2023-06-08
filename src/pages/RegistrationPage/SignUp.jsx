import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";
import './SignUp.css';
import { FaEye } from "react-icons/fa";
import {useState } from "react";
import googleIcon from '../../assets/images/googleIcon/google_sign.jpg'
import lock from '../../assets/images/icon/lock.gif';
import Background from "../../components/Background";
import { NavLink } from "react-router-dom";
const SignUp = () => {
    useTitle('SignUp');
    const [active, setActive] = useState(true);
    const { register, handleSubmit,watch, formState: { errors }, reset } = useForm({node:'onTouched'});
    const showPassword = signal => {
        setActive(signal);
    }

    const onSubmit = data => {
        console.log(data);
        reset();
    };
    const password = watch('password');
    
   
    return (
        <Background>
            <div className="flex items-center justify-center" >

                <form onSubmit={handleSubmit(onSubmit)} className="shadow-md border-0 md:border  rounded  p-8 " >
                    <div className="flex border-b-2 pb-2 mb-4 items-center justify-evenly">
                        <img className="w-12 h-12 rounded" src={lock} alt="" />
                        <h1 className="text-white border-0 text-4xl font-bold">SignUp please</h1>
                    </div>
                    {/* Name field  */}
                    <label>Name</label>
                    <input type="text" name="name"
                     {...register("name", { required: true })} placeholder="Type your name" />
                    {errors.name && <p>Name  is required</p>}
                    {/* PhotoUrl  */}
                    <label>Photo Url</label>
                    <input type="photo" name="photo" {...register("photo", { required: true })} placeholder="Type your photo url" className="" />
                    {errors.photo && <p>Photo  is required</p>}
                    {/* Email Field */}
                    <label>Email</label>
                    <input type="email" name="email" {...register("email", { required: true })} placeholder="Type your@ email" />
                    {errors.email && <p >Email is required</p>}
                    {/* Password field  */}
                    <label>Password</label>
                    <div className="relative">
                        <input type={active ? "password" : "text"}           name="password"
                           {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[A-Z])(?=.*[!@#$&*]).+$/
                        })} placeholder="Type your  Password" />
                        <FaEye onClick={() => showPassword(!active)} className="cursor-pointer absolute top-1/3 right-5" />
                    </div>

                    {errors.password?.type === 'required' && <p >Password is required</p>}
                    {errors.password?.type === 'minLength' && <p >Password is less then 6 characters </p>}
                    {errors.password?.type === 'pattern' && <p >Password mush have one Uppercase and one special  symbol</p>}
                    {/* confirm password  */}
                    <label>Confirm password</label>
                    <input
                        name="confirm_password"
                        type="password"
                        placeholder="Above password here"
                        {...register("confirm_password", {
                            required: 'confirm_password is required',
                            validate: (value) =>
                                value === password || "The Confirm password do not match" 
                            
                        })}
                    />
                    {errors.confirm_password?.type === 'required' && <p >Password is required</p>}
                    {errors.confirm_password?.type === 'validate' && <p >Password not matched</p>}

                    <div className="flex mt-4  gap-4 p-2 items-center">
                        <input className=" mt-[6px] cursor-pointer text-orange-500 w-4/12 border-white  font-bold" type="submit" value="Sign up"/>
                        <img src={googleIcon} className="cursor-pointer rounded h-[40px] w-full" alt="" />
                    </div>
                    <span className="font-bold px-2 text-white">Already SignUp?  <NavLink className='text-orange-500' to='/login'>Login</NavLink></span>
                </form>
            </div>
        </Background>
    );
};

export default SignUp;