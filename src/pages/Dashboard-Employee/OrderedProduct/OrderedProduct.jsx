import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAllOrder from "../../../hooks/useAllOrder";
import Pagination from "../../../components/pagination/pagination";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSITNG_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const OrderedProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // sending image to the imageBB
    const imageFile = { image: data.image[0] };
    axiosPublic
      .post(image_hosing_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);

        // product data send to database
        const productDetails = {
          name: data?.name,
          quantity: data?.quantity,
          category: data?.category,
          productCode: data?.code,
          image: res?.data?.data?.display_url,
          deliveryDate: data?.deliveryDate,
          orderedDate: data?.orderedDate,
          price: data?.price,
          advancedAmount: data?.advancedAmount,
          status: "pending",
          email: user?.email,
        };
        // console.log(productDetails);
        // product added to the server
        axiosPublic.post("/orderProduct", productDetails).then((res) => {
          // console.log(res)
          if (res.data.message === "success") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Order added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Product Code has already been taken",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
  };

  return (
    <div className="supershop-container">
      <SectionTitle
        title="Order Products"
        descrition="Welcome to our showcase selections, where uniqueness meets quality."
      />
      <div className="md:w-5/6 rounded-lg mx-auto w-full shadow-lg p-10">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            {/* Product Name */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Product Name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full focus:outline-none"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="Breakfast">Panjabi</option>
                <option value="Lunch">T-Shirt</option>
                <option value="Dinner">Pant</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Quantity*</span>
              </label>
              <input
                {...register("quantity", { required: true })}
                type="number"
                placeholder="Quantity"
                min={1}
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
            {/* product Code */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Product Code*</span>
              </label>
              <input
                {...register("code", { required: true })}
                type="number"
                placeholder="Product Code"
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Product Name */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                min={1}
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Advanced Amount*</span>
              </label>
              <input
                {...register("advancedAmount", { required: true })}
                type="number"
                placeholder="Advanced Amount"
                min={1}
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* category */}

            {/* product Code */}
            {/* <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Due Amount*</span>
              </label>
              <input
                {...register("dueAmount", { required: true })}
                type="number"
                placeholder="Due Amount"
                className="input input-bordered w-full focus:outline-none"
              />
            </div> */}
          </div>
          <div className="flex gap-6">
            {/* price */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Ordered Date*(mm/dd/yyyy)</span>
              </label>
              <input
                {...register("orderedDate", { required: true })}
                type="date"
                placeholder="Ordered Date"
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
            {/* Date */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Delivary Date*(mm/dd/yyyy)</span>
              </label>
              <input
                {...register("deliveryDate", { required: true })}
                type="date"
                placeholder="Delivery Date"
                className="input input-bordered w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Image */}
          <div className="form-control w-full my-1">
            <label className="label">
              <span className="label-text">Image URL*</span>
            </label>
            <input
              {...register("image")}
              type="file"
              placeholder="Select Image"
              className="input input-bordered w-full focus:outline-noned"
            />
          </div>
          <button className="focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent bg-[#1D2A3B] hover:bg-[#131c29] text-white font-semibold py-2.5 rounded-md w-full mt-5 ">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderedProduct;
