import React from 'react';
import { GiFoxTail } from "react-icons/gi";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <footer className=" bg-[#EFF4F7] p-10 flex flex-col justify-center items-center text-center gap-2 ">
                <div>
                    
                    <p className="font-bold">
                        VIP Tailors and Punjabi <br />Providing reliable Service since 2001
                    </p>
                </div>
               
                <p>Copyright © 2001 - All right reserved by VIP Tailors and Punjabi</p>
            </footer>
        </div>
    );
};

export default Footer;