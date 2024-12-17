
const SortByPrice = ({ setSort }) => {
    return (
        <select className="p-[11px] select w-40 border-black max-w-md"
            onChange={(e) => setSort(e.target.value)}>
            <option value='asc'>Low to High</option>
            <option value='desc'>High to Low</option>
        </select>
    );
};

export default SortByPrice;