import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";


const ManageClass = () => {

    const [allClass, setClass] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allclass')
            .then(res => res.json())
            .then(data => {
                setClass(data);
            })

    }, [])



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
                                    <td><button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>

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