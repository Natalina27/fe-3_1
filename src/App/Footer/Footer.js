import React from 'react';

const Footer = (props) => {
    return(
        <div className='app-header'>
            This is Footer {props.version}
            <ul>
                {props.menu.map(el => <li key={el}>{el}</li>)}
            </ul>
        </div>
    )
};

export default Footer;