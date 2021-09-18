import React from 'react';
import Shopcard from '../components/Shop/Shopcard';
import Layout from '../components/Layout';
import { Seo } from '../components/Seo';
import "../style/shoppage.css";

const Lightdata = [
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$35.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Solar Light",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982129/Alcove%20spider/more-lighting-products_2_wxjh9w.png",
        pricea:"$30.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Pendent Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982130/Alcove%20spider/81KIJU4JwfL._SL1500_-removebg-preview_chvffw.png",
        pricea:"$27.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Colson Pendant",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982130/Alcove%20spider/Interior-Design-Euroluce-Brokis-removebg-preview_veapbm.png",
        pricea:"$86.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Socket Bulbs",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982131/Alcove%20spider/719hNBdAiPL._AC_SX500_SY500_-removebg-preview_gok5qb.png",
        pricea:"$45.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Multi Lamps",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982215/Alcove%20spider/images__3_-removebg-preview_etwxbd.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    }
]

const Furniture = [
    {
        name:"Wall Clock",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982441/Alcove%20spider/image-removebg-preview_4_f3bph0.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Glass Mirrors",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982442/Alcove%20spider/image-removebg-preview_3_ezlnsm.png",
        pricea:"$38.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Monet Bird",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982443/Alcove%20spider/image-removebg-preview_dovqnn.png",
        pricea:"$54.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Rosemary Plant",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982443/Alcove%20spider/image-removebg-preview_2_wrilif.png",
        pricea:"$30.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Vintage Candle",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982444/Alcove%20spider/image-removebg-preview_1_tsxgkx.png",
        pricea:"$44.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Money Plant",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982444/Alcove%20spider/image-removebg-preview_5_jz7npm.png",
        pricea:"$56.",
        priceb:"99",
        back:"#32564C"
    }
]
const Decordata = [
    {
        name:"Circular Sofa",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982876/Alcove%20spider/image-removebg-preview_11_vglvhd.png",
        pricea:"$140.",
        priceb:"99",
        back:"#97ABA6"
    },
    {
        name:"Lounge Chair",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982444/Alcove%20spider/image-removebg-preview_6_gixksv.png",
        pricea:"$170.",
        priceb:"99",
        back:"#97ABA6"
    },
    {
        name:"Sheesam Sofa",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982877/Alcove%20spider/image-removebg-preview_9_tbofwa.png",
        pricea:"$380.",
        priceb:"99",
        back:"#97ABA6"
    },
    {
        name:"Maurice Table",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982876/Alcove%20spider/image-removebg-preview_7_ka5uue.png",
        pricea:"$470.",
        priceb:"99",
        back:"#97ABA6"
    },
    {
        name:"Seaward Sofa",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982876/Alcove%20spider/image-removebg-preview_10_gwjmga.png",
        pricea:"$280.",
        priceb:"99",
        back:"#97ABA6"
    },
    {
        name:"Charlie Chair",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631982876/Alcove%20spider/image-removebg-preview_8_m9j7xb.png",
        pricea:"$440.",
        priceb:"99",
        back:"#97ABA6"
    }
]

const ShopPage = () => {
    return(
        <>
        <Layout>
        <Seo
            title="Shop || Alcove ISTEBITS"
            description="Shop from a range of assorted Decor Products"
        />
            <div className="shoplanding">
            <div className="topsection-servicespage">
                <div className="image-box-topsection-servicespage">
                <img className="image-top-servicespage" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631271061/Alcove%20spider/pexels-vecislavas-popa-1571460_xbrc6x.jpg" alt="aboutpage"/>
                </div>
                <h1>Decor Shop </h1>
            </div>
            </div>
                <div className="lightprods">
                    <div className="shoplandhead">
                        <h1>Light Products</h1>
                    </div>
                    <div className="lightsec">
                        {Lightdata.map(function ncards(val){
                            return(
                                <Shopcard
                                    name={val.name}
                                    img={val.img}
                                    pricea={val.pricea}
                                    priceb={val.priceb}
                                    back={val.back}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="decorprods">
                    <div className="shoplandhead">
                        <h1>Furniture</h1>
                    </div>
                    <div className="decorsec">
                        {Decordata.map(function ncards(val){
                            return(
                                <Shopcard
                                    name={val.name}
                                    img={val.img}
                                    pricea={val.pricea}
                                    priceb={val.priceb}
                                    back={val.back}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="furniture">
                    <div className="shoplandhead">
                        <h1>Decor Products</h1>
                    </div>
                    <div className="furnsec">
                        {Furniture.map(function ncards(val){
                            return(
                                <Shopcard
                                    name={val.name}
                                    img={val.img}
                                    pricea={val.pricea}
                                    priceb={val.priceb}
                                    back={val.back}
                                />
                            )
                        })}
                    </div>
                </div>
                </Layout>
        </>
    );
};

export default ShopPage;