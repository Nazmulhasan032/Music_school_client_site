import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useEnrollStudent = () => {
    const { user } = useContext(AuthContext);


    const { refetch, data: enroll = [] } = useQuery({
        queryKey: ['enroll', user?.email],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/enroll?email=${user?.email}`)
            console.log('res from axios', res)
            return res.json();
        },
    })
    return [enroll, refetch];


    // const { user, loading } = useAuth();
    // // const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();
    // const { refetch, data: cart = [] } = useQuery({
    //     queryKey: ['carts', user?.email],
    //     enabled: !loading,
    //     queryFn: async () => {
    //         const res = await axiosSecure(`/carts?email=${user?.email}`)
    //         console.log('res from axios', res)
    //         return res.data;
    //     },
    // })

    // return [cart, refetch]



}
export default useEnrollStudent;