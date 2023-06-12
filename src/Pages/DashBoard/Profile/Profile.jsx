
import { Helmet } from 'react-helmet-async';
import useEnrollStudent from '../../../hooks/useEnrollStudent';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Profile = () => {

    const [enroll, refetch] = useEnrollStudent();


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
                fetch(`https://school-server-site-nazmulhasan032.vercel.app/enroll/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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
        <div>
            <div className="w-full">
                <Helmet>
                    <title>Academy | My enroll</title>
                </Helmet>
                <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                    <h3 className="text-3xl">Selected Classes</h3>
                    {/* <h3 className="text-3xl">Total Items: {total}</h3> */}
                    {/* <h3 className="text-3xl">Total Items: {enroll.length}</h3>
                    <h3 className="text-3xl">Total Price: ${total}</h3>
                    <Link to="/dashboard/payment">
                        <button className="btn btn-warning btn-sm">PAY</button>
                    </Link> */}
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enroll.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-danger btn-sm bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                        
                                    </td>
                                    <td>
                                        <Link to="/dashboard/payment">
                                            <button className="btn btn-warning btn-sm">PAY</button>
                                        </Link>

                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;