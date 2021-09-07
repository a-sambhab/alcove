import React from 'react';

const Servicecard = (props) => {
    return(
        <>  
            <div className="servicecard">
                <img  alt="serviceimg" src={props.img}/>
                <span>{props.text}</span>
            </div>
        </>
    );
}

export default Servicecard;