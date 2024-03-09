import React, { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllOrder = () => {
  const axiosPublic = useAxiosPublic();
  const [orderProduct, setorderProduct] = useState([]);
  const [productLength, setProductLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(productLength / itemsPerPage);
  console.log("totalpage",totalPages);

  useEffect(() => {
    axiosPublic
      .get(
        `/orderProduct/?page=${currentPage}&itemsPerPage=${itemsPerPage}`
      )
      .then((data) => {
        setorderProduct(data.data);
        setProductLength(data.data.totalCount);
        setIsLoading(false);
      });
  }, [currentPage, itemsPerPage]);

  return {
    orderProduct,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading,
    productLength,
  };
};

export default useAllOrder;
