import useTitle from "../../hooks/useTitle";
import bg from '../../assets/images/section_banner/classes.avif'
import BannerBg from "../../components/BannerBg";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Classes = () => {
    useTitle('classes');
    const [allClass, setAllClass] = useState(null);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_url}/classes`)
            .then(res => res.json())
            .then(data => setAllClass(data))

    }, [])
    return (
        <div>

            <BannerBg banner={bg} />
            <Container>
                <SectionTitle title='All Classes' />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        allClass?.map(data => <Card
                            key={data._id}
                            data={data}
                        />)
                    }
                </div>
            </Container>


        </div>


    );
};

export default Classes;