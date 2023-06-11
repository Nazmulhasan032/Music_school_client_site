import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const ManageInstructor = () => {



    const [teacher, setTeacher] = useState([]);
    // const[loading, setLoading]= useLoading(true);
    useEffect(() => {
        fetch('http://localhost:5000/allinstructor')
            .then(res => res.json())
            .then(data => {
                setTeacher(data);
                // setLoading(false);
            })

    }, [])



    return (
        <>
            <div className="w-full">
                <Helmet>
                    <title>Academy | Manage Instructor</title>
                </Helmet>
                {/* <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3> */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                teacher.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role === 'instructor' ? 'instructor' :
                                        <button className="btn btn-ghost bg-orange-600  text-white">Update</button>
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

export default ManageInstructor;