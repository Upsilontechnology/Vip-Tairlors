import React from 'react';
import { GiFoxTail } from "react-icons/gi";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-[#EFF4F7] p-10 ">
                <div>
                    <GiFoxTail className='text-4xl' />
                    <p className="font-bold">
                        VIP Tailors and Punjabi <br />Providing reliable Service since 2001
                    </p>
                </div>
                <div className="flex gap-2">
                    <CiTwitter className='text-3xl' />
                    <CiFacebook className='text-3xl text-blue-600' />
                    <CiInstagram className='text-3xl text-pink-500' />
                </div>
                <p>Copyright © 2001 - All right reserved by VIP Tailors and Punjabi</p>
            </footer>
        </div>
    );
};

export default Footer;