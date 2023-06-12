import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useEnrollStudent from "../../../hooks/useEnrollStudent";


const AllClass = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const[, refetch] = useEnrollStudent();

    const [allClass, setClass] = useState([]);
    // const[loading, setLoading]= useLoaderData(true);
    useEffect(() => {
        fetch('https://school-server-site-nazmulhasan032.vercel.app/allclass')
            .then(res => res.json())
            .then(data => {
                setClass(data);
                // setLoading(false);
            })

    }, [])

    const handleEnrollStudent = (item) => {
        const {id, image, name, price, available_seat, teacher} = item;
        
        console.log(item);
        if (user && user.email) {
            const enrollStudent = {classId: id,image, name, price, available_seat, teacher, email: user.email}
            fetch('https://school-server-site-nazmulhasan032.vercel.app/enroll',{
                method : "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(enrollStudent)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        alert("You have enroll successfully");
                    }
                })
        }
        else {
            navigate('/login', { state: { from: location } });
        }

    }



    return (

        <>
            <Helmet>
                <title>Academy | Classes</title>
            </Helmet>
            <div className="text-center mt-16">
                <h3 className="text-5xl font-bold my-4">Most Popular Classes</h3>
            </div>
            {/* classes card section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 my-12 mx-auto">
                {/* card start */}
                {
                    allClass.map(item => <div key={item.id} className="card w-96 bg-base-100 shadow-xl mb-8">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Class Name: {item.name}</h2>
                            <p>Instructor: {item.teacher}</p>
                            <p>Available Seat: {item.available_seat}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => handleEnrollStudent(item)} className="btn btn-primary">Enroll</button>


                            {/* if(item.available_seat === 0){

                                    <button disabled className="btn btn-primary">Enroll</button>
                                    }
                                    else{
        
                                    <button className="btn btn-primary">Enroll</button>
                                } */}

                        </div>
                    </div>)
                }
                {/* card end */}

            </div>

        </>


    );
};

export default AllClass;