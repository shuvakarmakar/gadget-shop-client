import { useEffect, useState } from "react";
import FilterBar from "../components/Products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [allproducts, setAllproducts] = useState([]); // Array to store products
    const [loading, setLoading] = useState(false); // Loading state
    const [search, setSearch] = useState(""); // Search query
    const [sort, setSort] = useState("asc"); // Sorting order
    const [brand, setBrand] = useState(""); // Brand filter
    const [category, setCategory] = useState(""); // Category filter
    const [uniqueBrand, setUniqueBrand] = useState([]); // Unique brands list for filter
    const [uniqueCategory, setUniqueCategory] = useState([]); // Unique categories list for filter

    useEffect(() => {
        setLoading(true);
        const fetch = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`);
                // console.log(response.data); // Log the response to inspect
                // Set the state with the products, brands, and categories
                setAllproducts(response.data.products || []);  // Use products from response
                setUniqueBrand(response.data.brands || []);    // Use brands from response
                setUniqueCategory(response.data.categories || []); // Use categories from response
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setAllproducts([]); // Safe fallback in case of error
                setLoading(false);
            }
        };

        fetch();
    }, [search, sort, brand, category]); // Dependencies for refetching when state changes

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = ""; // Clear the search input
    };

    const handleReset = () => {
        setBrand("");
        setCategory("");
        setSearch("");
        setSort("asc");
        window.location.reload(); // Reset and reload the page
    };

    return (
        <div className="container mx-auto">
            <h1 className="my-12 text-2xl font-semibold text-center">Products Page</h1>

            {/* Sorting and Searching */}
            <div className="flex justify-between items-center w-full mb-6">
                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />
            </div>

            {/* content */}
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2">
                    <FilterBar
                        setCategory={setCategory}
                        setBrand={setBrand}
                        handleReset={handleReset}
                        uniqueBrand={uniqueBrand}
                        uniqueCategory={uniqueCategory}
                    />
                </div>

                {/* Products */}
                <div className="col-span-10">
                    {
                        loading ? (
                            <Loading />
                        ) : (
                            <>
                                {
                                    allproducts.length === 0 ? (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <h1 className="text-3xl font-bold">No Products Found</h1>
                                        </div>
                                    ) : (
                                        <div className="min-h-screen grid grid-cols-3 gap-2">
                                            {
                                                allproducts.map(product => (
                                                    <ProductCard product={product} key={product._id} />
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;
