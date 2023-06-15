
import { useContext } from "react";
import useTitle from "../../../hooks/useTitle";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import InstructorDashboard from "../InstructorDashboard/InstructorDashboard";
import StudentDashboard from "../StudentDashboard/StudentDashboard";
import { AuthContext } from "../../../providers/AuthProvider";
import useUser from "../../../hooks/useUser";
import NoEntry from "../../../components/NoEntry";



const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [allUsers] = useUser();
    const loggedUser = allUsers?.find(data => data.email === user.email);
    useTitle('Dashboard');
    let dashboardComponent;



    if (loggedUser?.role === 'admin') {
        dashboardComponent = <AdminDashboard />;
    } else if (loggedUser?.role === 'instructor') {
        dashboardComponent = <InstructorDashboard />;
    } else if (loggedUser?.role === 'student') {
        dashboardComponent = <StudentDashboard />;
    } else {
        dashboardComponent=<NoEntry/>
    }



    return (

        <div className="">
            {dashboardComponent}
        </div>
    );
};

export default Dashboard;