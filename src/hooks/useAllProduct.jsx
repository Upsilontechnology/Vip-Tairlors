import React, { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllProduct = () => {
  const axiosPublic = useAxiosPublic();
  const [AllProduct, setAllProduct] = useState([]);
  const [productLength, setProductLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination
  const [filterLevel, setFilterLevel] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(productLength / itemsPerPage);

  useEffect(() => {
    axiosPublic
      .get(
        `/sellProduct/?level=${filterLevel}&page=${currentPage}&itemsPerPage=${itemsPerPage}`
      )
      .then((data) => {
        setAllProduct(data.data);
        setProductLength(data.totalCount);
        setIsLoading(false);
      });
  }, [filterLevel, searchText, currentPage, itemsPerPage]);

  return {
    AllProduct,
    currentPage,
    totalPages,
    setCurrentPage,
    isLoading,
    searchText,
    setSearchText,
    filterLevel,
    setFilterLevel,
    productLength,
  };
};

export default useAllProduct;
