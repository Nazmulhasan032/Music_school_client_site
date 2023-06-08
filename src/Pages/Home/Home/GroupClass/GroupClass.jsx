
import img1 from '../../../../assets/group/kid.png';
import img2 from '../../../../assets/group/teen.png';
import img3 from '../../../../assets/group/adult.png';

const GroupClass = () => {
    return (
        <div>
             <div className="text-center mt-16">
                <h3 className="text-5xl font-bold">Music Group</h3>
                <h3 className="text-2xl font-bold my-4">for</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-12 mx-auto">
                 {/* card start */}
                 <div className="w-96 mx-auto my-16">
                    <figure>
                        <img src={img1} alt="Shoes" className="rounded-full h-64 w-64 mx-auto" />
                    </figure>
                    <div className="text-center mt-12">
                        <h2 className="text-3xl ">Kids</h2>
                        <p className="mt-2">Our school is a solution for families who would like to expose their children to the world of music.</p>
                    </div>
                </div>
                {/* card end */}
                 {/* card start */}
                 <div className="w-96 mx-auto my-16">
                    <figure>
                        <img src={img2} alt="Shoes" className="rounded-full h-64 w-64 mx-auto" />
                    </figure>
                    <div className="text-center mt-12">
                        <h2 className="text-3xl ">Teens</h2>
                        <p className="mt-2">Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
                    </div>
                </div>
                {/* card end */}
                 {/* card start */}
                 <div className="w-96 mx-auto my-16">
                    <figure>
                        <img src={img3} alt="Shoes" className="rounded-full h-64 w-64 mx-auto" />
                    </figure>
                    <div className="text-center mt-12">
                        <h2 className="text-3xl ">Adults</h2>
                        <p className="mt-2">We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
                    </div>
                </div>
                {/* card end */}

            </div>
        </div>
    );
};

export default GroupClass;