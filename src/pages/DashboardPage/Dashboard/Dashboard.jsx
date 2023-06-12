
import useTitle from "../../../hooks/useTitle";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import InstructorDashboard from "../InstructorDashboard/InstructorDashboard";
import StudentDashboard from "../StudentDashboard/StudentDashboard";



const Dashboard = () => {
    useTitle('Dashboard');
    let dashboardComponent;
    const role = 'instructor';
    
        if (role === 'Admin') {
            dashboardComponent = <AdminDashboard />;
        } else if (role === 'instructor') {
            dashboardComponent = <InstructorDashboard />;
        } else if (role === 'Student') {
            dashboardComponent = <StudentDashboard />;
        }
   
    return (
        
        <div className="">
            {dashboardComponent}
        </div>
    );
};

export default Dashboard;