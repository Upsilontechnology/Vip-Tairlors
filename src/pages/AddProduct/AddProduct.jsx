import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSITNG_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

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
          sellingDate: data?.date,
          price: data?.price,
          status: "pending",
          email: user?.email,
        };

        // product added to the server
        axiosPublic.post("/sellProduct", productDetails).then((res) => {
          console.log(res);
          if (res.data.message === "success") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Order added successfully",
              showConfirmButton: false,
              timer: 1500,
              imageUrl: "https://unsplash.it/400/200",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Product Code has alredy been taken",
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
        title="Featured Products"
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
              {errors.name && (
                <span className="text-red-500">Product Name is required</span>
              )}
            </div>
            {/* Quantity */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Quantity*</span>
              </label>
              <input
                {...register("quantity", { required: true })}
                type="number"
                placeholder="Quantity"
                className="input input-bordered w-full focus:outline-none"
              />
              {errors.quantity && (
                <span className="text-red-500">Quantity is required</span>
              )}
            </div>
          </div>
          <div className="flex gap-6">
            {/* price */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered focus:outline-none w-full"
              />
              {errors.price && (
                <span className="text-red-500">Price is required</span>
              )}
            </div>
            {/* Date */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Date(mm/dd/yyyy)*</span>
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                placeholder="Date"
                className="input input-bordered focus:outline-none w-full"
              />
              {errors.date && (
                <span className="text-red-500">Date is required</span>
              )}
            </div>
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-1">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered focus:outline-none w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="punjabi">Punjabi</option>
                <option value="suit">Suit</option>
                <option value="cosmetics">Cosmetics</option>
                <option value="shelai">Shelai</option>
                <option value="ready-Made">Ready-Made</option>
              </select>
              {errors.category && (
                <span className="text-red-500">Category is required</span>
              )}
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
                className="input input-bordered focus:outline-none w-full"
              />
              {errors.code && (
                <span className="text-red-500">Product Code is required</span>
              )}
            </div>
          </div>
          {/* Image */}
          <div className="form-control w-full my-1">
            <label className="label">
              <span className="label-text">Image URL*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              placeholder="Select Image"
              className="input input-bordered focus:outline-none w-full"
            />
            {errors.image && (
              <span className="text-red-500">Image is required</span>
            )}
          </div>
          <button className="focus:outline-none focus:ring-2 w-full mt-5 focus:ring-blue-800 focus:border-transparent bg-[#1D2A3B] hover:bg-[#131c29] text-white font-semibold py-2.5 rounded-md">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
