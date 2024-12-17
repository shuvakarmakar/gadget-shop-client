/* eslint-disable react/prop-types */
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({ setBrand, setCategory, handleReset, uniqueBrand, uniqueCategory }) => {
    return (
        <div className='bg-gray-200 h-full min-h-screen p-4 rounded-t-md'>
            <div className='flex items-center gap-1'>
                <TbFilter size={24} />
                <h2 className='font-semibold text-xl'>Filters</h2>
            </div>
            <div className="mt-8 flex flex-col items-center gap-2">
                <div className="w-full">
                    <select className="p-[11px] select w-full border-black max-w-md" onChange={(e) => setBrand(e.target.value)}>

                        <option value="">Brands</option>
                        {uniqueBrand.map((brand) =>
                            <option key={brand} value={brand}>
                                {brand}
                            </option>)}
                    </select>
                </div>
                <div className="w-full">
                    <select className="p-[11px] select w-full border-black max-w-md" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Categories</option>
                        {uniqueCategory.map((category) =>
                            <option key={category} value={category}>
                                {category}
                            </option>)}
                    </select>
                </div>
                <button className="btn w-full mt-4 btn-outline btn-primary flex items-center" onClick={handleReset}>
                    <p>Reset</p>
                    <GrPowerReset>
                    </GrPowerReset>
                </button>
            </div>
        </div>
    );
};

export default FilterBar;