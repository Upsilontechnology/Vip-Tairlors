

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useCarts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: carts, refetch : remaining } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/carts')
            return res.data;
        }
    })

    return [carts, remaining];
};

export default useCarts;