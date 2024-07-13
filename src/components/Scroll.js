// eslint-disable-next-line no-unused-vars
import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '4px solid #151515', height: '800px'}}>
            {props.children}
        </div>
    )
}
export default Scroll;