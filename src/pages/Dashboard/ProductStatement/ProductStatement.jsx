import { MdOutlineDeleteOutline } from 'react-icons/md';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useSellProduct from '../../../hooks/useSellProduct';

const ProductStatement = () => {
    const [sellProducts, refetch] = useSellProduct();
    console.log(sellProducts)
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
                            <th>Total Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellProducts?.map((product, ind) => <tr key={product?._id}>
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
                                    {product?.price}
                                </td>
                                <td>
                                    <button className="btn btn-sm">
                                        <MdOutlineDeleteOutline />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductStatement;