import useTitle from "../../hooks/useTitle";
import bg from '../../assets/images/section_banner/classes.avif'
import BannerBg from "../../components/BannerBg";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import Card from "../../components/Card";
import { useQuery } from '@tanstack/react-query'
import Loader from "../../components/Loader";
const Classes = () => {
    useTitle('classes');
    //Tanstack query
    const { isLoading,data } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_url}/classes`)
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json()
        },
    })
    if (isLoading) {
        <Loader/>
    }
    return (
        <div>

            <BannerBg banner={bg} />
            <Container>
                <SectionTitle title='All Classes' />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        data?.map(course => <Card
                            key={course._id}
                            course={course}
                        />)
                    }
                </div>
            </Container>


        </div>


    );
};

export default Classes;