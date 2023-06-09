import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";



const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner/>
        </div>
    );
};

export default Home;