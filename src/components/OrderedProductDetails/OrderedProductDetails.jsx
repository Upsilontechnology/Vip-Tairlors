import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pagination from "../pagination/pagination";

const OrderedProductDetails = ({
  products,
  filteredUser,
  currentPage,
  setCurrentPage,
  totalPages,
  refetch,
}) => {
  const axiosPublic = useAxiosPublic();
  console.log(products)

  const handleComplete = async (product) => {
    await axiosPublic.patch(`/orderProduct/${product?._id}`)
      .then((res) => {
        if (res.data.message === "success") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      });
  };
  const {
    _id,
    productCode,
    name,
    price,
    quantity,
    advancedAmount,
    deliveryDate,
    image,
    status,
  } = products || {};
  console.log();
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black border-b-[1.5px] border-black">
              <th className="p-1">Product Code</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              {products?.items?.some((dd) => dd.status === "pending") && (
                <>
                  <th>Advanced</th>
                  <th>Due</th>
                </>
              )}

              <th>Delivery Date</th>
              <th>Image</th>
              {filteredUser?.role === 'employee' && <th>Status</th>}
            </tr>
          </thead>
          <tbody>
            {products?.items?.map((product, ind) => (
              <tr key={product?._id} className="border-b-[1.5px] border-black">
                <td className="p-1">{product?.productCode}</td>
                <td>{product?.name}</td>
                <td className="whitespace-nowrap">BDT {product?.price}</td>
                <td>{product?.quantity}</td>
                {product.status === "pending" && (
                  <>
                    <td>{product?.advancedAmount}</td>
                    <td>
                      {product?.quantity * product?.price -
                        product?.advancedAmount}
                    </td>
                  </>
                )}

                <td>{new Date(product?.deliveryDate).toLocaleDateString()}</td>
                <td>
                  <img className="w-10 h-10" src={product?.image} alt="" />
                </td>
                {
                  filteredUser?.role === 'employee' ? (
                    <th>
                      {
                        product?.status === 'pending' ?
                          (
                            <div>
                              <h1 className="text-xs font-bold">Pending</h1>
                              <button
                                onClick={() => handleComplete(product)}
                                className="btn btn-xs btn-accent"
                              >
                                Complete
                              </button>
                            </div>
                          ) :
                          <h1 className="text-xs font-bold">Paid</h1>
                      }
                    </th>
                  ) : ''
                }
                {/* <th>

                  {product?.status === "pending" ? (
                    <h1 className="text-xs font-bold">Pending</h1>
                  ) : (
                    <h1 className="text-xs font-bold">Paid</h1>
                  )}
                  {product?.status === "pending" ? (
                    filteredUser?.role === "employee" && (
                      <button
                        onClick={() => handleComplete(product)}
                        className="btn btn-xs btn-accent"
                      >
                        Complete
                      </button>
                    )
                  ) : (
                    <button className="btn btn-xs hidden btn-accent">
                      Complete
                    </button>
                  )}
                </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default OrderedProductDetails;
