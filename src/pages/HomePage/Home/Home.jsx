import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";



const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner />
            <PopularClasses/>
        </div>
    );
};

export default Home;