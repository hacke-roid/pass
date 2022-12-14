import './SearchBar.css';
import { IconButton } from 'rsuite';

function SearchBar() {
    return(
        <div className="searchbar">
        <div>
            <IconButton/>
        </div>
            <input className="inputStyle" placeholder='Search'/>
        </div>
    );
}

export default SearchBar;