import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["Users"],
        queryFn: async () => {
            const res = await axiosSecure.get('/user')
            return res.data;
        }
    })
    return [users, refetch];
};

export default useUser;
