import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const StudentEnrollClass = () => {
    return (

        <>
            <Helmet>
                <title>Academy | Enroll Class</title>
            </Helmet>
            <div className='w-full'>
                <h2 className='text-3xl font-bold text-center mb-8'>My Enroll classes</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Teacher</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Piano for Beginner</td>
                                <td>Michael Rodriguez</td>
                                <td><button className="btn btn-danger btn-sm bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Sitar</td>
                                <td>Julia Martinez</td>
                                <td><button className="btn btn-danger btn-sm bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>

    );
};

export default StudentEnrollClass;