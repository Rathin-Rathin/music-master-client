import { useContext } from 'react';
import googleIcon from '../../../assets/images/googleIcon/google_sign.jpg'
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useTosta from '../../../hooks/useTosta';

const GoogleLogin = () => {
    const [notify] = useTosta();
    const { googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                const saveUser = { name: user.displayName, email: user.email, photo: user.photoURL }
                fetch(`${import.meta.env.VITE_url}/users`, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        notify('Login successful!')

                    })

                navigate(from, { replace: true })

            })
            .catch(error => console.log(error.message));
    }
    return (
        <div>
            <img onClick={handleGoogleLogin} src={googleIcon} className="cursor-pointer rounded h-[40px] w-full" alt="" />
            <ToastContainer />
        </div>
    );
};

export default GoogleLogin;