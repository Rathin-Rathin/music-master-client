import { Link } from "react-router-dom";


const PopularClass = ({ course }) => {
    return (
        <div className="p-6 bg-black bg-opacity-20">
            <div className="p-6">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-full">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={course?.img} alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        {/* Class name */}
                        <p className=" text-2xl mb-2 font-bold text-orange-600">{course?.name}</p>
                        {/* Instructor name  */}
                        <p className="mb-1 text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className=" ">Instructor:- </span>{course?.userName}</p>
                        {/* Available sits  */}
                        <p className="mb-3 text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="">Available sets :- </span>{course?.availableSeats}</p>
                        <p className="mb-3 text-xl italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="">Students :- </span>{course?.stents}</p>
                        {/* Price  */}
                        <p className="mb-3 text-xl font-bold text-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <span className="">Price :- $ </span>{course?.price}</p>
                        <Link className="font-bold text-md bg-opacity-20 text-white border p-1 px-2 hover:bg-orange-400 hover:border-0  border-white  mx-2">See more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClass;