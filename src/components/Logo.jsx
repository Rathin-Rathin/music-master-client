import logo from '../assets/images/logo/logo1.png';

const Logo = () => {
    return (
        <div>
            <img src={logo} className="h-[50px] hidden md:block" alt="" />
        </div>
    );
};

export default Logo;