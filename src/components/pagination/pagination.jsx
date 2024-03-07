import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {

    const pageNumber = [...Array(totalPages).keys()];
    console.log(pageNumber);

    return (
        <div className="flex items-center justify-center gap-5 mt-8">
            <button onClick={() => { currentPage - 1 < totalPages && setCurrentPage(currentPage - 1) }} className={`flex items-center gap-1 py-2 px-5 border cursor-pointer border-slate-500 rounded-xl flexcode-banner-bg ${currentPage !== 0 ? "hover:border-[#0fcda156]" : "text-slate-500 btn-disabled"}`}>
                <FaAngleLeft />
                <span className="font-medium">Previous</span>
            </button>
            <div className="hidden md:flex items-center gap-5">
                {pageNumber.map(num => <span onClick={() => setCurrentPage(num)} key={num} className={`font-semibold py-2 px-5 border rounded-xl cursor-pointer flexcode-banner-bg ${num === currentPage ? "border-[#0fcda156]" : "border-slate-500 hover:border-[#0fcda156]"}`}>{num + 1}</span>)}
            </div>
            <button onClick={() => { currentPage + 1 < totalPages && setCurrentPage(currentPage + 1) }} className={`flex items-center gap-1 py-2 px-5 border cursor-pointer border-slate-500 rounded-xl flexcode-banner-bg ${currentPage + 1 < totalPages ? "hover:border-[#0fcda156]" : "text-slate-500 btn-disabled"}`}>
                <span className="font-medium">Next</span>
                <FaAngleRight  />
            </button>
        </div>
    );
};
export default Pagination;



