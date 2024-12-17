/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    return (
        <div className="rounded-md border-1 shadow-md">
            <figure>
                <img
                    src={product.imageURL}
                    alt="Product Image"
                    className="w-full h-300 object-cover rounded-t-md" />
            </figure>
            <div className="p-2">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <h2 className="text-lg font-semibold">{product.brand}</h2>
                <h2 className="text-sm">Price: BDT <span className="text-red-600">{product.price}</span></h2>
                <h2 className="text-sm">In Stock : <span className="text-red-600">{product.stock}</span></h2>
                <h2 className="text-sm font-semibold">{product.category}</h2>
                <p className="text-xs mt-4">
                    {product.description.length < 50
                        ? `${product.description}`
                        : `${product.description.slice(0, 50)}...`}
                </p>
                <div className="">
                    <button className="btn mt-4 w-full btn-sm">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;