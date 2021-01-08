import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <form className="input-group">
             <input 
                className="input"
                maxLength={props.maxLength}
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                value={props.value}
                onChange={(event) => props.search(event.target.value)} />
        </form>
    );
};

export default Search;
