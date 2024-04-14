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
    console.log(notes);

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
        <div id='notice' className='max-w-[1280px] w-full mx-auto py-5 md:py-12 lg:py-4 px-3'>
            <SectionTitle title="VIP Tailors Regular Notice" descrition="Important Communication Regarding Employment Updates and Expectations" />

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
                        <div className=' relative group bg-[#F0EEEE] pt-[3rem] mt-[1.5rem] pb-[5rem] '>
                            
                            <div className='flex flex-col overflow-hidden px-3 '>
                                <h2 className="text-2xl font-bold">{
                                    note?.title.slice(0, 25)
                                }...</h2>
                                <p className=' text-sm py-[1.5rem] '>{
                                    note?.message.slice(0, 25)
                                }...</p>
                                <Link className='noticeBtn left-0 group-hover:bottom-0 bottom-[-50%]  transition-all duration-300 ease-in-out absolute bg-[#403030] text-[#fff] font-semibold w-full py-[.8rem] ' to={`/notice/${note?._id}`}>Explore More</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Notice;

