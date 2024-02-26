import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Card from './Card';

const Featured = () => {
    return (
        <div id='featured' className='supershop-container mx-auto my-10'>
            <SectionTitle
                title="Featured Products"
                descrition="Welcome to our showcase selections, where uniqueness meets quality."
            />
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-8'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Featured;