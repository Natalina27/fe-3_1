import React from 'react';
import MenuItem from "../MenuItem/MenuItem";

const Header = (props) => {
    return(
        <div className='app-header'>
            This is Header {props.v}
            <ul>
                {props.menu.map(el => <li key={el}>{el}</li>)}
            </ul>
            <ul>
                {props.list.map(el => <MenuItem key={el} item={el} />)}
            </ul>
        </div>
    )
};

export default Header;