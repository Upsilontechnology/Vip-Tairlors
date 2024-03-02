import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useOrderedProduct from '../../../hooks/useOrderedProduct';
import { MdOutlineDeleteOutline } from "react-icons/md";

const OrderStatement = () => {
    const [orderProducts, refetch] = useOrderedProduct();
    console.log(orderProducts)
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
                            <th>Delivery Date</th>
                            <th>Total Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderProducts?.map((product, ind) => <tr key={product?._id}>
                                <th>{ind + 1}</th>
                                <th>{product?.productCode}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{new Date(product?.deliveryDate).toLocaleDateString()}</div>
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

export default OrderStatement;