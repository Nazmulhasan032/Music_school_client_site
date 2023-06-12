import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from "sweetalert2";


const ManageClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const {data: allClass=[], refetch} = useQuery({
        queryKey: ['allclass'],
        queryFn: async()=>{
            const res = await fetch('https://school-server-site-nazmulhasan032.vercel.app/allclass')
            return res.json();
        }
    });


    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/allclass/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }



    return (
        <>
            <div className="w-full">
                <Helmet>
                    <title>Academy | Manage Class</title>
                </Helmet>
                <h2 className="text-3xl font-bold text-center mb-8">All Classes</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Instructor</th>
                                <th>price</th>
                                <th>action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allClass.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.teacher}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.role === 'instructor' ? 'instructor' :
                                        <select className="select select-bordered select-sm w-3/4 max-w-xs">
                                            <option disabled selected>Status</option>
                                            <option>Approved</option>
                                            <option>Pending</option>
                                            <option>Denied</option>
                                        </select>
                                    }</td>
                                    <td><button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
};

export default ManageClass;