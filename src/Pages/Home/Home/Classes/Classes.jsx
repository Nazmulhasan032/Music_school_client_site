import { useEffect, useState } from 'react';

const Classes = () => {

    const [classes, setClasses] = useState([]);
    useEffect( ()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    } ,[])


    return (
        <>
            <div className="text-center mt-16">
                <h3 className="text-5xl font-bold my-4">Most Popular Classes</h3>
            </div>
            {/* classes card section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 my-12 mx-auto">
                {/* card start */}
                {
                    classes.map( item=> <div key={item.id} className="card w-96 bg-base-100 shadow-xl mb-8">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>)
                }
                {/* card end */}

            </div>
        </>
    );
};

export default Classes;