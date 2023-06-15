import { useQuery } from "@tanstack/react-query";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PopularClass from "./PopularClass";

const PopularClasses = () => {
    const { data } = useQuery({
        queryKey: ['classesData',],
        queryFn: () =>
            fetch(`${import.meta.env.VITE_url}/popularAllClass`).then(
                (res) => res.json(),

            ),
    })
    let popularCourses;
    if(data && data.length>7){
        popularCourses = data?.slice(0, 6);
    }else{ popularCourses = data}
    return (
        <Container
        autoPlay={true}
        interval={1000}
        >
            <SectionTitle title="Popular Classes" />
            <Carousel className="">

                {
                    popularCourses?.map(course => <PopularClass
                        key={course._id}
                        course={course}
                        className=""
                       
                    >
                       
                    </PopularClass>)
                }
            </Carousel>

        </Container>


    );

};



export default PopularClasses;