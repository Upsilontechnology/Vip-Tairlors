import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Featured = () => {
    return (
        <div className='max-w-6xl mx-auto my-10'>
            <SectionTitle
                title="Featured Products"
                descrition="Welcome to our showcase selections, where uniqueness meets quality."
            />
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                {/* card1 */}
                <div className="p-6 shadow-lg my-4 space-y-4 rounded-lg">
                    <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://i.ibb.co/FHqtjLN/mens-black-suit.png" />
                    <h1 className="text-lg font-bold ">Stylish Black Suit</h1>
                    <div className='flex justify-between'>
                        <div className="text-lg font-semibold">$99.99</div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={4.5}
                            readOnly
                        />
                    </div>
                </div>
                {/* card2 */}
                <div className="p-6 shadow-lg my-4 space-y-4 rounded-lg">
                    <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://i.ibb.co/Nn9pFVq/formal-shirt2.png" />
                    <h1 className="text-lg font-bold ">Formal Shirt</h1>
                    <div className='flex justify-between'>
                        <div className="text-lg font-semibold">$99.99</div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                    </div>
                </div>
                {/* card3 */}
                <div className="p-6 shadow-lg my-4 space-y-4 rounded-lg">
                    <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://i.ibb.co/XVvCXbG/formal-shirt.png" />
                    <h1 className="text-lg font-bold ">Mens Formal Set</h1>
                    <div className='flex justify-between'>
                        <div className="text-lg font-semibold">$99.99</div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={4.5}
                            readOnly
                        />
                    </div>
                </div>
                {/* card4 */}
                <div className="p-6 shadow-lg my-4 space-y-4 rounded-lg">
                    <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://i.ibb.co/qRBr3k7/mens-suit.png" />
                    <h1 className="text-lg font-bold ">Latest Gray Suit</h1>
                    <div className='flex justify-between'>
                        <div className="text-lg font-semibold">$99.99</div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                    </div>
                </div>
                {/* card5 */}
                <div className="p-6 shadow-lg my-4 space-y-4 rounded-lg">
                    <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://i.ibb.co/FHqtjLN/mens-black-suit.png" />
                    <h1 className="text-lg font-bold ">Stylish Black Suit</h1>
                    <div className='flex justify-between'>
                        <div className="text-lg font-semibold">$99.99</div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={4.5}
                            readOnly
                        />
                    </div>
                </div>
                {/* card6 */}
                <div className="p-6 shadow-lg my-4 space-y-4 rounded-lg">
                    <img alt="Product Image" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://i.ibb.co/Nn9pFVq/formal-shirt2.png" />
                    <h1 className="text-lg font-bold ">Formal Shirt</h1>
                    <div className='flex justify-between'>
                        <div className="text-lg font-semibold">$99.99</div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={5}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;