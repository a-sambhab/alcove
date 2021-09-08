import { Link } from 'gatsby';
import React from 'react';

const Servicecard = (props) => {
    // const scroll = props.scrl
    // const scrolltop = () => {
    //     window.scrollTo(scroll,0)
    // }
    return(
        <>  
            
            <Link style={{textDecoration:"none"}} to="/servicespage" >
            <div className="servicecard">
                <img  alt="serviceimg" src={props.img}/>
                <span>{props.text}</span>
            </div>
            </Link>
        </>
    );
}

export default Servicecard;