import { useEffect, useState } from "react";
import FilterBar from "../components/Products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [Products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("asc")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")

    // console.log(brand, category, search, sort);


    useEffect(() => {
        setLoading(true);
        const fetch = async () => {
            axios.get(`http://localhost:4000/all-products`).then((res) => {
                setProducts(res.data);
                setLoading(false)
            })
        }

        fetch();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = "";
    }

    const handleReset = () => {
        setBrand("");
        setCategory("");
        setSearch("");
        setSort("asc");
        window.location.reload();
    }



    return (
        <div className="container mx-auto">
            <h1 className="my-12 text-2xl font-semibold text-center">Products Page</h1>
            {/* Sorting and Searching */}
            <div className="flex justify-between items-center w-full mb-6">
                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />
            </div>
            {/* content */}
            <div className="grid  grid-cols-12 gap-2">
                <div className="col-span-2">
                    <FilterBar setCategory={setCategory} setBrand={setBrand} handleReset={handleReset} />
                </div>
                {/* Products */}
                <div className="col-span-10">
                    {
                        loading ? (
                            <Loading></Loading>
                        ) : (
                            <>
                                {
                                    Products.length === 0 ? <div>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <h1 className="text-3xl font-bold">No Products Found</h1>
                                        </div>
                                    </div> : <div className="min-h-screen grid grid-cols-3 gap-2">
                                        {
                                            Products.map(product => (
                                                <ProductCard key={product.objectId} product={product} />
                                            ))
                                        }
                                    </div>
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