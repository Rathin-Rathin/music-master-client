import { ToastContainer } from "react-toastify";
import AddedClasses from "./AddedClasses";
import useClasses from "../../../hooks/useClasses";
const InstructorClasses = () => {
    const [insClasses,refetch] = useClasses();
    const handleLoading = () => {
        refetch()
    }
    return (
        <div>
            <div className="mt-6 p-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    insClasses?.map(data => <AddedClasses
                        key={data._id}
                        data={data}
                        handleLoading={handleLoading}
                    />)


                }

            </div >
            <ToastContainer />
        </div>
    )
};

export default InstructorClasses;