import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import DashBoardTitle from "../../../components/dashboardTitle/DashBoardTitle";
import { GiCancel } from "react-icons/gi";
const AddCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cid, setCId] = useState();
  const [cData, setCdata] = useState();
  const axiosPublic = useAxiosPublic();
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categoryData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category");
      return res.data;
    },
  });

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const form = e.target;
    const category = {
      category: form.category.value,
    };
    await axiosPublic.post("/category", category).then((res) => {
      console.log(res.data);
      if (res.data.message === "success") {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Category has already added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (categoryId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/category/${categoryId}`).then((res) => {
          //   console.log(res);
          refetch();
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Product has been deleted..!",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleEditModal = (dde) => {
    setCId(cData?._id);
    setCdata(dde);
    setOpenModal(true);
  };
  const handleUpdate = async (event) => {
    event.preventDefault();

    const form = event.target;
    const category = form.category.value;
    setCdata("");
    const updatedCategory = {
      category,
    };

    fetch(`http://localhost:5000/category/${cData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOpenModal(false);
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Update Product details",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };
  return (
    <>
      <div className="max-w-[90%] mx-auto">
        <div className="mb-2">
          <DashBoardTitle
            title={"Admin"}
            subTitle={"Add, Edit your category section in one click. "}
          />
        </div>
        <div className="bg-white rounded-lg p-3">
          <SectionTitle title="Add Category" />
          <div className="flex flex-col justify-center items-center">
            <div className="w-4/6 mx-auto my-5 ">
              <form
                onSubmit={handleAddCategory}
                className="flex justify-center items-center gap-2"
              >
                <div className="w-full form-control">
                  <input
                    className="w-full  h-[49px] pl-2 rounded-lg outline-none bg-[#F8F8F8]"
                    type="text"
                    name="category"
                    placeholder="Put Category Name"
                    id=""
                  />
                </div>
                <div className="mx-auto w-1/3">
                  <button className="focus:outline-none focus:ring-2 w-full focus:border-transparent  hover:bg-[#403030] bg-[#403030] text-neutral-50 font-semibold rounded-md flex justify-center items-center gap-1 px-2  h-[49px] ">
                    <IoMdAddCircleOutline className="text-lg" />
                    Add Category
                  </button>
                </div>
              </form>
            </div>
            <div className="w-4/6 mx-auto">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>SL No</th>
                      <th>Category Name</th>
                      <th className="float-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((dd, index) => (
                      <tr key={dd._id}>
                        <th>0{index + 1}</th>
                        <td>{dd.category}</td>
                        <td className="flex justify-end text-base gap-3">
                          <div>
                            <div>
                              <button
                                onClick={() => handleEditModal(dd)}
                                className="rounded-sm  px-5 py-[6px]"
                                id="_modal_NavigateUI"
                              >
                                <FaRegEdit />
                              </button>
                              <div
                                onClick={() => setOpenModal(false)}
                                className={`fixed z-[100] flex items-center justify-center ${
                                  openModal
                                    ? "visible opacity-100"
                                    : "invisible opacity-0"
                                } inset-0 bg-black/10 duration-100`}
                              >
                                <div
                                  onClick={(e_) => e_.stopPropagation()}
                                  className={` absolute max-w-md rounded-sm bg-white p-6 ${
                                    openModal
                                      ? "scale-1 opacity-1 duration-200"
                                      : "scale-0 opacity-0 duration-150"
                                  }`}
                                >
                                  <div>
                                    <button
                                      onClick={() => setOpenModal(false)}
                                      className="text-[#1D2A3B] float-end text-lg"
                                    >
                                      <GiCancel />
                                    </button>
                                    <form className="" onSubmit={handleUpdate}>
                                      <div className="flex gap-6">
                                        <div className="form-control w-full my-1">
                                          <label className="label">
                                            <span className="label-text">
                                              Category Name*
                                            </span>
                                          </label>
                                          <input
                                            name="category"
                                            defaultValue={cData?.category}
                                            type="text"
                                            placeholder="Category Name"
                                            className="input input-bordered w-full focus:outline-none"
                                          />
                                        </div>
                                      </div>
                                      {/* <h1>{cData._id}</h1> */}
                                      <button className="focus:outline-none focus:ring-2 w-full mt-5 focus:ring-blue-800 focus:border-transparent bg-[#1D2A3B] hover:bg-[#131c29] text-white font-semibold py-2.5 rounded-md">
                                        Save
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button onClick={() => handleDelete(dd._id)}>
                            <RiDeleteBinLine />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
