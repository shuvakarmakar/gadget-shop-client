
const SortByPrice = () => {
    return (
        <select className="p-[11px] select w-40 border-black max-w-md">
            <option value='asc'>Low to High</option>
            <option value='desc'>High to Low</option>
        </select>
    );
};

export default SortByPrice;