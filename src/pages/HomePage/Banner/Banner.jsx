import HeroSlider, { Slide, MenuNav, Overlay } from "hero-slider";


import guitar from '../../../assets/images/banner/guitar.avif'
import cello from '../../../assets/images/banner/violin.avif'
import druams from '../../../assets/images/banner/druams.avif'
import piano from '../../../assets/images/banner/piano.avif'
import violin from '../../../assets/images/banner/cello.avif'



const Banner = () => {
    // TODO:Have some design related work in banner section
    return (
        <HeroSlider
            height={"100vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}

        >
            <Overlay className="hero-slider-overlay" >
                <div className="absolute flex justify-center  top-[45%] text-white  w-full md:right-20">
                    <div className="text-center md:text-left">
                        <p className="border-0 text-4xl  font-bold" >Welcome to Music master</p>
                        <p className="font-serif text-white font-bold">Where words fail,music speak</p>
                    </div>
                </div>

            </Overlay>

            <Slide
                shouldRenderMask
                label="Play guitar"
                background={{
                    backgroundImageSrc: guitar
                }}

            />

            <Slide
                shouldRenderMask
                label="Violin master"
                background={{
                    backgroundImageSrc: violin
                }}
            />

            <Slide
                shouldRenderMask
                label="Piano sweet sount"
                background={{
                    backgroundImageSrc: piano
                }}
            />

            <Slide
                shouldRenderMask
                label="Bit with Druams"
                background={{
                    backgroundImageSrc: druams
                }}

            />
            <Slide
                shouldRenderMask
                label="Heart tauching cello"
                background={{
                    backgroundImageSrc: cello
                }}
            />

            <MenuNav />
        </HeroSlider>
    );
};

export default Banner;