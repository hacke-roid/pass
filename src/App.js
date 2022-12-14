import { useState } from "react";
import SearchBar from "./SearchBar";
import './SearchBar.css';

function App() {
    const [count, setCount]= useState(0);

    const handleClick = () => {
        setCount(count+1);
        console.log('button clicked');
    };

    return(
        <div >
        
            <SearchBar/>
        
        
            <button onClick={handleClick}>Add Animals</button>
            <div>Number {count}</div>
        
        </div>
    );
}

export default App;