/* eslint-disable react/prop-types */
import { IoMdSearch } from 'react-icons/io';

const SearchBar = ({handleSearch}) => {
    return (
        <form className='flex items-center gap-1' onSubmit={handleSearch}>
            <input type="text" placeholder='Search Products' name='search' className='max-w-md p-[11px] border border-black rounded-l-md' />
            <button className='btn btn-outline bg-gray-300 rounded-r-md'>
                <IoMdSearch></IoMdSearch>
            </button>
        </form>
    );
};

export default SearchBar;