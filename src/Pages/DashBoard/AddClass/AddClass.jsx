
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const AddClass = () => {
    const [axiosSecure]= useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const img_token = import.meta.env.VITE_image_token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_token}`


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, teacher, available_seat, price} = data;
                    const newItem = {name, teacher, available_seat, price, image: imgURL}
                    console.log(newItem);
                    axiosSecure.post('/allclass', newItem)
                    .then(data =>{
                        if(data.data.insertedId){
                            reset();
                            alert('Class added successfully');
                        }
                    })
                }
            })

    };
    console.log(img_token);




    return (
        <div>
            <Helmet>
                <title>
                    Academy | Add new class
                </title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        name="name"
                        placeholder="Class name"
                        className="input input-bordered"
                    />
                    {errors.name && <span className="text-red-600">Please Enter Class name</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Teacher Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("teacher", { required: true })}
                        name="teacher"
                        placeholder="Teacher name"
                        className="input input-bordered"
                    />
                    {errors.teacher && <span className="text-red-600">Please Enter Teacher name</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available_seats</span>
                    </label>
                    <input
                        type="number"
                        {...register("available_seat", { required: true })}
                        name="available_seat"
                        placeholder="available_seat number"
                        className="input input-bordered"
                    />
                    {errors.available_seat && <span className="text-red-600">Please Enter Seat number</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        name="price"
                        placeholder="price"
                        className="input input-bordered"
                    />
                    {errors.price && <span className="text-red-600">Please Enter Price</span>}
                </div>
                <div className='my-4'>
                    <h2>Select image</h2>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;