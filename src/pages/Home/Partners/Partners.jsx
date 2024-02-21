/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// import "./clients.css";
const Partners = () => {
    const url = "partners-data.json";
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const partnersData = data.partners;
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <SectionTitle title="Our Partners"
                descrition="Meet the exceptional partners who help bring our vision to life." />
            </div>
            <div>
                <Splide
                    options={{
                        type: "loop",
                        gap: "20px",
                        drag: "free",
                        arrows: false,
                        pagination: false,
                        perPage: 5,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 1,
                        },
                    }}
                    extensions={{ AutoScroll }}
                    className="p-3 rounded-lg">
                    {partnersData?.map((dd, idx) => (
                        <SplideSlide key={idx}>
                            <img src={dd.image_link} alt="Image 1" width="100px" />
                        </SplideSlide>
                    ))}
                </Splide>
                <Splide
                    options={{
                        type: "loop",
                        gap: "20px",
                        drag: "free",
                        arrows: false,
                        pagination: false,
                        perPage: 5,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: -1,
                        },
                    }}
                    extensions={{ AutoScroll }}
                    className="p-3 rounded-lg">
                    {partnersData?.map(data => (
                        <SplideSlide key={data?.id}>
                            <img src={data?.image_link} alt="Image 1" width="100px" />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default Partners;
