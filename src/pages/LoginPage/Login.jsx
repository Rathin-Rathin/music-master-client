import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Background from "../../components/Background";
import useTitle from "../../hooks/useTitle";
import lock from '../../assets/images/icon/lock.gif';
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLogin from "../SharedPages/GoogleLogin/GoogleLogin";
 import { ToastContainer} from "react-toastify";
import useTosta from "../../hooks/useTosta";

const Login = () => {
    useTitle('Login');
    const [notify] = useTosta();
    const { userLogIn} = useContext(AuthContext);
    const [active, setActive] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ node: 'onTouched' });
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        userLogIn(email, password)
            .then(result => {
                console.log(result);
                notify('Login Success!');
                navigate(from,{replace:true})
                reset();
            })
            .catch(error => {
                setError(error);
        })
        
    };
    //Show and hide password
    const showPassword = signal => {
        setActive(signal);
    }
    return (
        <Background>
            <div className="flex items-center justify-center" >
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-md border-0 md:border  rounded  p-8 " >
                    <div className="flex border-b-2 pb-2 mb-4 items-center justify-evenly">
                        <img className="w-12 h-12 rounded" src={lock} alt="" />
                        <h1 className="text-white border-0 text-4xl font-bold">Login please</h1>
                    </div>

                    {/* Email Field */}
                    <label>Email</label>
                    <input type="email" name="email" {...register("email", { required: true })} placeholder="Type your@ email" />
                    {errors.email && <p >Email is required</p>}
                    {/* Password field  */}
                    <label>Password</label>
                    <div className="relative">
                        <input type={active ? "password" : "text"} name="password"
                            {...register("password", {
                                required: true,
                            })} placeholder="Type your  Password" />
                        <FaEye onClick={() => showPassword(!active)} className="cursor-pointer absolute top-1/3 right-5" />
                    </div>

                    {errors.password?.type === 'required' && <p >Password is required</p>}
                    {error && <p >{error.message}</p>}

                    <div className="flex mt-4  gap-4 p-2 items-center">
                        <input className=" mt-[6px] cursor-pointer text-orange-500 w-4/12 border-white  font-bold" type="submit" value='Login' />
                        <GoogleLogin/>
                    </div>
                    <span className="font-bold px-2 text-white">New in Music-master?  <NavLink className='text-orange-500' to='/signUp'>SignUp</NavLink></span>
                </form>
                <ToastContainer />
            </div>
        </Background>
    );
};

export default Login;