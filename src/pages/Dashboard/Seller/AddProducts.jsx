import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const AddProducts = () => {
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();




    const onSubmit = (data) => {
        const title = data.title;
        const brand = data.brand;
        const price = parseFloat(data.price);
        const stock = parseFloat(data.stock);
        const category = data.category;
        const imageURL = data.imageURL;
        const description = data.description;
        const sellerEmail = user.email;


        const product = {
            title,
            brand,
            price,
            stock,
            category,
            imageURL,
            description,
            sellerEmail
        };
        const token = localStorage.getItem("access-token");

        axios.post("http://localhost:4000/add-products", product, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };




    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-12">Add Products</h1>

            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex gap-8 w-full">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Title"
                            className="w-full p-2 border border-black rounded-md"
                            {...register("title", { required: "Title is required" })}
                        />
                        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Brand</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Brand"
                            className="w-full p-2 border border-black rounded-md"
                            {...register("brand", { required: "Brand name is required" })}
                        />
                        {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}

                    </div>
                </div>
                <div className="lg:flex gap-8 w-full">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            className="w-full p-2 border border-black rounded-md"
                            {...register("price", { required: "Price is required" })}
                        />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}

                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Stock"
                            className="w-full p-2 border border-black rounded-md"
                            {...register("stock", { required: "Stock is required" })}
                        />
                        {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}

                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Category"
                            className="w-full p-2 border border-black rounded-md"
                            {...register("category", { required: "Category is required" })}
                        />
                        {errors.category && <p className="text-red-500">{errors.category.message}</p>}

                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Image"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("imageURL", { required: "Image URl is required" })}
                    />
                    {errors.imageURL && <p className="text-red-500">{errors.imageURL.message}</p>}

                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Product Description"
                        className="w-full p-2 border border-black rounded-md"
                        {...register("description", { required: "Description is required" })}
                    />
                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                </div>
                <div className="my-8">
                    <button type="submit" className="btn btn-primary w-full">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;