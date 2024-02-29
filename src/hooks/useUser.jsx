import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useUser = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: users, refetch } = useQuery({
        queryKey: ["Users"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user?.email}`)
            return res.data;
        }
    })
    return [users, refetch];
};

export default useUser;