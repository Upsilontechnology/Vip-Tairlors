import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useSellProduct = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: sellProducts, refetch} = useQuery({
        queryKey: ['sellProduct'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/sellProduct')
            return res.data;
        }
    });

    return [sellProducts, refetch];
};

export default useSellProduct;