import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useOrderedProduct = () => {
    const axiosPublic = useAxiosPublic();

    const {data: orderProducts = [], refetch} = useQuery({
        queryKey: ["OrderProduct"],
        queryFn: async () =>{
            const res = await axiosPublic.get('/orderProduct')
            return res.data;
        }
    })
    return [orderProducts, refetch];
};

export default useOrderedProduct;