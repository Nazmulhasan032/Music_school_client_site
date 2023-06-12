import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';


const useEnrollStudent = () => {


    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enroll', user?.email],

        queryFn: async () => {
            const res = await axiosSecure(`/enroll?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [enroll, refetch];

}
export default useEnrollStudent;