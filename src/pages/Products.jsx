const Products = () => {
    return (
        <div className="container mx-auto">
            <h1 className="my-12 text-2xl font-semibold text-center">Products Page</h1>
            {/* Sorting and Searching */}
            <div className="flex justify-between items-center w-full mb-6">
                <h1>Search Bar</h1>
                <h1>Sorting</h1>
            </div>
            {/* content */}
            <div className="grid  grid-cols-12">
                <div className="col-span-2">FilterBar</div>
                <div className="col-span-10">Products</div>
            </div>
        </div>
    );
};

export default Products;