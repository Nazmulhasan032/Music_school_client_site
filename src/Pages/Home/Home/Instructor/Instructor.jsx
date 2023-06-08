import { useEffect, useState } from 'react';
import { FaTelegramPlane, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Instructor = () => {

    const[instructors, setInstructors] = useState([]);
    useEffect( ()=>{
        fetch('instructor.json')
        .then(res => res.json())
        .then(data => setInstructors(data))
    } ,[])



    return (
        <>
            <div className="text-center mt-16">
                <h3 className="text-2xl font-bold">Our Team</h3>
                <h3 className="text-5xl font-bold my-4">Meet Our Teachers</h3>
            </div>
            {/* classes card section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 my-12 mx-auto">

                {/* card start */}
                {
                    instructors.map(item => <div key={item.id} className="w-96 mx-auto my-16">
                    <figure>
                        <img src={item.image} alt="Shoes" className="rounded-full h-96 w-96 mx-auto" />
                    </figure>
                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-bold">{item.name}</h2>
                        <p className="mt-2 font-bold text-xl">{item.profession}</p>
                        <div className="flex justify-center mt-4"> {/* Add justify-center class here */}
                            <FaTelegramPlane className="mr-4" /> {/* Add margin-right class here */}
                            <FaTwitter className="mr-4" /> {/* Add margin-right class here */}
                            <FaFacebookF className="mr-4" /> {/* Add margin-right class here */}
                            <FaInstagram /> {/* Remove margin-right class here */}
                        </div>
                    </div>
                </div>)
                }
                {/* card end */}
            </div>
        </>
    );
};

export default Instructor;