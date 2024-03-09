import React, { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllProduct = () => {
  const axiosPublic = useAxiosPublic();
  const [sellProduct, setSellProduct] = useState([]);
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
        `/sellProduct/?page=${currentPage}&itemsPerPage=${itemsPerPage}`
      )
      .then((data) => {
        setSellProduct(data.data);
        setProductLength(data.data.totalCount);
        console.log("Prduct length",data.data);
        setIsLoading(false);
      });
  }, [currentPage, itemsPerPage]);

  return {
    sellProduct,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading,
    productLength,
  };
};

export default useAllProduct;
