import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import the main Swiper bundle CSS
import { FaFlag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Notice = () => {
    const [notes, setNotes] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get(`/notebooks`)
            .then(data => {
                setNotes(data?.data);
            })
            .catch(error => {
                console.error('Error fetching notes:', error);
            });
    }, [axiosPublic]);

    return (
        <div className='supershop-container'>
            <SectionTitle title="Notice" descrition="Important Communication Regarding Employment Updates and Expectations" />

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >
                {notes?.map(note => (
                    <SwiperSlide key={note?._id}>
                        <div className='flex items-center gap-6 bg-[#F2F1F1] justify-center py-[8rem] my-3 shadow-md px-2 '>
                            <div className='text-5xl'>
                                <FaFlag className=' bg-[#FFFBE7] px-2 ' />
                            </div>
                            <div className='flex flex-col gap-2 items-start'>
                                <h2 className="text-2xl font-bold">{note?.title}</h2>
                                <h3 className='text-xs font-bold'>{note?.date}</h3>
                                <Link to={"/notice"}><h1 className='text-md font-normal hover:text-[#6979b1] cursor-pointer hover:underline transition duration-300'>{note?.message}</h1></Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Notice;

