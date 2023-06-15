import { useNavigate } from "react-router-dom";


const NoEntry = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home');
    }
    return (
        <div className="flex items-center justify-center w-full h-[100vh]">
            <div className="text-center">
                <p className="text-4xl font-bold text-red-300 text-center">Data not found!</p>
                <button className="bg-red-300 rounded px-4 py-2 font-bold mt-4" onClick={goHome}>Home</button>
            </div>
        </div>
    );
};

export default NoEntry;