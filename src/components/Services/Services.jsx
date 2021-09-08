import React from 'react';
import './services.css';
import Servicecard from './Servicecard';

const Servdata = [
    {
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630335984/alcove/SERVICES_1_cwicic.jpg",
        text:"furnishing"
    },
    {
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630335974/alcove/SERVICES_2_ckhnkl.jpg",
        text:"consulting"
    },
    {
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630336129/alcove/SERVICES_3_ijmtfu.jpg",
        text:"renovation"
    }
]

const Services = () => {
    return(
        <>
            <div className="service" >
                <div className="servicehead">
                    <h1>SERVICES</h1>
                <div className="svg-servicesection-topleftdiv"><img classname="svg-servicesection-topleft" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630684569/alcove/orange_top_left_z7kpbg.svg" alt=""/></div>
                {/* <div className="svg-servicesection-toprightdiv"><img classname="svg-servicesection-topright" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630690494/alcove/orange_top_right_dp4bdh.svg" alt=""/></div> */}
                </div>
                <div className="servicecon">
                    {Servdata.map(function ncards(val){
                        return(
                        <Servicecard
                            img={val.img}
                            text={val.text}
                        />
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Services;