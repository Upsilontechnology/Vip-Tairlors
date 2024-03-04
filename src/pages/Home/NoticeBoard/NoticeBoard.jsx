import React from 'react'
import Notice from './Notice'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NoticeBoard = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
    <div className='supershop-container'>
        <SectionTitle title="Notice" descrition="Important Communication Regarding Employment Updates and Expectations" />

        <Slider {...settings} className=''>

      <Notice />
      <Notice />
      <Notice />
        </Slider>

    </div>
  )
}

export default NoticeBoard
