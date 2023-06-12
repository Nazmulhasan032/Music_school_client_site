import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';

const Classes = () => {

    const [classes, setClasses] = useState([]);
    // const[loading, setLoading]= useLoaderData(true);
    useEffect(() => {
        fetch('https://school-server-site-nazmulhasan032.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                // setLoading(false);
            })

    }, [])


    return (
        <>
            {/* <Helmet>
                <title>Academy | Classes</title>
            </Helmet> */}
            <div className="text-center mt-16">
                <h3 className="text-5xl font-bold my-4">Most Popular Classes</h3>
            </div>
            {/* classes card section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 my-12 mx-auto">
                {/* card start */}
                {
                    classes.map(item => <div key={item.id} className="card w-96 bg-base-100 shadow-xl mb-8">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>)
                }
                {/* card end */}

            </div>
            <div className="flex justify-center items-center">
                <Link to='/classes'><button className='btn btn-primary'>Show More</button></Link>
            </div>
        </>
    );
};

export default Classes;