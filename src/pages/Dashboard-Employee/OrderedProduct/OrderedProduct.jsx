import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAllOrder from "../../../hooks/useAllOrder";
import Pagination from "../../../components/pagination/pagination";
import DashBoardTitle from "../../../components/dashboardTitle/DashBoardTitle";
import { useQuery } from "@tanstack/react-query";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSITNG_KEY;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const OrderedProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const { data: categories = [] } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });
  const onSubmit = (data) => {
    // Check if image is provided
    if (data.image && data.image.length > 0) {
      // If image is provided, upload it first
      const imageFile = { image: data.image[0] };
      axiosPublic
        .post(image_hosing_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          const imageUrl = res?.data?.data?.display_url || "";
          sendDataToServer(data, imageUrl);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          sendDataToServer(data, "");
        });
    } else {
      // If no image provided, send data to server directly
      sendDataToServer(data, "");
    }
  };

  const sendDataToServer = (data, imageUrl) => {
    const productDetails = {
      name: data?.name,
      quantity: data?.quantity,
      category: data?.category,
      productCode: data?.code,
      image: imageUrl,
      deliveryDate: data?.deliveryDate,
      orderedDate: data?.orderedDate,
      price: data?.price,
      advancedAmount: data?.advancedAmount,
      status: "pending",
      email: user?.email,
    };
    axiosPublic
      .post("/orderProduct", productDetails)
      .then((res) => {
        if (res.data.message === "success") {
          Swal.fire({
            title: "Congratulations!",
            text: "Oder Product Added Successfully.",
            confirmButtonText: "Return",
            showConfirmButton: true,
            // confirmButtonClass: "my-custom-button",
            confirmButtonColor: "#403030",
            imageUrl: "https://i.ibb.co/G0DfFjk/Character.png",
            imageWidth: 220,
            imageHeight: 200,
            imageAlt: "Custom image",
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
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };
  return (
    <>
      <div className="overflow-scroll 2xl:h-[80vh] lg:h-[85vh]  lg:ml-10 mx-3 lg:mx-0">
        <div className="mb-2">
          <DashBoardTitle
            title={"Admin"}
            subTitle={"Add, Edit your category section in one click. "}
          />
        </div>
        <div className=" bg-white xl:h-full h-auto rounded-md py-5">
          <SectionTitle
            title="Add Products Info"
            // descrition="Welcome to our showcase selections, where uniqueness meets quality."
          />
          <div className="lg:w-5/6 mx-auto w-full p-2 rounded-md">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
                {/* Product Name */}
                <div className="form-control w-full my-1">
                  {/* <label className="label">
                <span className="label-text">Product Name*</span>
              </label> */}
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Product Name*"
                    className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                </div>
                <div className="form-control w-full my-1">
                  <select
                    className="select select-bordered w-full focus:outline-none bg-[#F0F2F5]"
                    // onChange={(e) => handleCategory(e.target.value)}
                    {...register("category", { required: true })}
                    // value={filter}
                  >
                    {categories?.map((category, index) => (
                      <option value={category?.category} key={category._id}>
                        {category?.category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
                {/* category */}
                <div className="form-control w-full my-1">
                  {/* <label className="label">
                <span className="label-text">Quantity*</span>
              </label> */}
                  <input
                    {...register("quantity", { required: true })}
                    type="number"
                    placeholder="Quantity*"
                    min={1}
                    className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                </div>
                {/* product Code */}
                <div className="form-control w-full my-1">
                  {/* <label className="label">
                <span className="label-text">Product Code*</span>
              </label> */}
                  <input
                    {...register("code", { required: true })}
                    type="number"
                    placeholder="Product Code*"
                    className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
                {/* Product Name */}
                <div className="form-control w-full my-1">
                  {/* <label className="label">
                <span className="label-text">Price*</span>
              </label> */}
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Price*"
                    min={1}
                    className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                </div>
                <div className="form-control w-full my-1">
                  {/* <label className="label">
                <span className="label-text">Advanced Amount*</span>
              </label> */}
                  <input
                    {...register("advancedAmount", { required: true })}
                    type="number"
                    placeholder="Advanced Amount*"
                    min={1}
                    className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
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
                className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
              />
            </div> */}
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 lg:mb-2 mb-1">
                {/* price */}
                <div className="form-control w-full my-1">
                  {/* <label className="label">
                <span className="label-text">Ordered Date*(mm/dd/yyyy)</span>
              </label> */}
                  <span className="text-xs">Ordered Date*</span>
                  <input
                    {...register("orderedDate", { required: true })}
                    type="date"
                    // placeholder="Ordered Date*"
                    placeholder="Ordered Date (YYYY-MM-DD)"
                    className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                </div>
                {/* Date */}
                <div className="form-control w-full my-1">
                  {/* <label className="label">
                <span className="label-text">Delivary Date*(mm/dd/yyyy)</span>
              </label> */}
                  <span className="text-xs">Delivery Date*</span>
                  <input
                    {...register("deliveryDate", { required: true })}
                    type="date"
                    placeholder="Delivery Date*"
                    className="input input-bordered w-full focus:outline-none bg-[#F0F2F5] placeholder:text-black"
                  />
                </div>
              </div>

              {/* Image */}
              <div className="form-control w-full my-1 relative border-2 border-dotted border-gray-600 rounded-lg">
                <div className="input_field  text-center">
                  <label className="label flex flex-col justify-center items-center ">
                    <input
                      {...register("image", { required: false })}
                      type="file"
                      // placeholder="Select Image"
                      className="text-sm cursor-pointer w-20 hidden"
                    />
                    <div className=" cursor-pointer px-3">
                      <svg
                        className="text-[#403030] w-10 mx-auto mb-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <div className="title"> Drag or Upload File</div>
                  </label>
                </div>
              </div>

              <button className="focus:outline-none  bg-[#403030] hover:bg-[#332626] text-white font-semibold py-2.5 rounded-md w-full mt-5 ">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderedProduct;
