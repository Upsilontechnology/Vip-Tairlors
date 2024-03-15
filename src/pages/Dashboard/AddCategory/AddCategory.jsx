import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const AddCategory = () => {
    const axiosPublic = useAxiosPublic();

    const handleAddCategory = async (e) => {
        e.preventDefault();
        const form = e.target;
        const category = {
            category: form.category.value
        }
        await axiosPublic.post('/category', category)
            .then(res => {
                console.log(res.data);
                if (res.data.message === 'success') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Category added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Category has already added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='flex flex-col justify-center items-center h-[80vh]'>
            <SectionTitle
                title="Add Category"
            />
            <div className="w-3/4 mx-auto my-5">
                <form onSubmit={handleAddCategory} className='flex justify-center items-center gap-2'>
                    <div className='w-full form-control border-b-2'>
                        <input className='w-full p-4 rounded-lg outline-none' type="text" name="category" placeholder='Put Category Name' id="" />
                    </div>
                    <div className='mx-auto w-1/4'>
                        <button className="btn btn-outline">Add Category</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;