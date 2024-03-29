
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useCarts = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const email = user?.email;

    const { data: carts, refetch: remaining } = useQuery({
        queryKey: ['carts', email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/carts?email=${email}`);
            return res.data;
        }
    })

    return [carts, remaining];
};

export default useCarts;