import { IoMdSearch } from 'react-icons/io';

const SearchBar = () => {
    return (
        <form className='flex items-center gap-1'>
            <input type="text" placeholder='Search Products' name='search' className='max-w-md p-[11px] border border-black rounded-l-md' />
            <button className='btn btn-outline bg-gray-300 rounded-r-md'>
                <IoMdSearch></IoMdSearch>
            </button>
        </form>
    );
};

export default SearchBar;