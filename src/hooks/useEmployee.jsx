import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useEmployee = () => {
  const { user, setLoading, loading } = useAuth();
  //   const axios = useAxiosSecure();
  const axios = useAxiosPublic();

  const { data: isEmployee, isLoading: isEmployeeLoading } = useQuery({
    queryKey: [user?.email, "isEmployee"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`/user/employee/${user?.email}`);
      return res?.data?.isEmployee;
    },
  });

  return { isEmployee, isEmployeeLoading };
};

export default useEmployee;
