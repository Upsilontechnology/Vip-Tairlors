import { MdOutlineDeleteOutline } from 'react-icons/md';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useSellProduct from '../../../hooks/useSellProduct';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import Pagination from '../../../components/pagination/pagination';

const ProductStatement = () => {
    const [sellProducts, refetch, currentPage, totalPages, setCurrentPage] = useSellProduct();
    const axiosPublic = useAxiosPublic();
    console.log(sellProducts)

    const handleDelete = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/sellProduct/${product?._id}`)
                    .then(res => {
                        console.log(res)
                        refetch();
                        if (res.status === 200) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Product Statement has been deleted..!",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }
    return (
        <div>
            <div className='w-6/12 mx-auto text-center my-7'>
                <SectionTitle
                    title="Statement Pieces"
                    descrition="Explore our collection and make a statement that reflects your individuality."
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Code</th>
                            <th>Selling Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellProducts?.items?.map((product, ind) => <tr key={product?._id}>
                                <th>{ind + 1}</th>
                                <th>{product?.productCode}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{new Date(product?.sellingDate).toLocaleDateString()}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product?.quantity}
                                </td>
                                <td>
                                    {product?.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product)} className="btn btn-sm">
                                        <MdOutlineDeleteOutline />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* pagination */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default ProductStatement;