import React from 'react'
import SectionButton from '../shared/buttons/section-title-button/sectionbutton'
import Typography from '../Typography/typography'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./works.module.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import Image from 'next/image';

const Works = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    let works = [
        { id: 1, source1: '/img/works/1-1.jpg', source2: '/img/works/1-2.jpg', width: 330, height: 270, alt: 'Стоматология клиника' },
        { id: 2, source1: '/img/works/2-1.jpg', source2: '/img/works/2-2.jpg', width: 330, height: 270, alt: 'Стоматология клиника' },
        { id: 3, source1: '/img/works/3-1.jpg', source2: '/img/works/3-2.jpg', width: 330, height: 270, alt: 'Стоматология клиника' },
        { id: 4, source1: '/img/works/4-1.jpg', source2: '/img/works/4-2.jpg', width: 330, height: 270, alt: 'Стоматология клиника' },
        { id: 5, source1: '/img/works/5-1.jpg', source2: '/img/works/5-2.jpg', width: 330, height: 270, alt: 'Стоматология клиника' },
    ]

    return (
        <section className='works' id='toSection4'>
            <div className='doctor__section-block'>
                <div className='doctor__section-title'>
                    <Typography name={'Работы'} />
                    <SectionButton name={'все работы'} />
                </div>

                <div className='doctors__buttons'>
                    <div className="doctors__button-prev" ref={navigationPrevRef}>
                        <GrFormPrevious />
                    </div>
                    <div className="doctors__button-next" ref={navigationNextRef}>
                        <GrFormNext />
                    </div>
                </div>
            </div>

            <Swiper
                className="mySwiperworks swiper-h"
                centeredSlides={false}
                spaceBetween={25}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Autoplay, Navigation, Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    360: {
                        slidesPerView: 1,
                    },
                    460: {
                        slidesPerView: 1,
                    },
                    540: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    986: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {works.map((data, index) => (
                    <SwiperSlide key={`${data._id}-${index}`}>
                        <Swiper
                            className="mySwiperworks2 swiper-v"
                            direction={"vertical"}
                            spaceBetween={50}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            modules={[Autoplay, Pagination]}

                        >
                            <div>
                                <SwiperSlide >
                                    <Image src={data.source1} width={data.width} height={data.height} alt={data.alt} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={data.source2} width={data.width} height={data.height} alt={data.alt} />
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Works