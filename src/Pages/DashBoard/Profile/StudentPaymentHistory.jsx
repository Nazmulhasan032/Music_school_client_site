
// import { FaTrashAlt } from 'react-icons/fa';

import { Helmet } from "react-helmet-async";

const StudentPaymentHistory = () => {
    return (
        <>
            <Helmet>
                <title>Academy | Payment History</title>
            </Helmet>
            <div className='w-full'>
                <h2 className='text-3xl font-bold text-center mb-8'>Payment History</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th></th>
                                <td></td>
                                <td></td>
                                <td><button></button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default StudentPaymentHistory;