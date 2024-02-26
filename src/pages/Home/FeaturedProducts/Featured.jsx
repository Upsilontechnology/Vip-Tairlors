import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Featured = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };


    return (
        <div id='featured' className='supershop-container mx-auto my-10'>
            <SectionTitle
                title="Featured Products"
                descrition="Welcome to Our Showcase Selections, where Uniqueness Meets Quality."
            />
            <Slider {...settings} className=''>
                {/* <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-8'> */}
                <Card />
                <Card />
                <Card />
                {/* </div> */}
            </Slider>
        </div>
    );
};

export default Featured;