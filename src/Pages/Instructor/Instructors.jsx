import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {


    const [teacher, setTeacher] = useState([]);
    // const[loading, setLoading]= useLoaderData(true);
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
            <Helmet>
                <title>Academy | Instructor</title>
            </Helmet>
            <div className="text-center mt-16">
                <h3 className="text-5xl font-bold my-4">Our Teachers</h3>
            </div>
            {/* classes card section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 my-12 mx-auto">
                {/* card start */}
                {
                    teacher.map(item => <div key={item.id} className="card w-96 bg-base-100 shadow-xl mb-8">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name :{item.name}</h2>
                            <p>Email: {item.email}</p>
                        </div>
                    </div>)
                }
                {/* card end */}

            </div>
            
        </>
    );
};

export default Instructors;