import React from 'react';
import faqImg from '../../../assets/faq1.png';


const Faq = () => {
  return (
    <section className='w-full'>
      <div className="supershop-container rounded-t-md relative bg-[#0a1d56] ring-1 ring-gray-900/5  text-white">
        <div className="">
          <div className='md:flex justify-between gap-20 mt-5'>
            <div className='mx-auto md:w-[60%]'>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-600 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium" >
                  <span className='mr-4 text-lg font-normal'>01</span>What is stock management in a supermarket?
                </div>
                <div className="collapse-content">
                  <p className='text-slate-300 ml-9 text-md font-normal mr-4'>Stock management in a supermarket involves keeping track of inventory, ensuring shelves are stocked with products, and replenishing items as needed to meet customer demand.</p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-600 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className='mr-4 text-lg font-normal'>02</span>Why is stock management important for a supermarket?
                </div>
                <div className="collapse-content">
                  <p className='text-slate-300 ml-9 text-md font-normal mr-4'>Stock management ensures that customers find the products they need when they visit the supermarket, helps reduce instances of out-of-stock items, and optimizes inventory levels to prevent overstocking or understocking.</p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-600 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className='mr-4 text-lg font-normal'>03</span>What happens if there's too much stock in the supermarket?
                </div>
                <div className="collapse-content">
                  <p className='text-slate-300 ml-9 text-md font-normal mr-4'>Excess stock can tie up capital, lead to product spoilage or obsolescence, and increase storage costs for the supermarket.</p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-600 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className='mr-4 text-lg font-normal'>04</span>What happens if there's not enough stock in the supermarket?
                </div>
                <div className="collapse-content">
                  <p className='text-slate-300 ml-9 text-md font-normal mr-4'>Insufficient stock can result in lost sales, disappointed customers, and harm to the reputation of the supermarket.</p>
                </div>
              </div>
              <div className="collapse collapse-plus flexcode-banner-bg rounded-lg shadow-2xl border-teal-600 border-[2px] mb-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                  <span className='mr-4 text-lg font-normal'>05</span>How can I keep track of inventory levels in my supermarket?
                </div>
                <div className="collapse-content">
                  <p className='text-slate-300 ml-9 text-md font-normal mr-4'>You can use inventory management software or manual methods like spreadsheet tracking to monitor inventory levels and ensure timely restocking of products.</p>
                </div>
              </div>
            </div>
            <div className='w-full md:w-[40%] pt-5'>
              <img className='rounded-lg w-[380px]' src={faqImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;