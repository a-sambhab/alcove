import React from 'react';
import './services.css';
import Servicecard from './Servicecard';

const Servdata = [
    {
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631267986/Alcove%20spider/services01_t0ai8u.jpg",
        text:"furnishing"
    },
    {
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631267987/Alcove%20spider/services02_jqla72.jpg",
        text:"consulting"
    },
    {
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631267986/Alcove%20spider/services03_2_ifn9bk.jpg",
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