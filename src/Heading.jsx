import React from 'react';

const Heading = (props) => {
    return <h3 className='card__title'>{props.sname}</h3>;
    // <h3 title={props.sname} className='card__title'/>;

};

export default Heading;