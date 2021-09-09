import React from 'react';
import Layout from '../components/Layout'
import { Seo } from '../components/Seo';
import '../style/ServicesPage.css';

const Servdata = [
    {
        secclass:"topsection-section1",
        secclass1:"heading-leftsection-section1",
        secclass2:"heading-textbox-rightsection-section1",
        secname:"FURNISHING",
        secsub:"We help you to make your house stand out just by furnishing it.",
        item1:"It's Transparent",
        item1def:"All the furnishing is done without any HIDDEN costs",
        item2:"It's cost-effective",
        item2def:"We connect you to local vendors with the best quality",
        item3:"It fits your needs",
        item3def:"All work is supervised by the person it should matter: YOU",
        secimg:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630916434/alcove/pexels-dayvison-de-oliveira-silva-5696287_2_tihdsc.png"
    },
    {
        secclass:"topsection-section2",
        secclass1:"heading-leftsection-section2",
        secclass2:"heading-textbox-rightsection-section2",
        secname:"CONSULTING",
        secsub:"We consult you on making the best use of your space",
        item1:"It's Transparent",
        item1def:"All the furnishing is done without any HIDDEN costs",
        item2:"It's cost-effective",
        item2def:"We connect you to local vendors with the best quality",
        item3:"It fits your needs",
        item3def:"All work is supervised by the person it should matter: YOU",
        secimg:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630916434/alcove/pexels-dayvison-de-oliveira-silva-5696287_2_tihdsc.png"
    },
    {
        secclass:"topsection-section1",
        secclass1:"heading-leftsection-section1",
        secclass2:"heading-textbox-rightsection-section1",
        secname:"RENOVATION",
        secsub:"Renovation is a major part for anyone and we make sure it is best",
        item1:"It's Transparent",
        item1def:"All the furnishing is done without any HIDDEN costs",
        item2:"It's cost-effective",
        item2def:"We connect you to local vendors with the best quality",
        item3:"It fits your needs",
        item3def:"All work is supervised by the person it should matter: YOU",
        secimg:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630916434/alcove/pexels-dayvison-de-oliveira-silva-5696287_2_tihdsc.png"
    },
]

const Servicesec = (props) => {
    return(
            <div className="section1-servicespage">
                <div className={props.secclass}>
                    <div className="leftsection-section1">
                        <div className="textbox-leftsection-section1">
                            <div className={props.secclass1}>{props.secname}</div>
                            <div style={{textAlign:"center"}} className="subheading-leftsection-section1">{props.secsub}</div>
                        </div>
                    </div>
                    <div className="rightsection-section1">
                        <div className="textbox-rightsection-section1">
                            <div className="textbox-text-rightsection-section1">
                                <div style={{textAlign:"center"}} className={props.secclass2}>{props.item1}</div>
                                <div style={{textAlign:"center"}} className="subheading-textbox-rightsection-section1">{props.item1def}</div>
                            </div>
                            <div className="textbox-text-rightsection-section1">
                                <div style={{textAlign:"center"}} className={props.secclass2}>{props.item2}</div>
                                <div style={{textAlign:"center"}} className="subheading-textbox-rightsection-section1">{props.item2def}</div>
                            </div>
                            <div className="textbox-text-rightsection-section1">
                                <div style={{textAlign:"center"}} className={props.secclass2}>{props.item3}</div>
                                <div style={{textAlign:"center"}} className="subheading-textbox-rightsection-section1">{props.item3def}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomsection-section1">
                    <div className="image-box-bottomsection-section1">
                         <img className="image-bottomsection-section1" src={props.secimg} alt="aboutpage"/>
                    </div>
                </div>
            </div>
);
}

const ServicesPage =() => {
    return (
        <Layout>
        <Seo
            title="Services || Alcove ISTEBITS"
            description="List of all services provided by ALCOVE"
        />
        <div className="servicespage">
            <div className="topsection-servicespage">
                <div className="image-box-topsection-servicespage">
                <img className="image-top-servicespage" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630394917/alcove/aboutpage_image_2_imqvie.png" alt="aboutpage"/>
                </div>
                <h1>Services </h1>
            </div>

            {
                Servdata.map(function scard(val){
                    return(
                    <Servicesec
                        secclass={val.secclass}
                        secclass1={val.secclass1}
                        secclass2={val.secclass2}
                        secname={val.secname}
                        secsub={val.secsub}
                        secimg={val.secimg}
                        item1={val.item1}
                        item1def={val.item1def}
                        item2={val.item2}
                        item2def={val.item2def}
                        item3={val.item3}
                        item3def={val.item3def}
                    />
                    )
                })
            }

            

            

            {/* <div className="section1-servicespage">
                <div className="topsection-section2">
                    <div className="leftsection-section1">
                        <div className="textbox-leftsection-section1">
                            <div className="heading-leftsection-section2">SPECIAL</div>
                            <div className="subheading-leftsection-section1">We help you do furnishing.We help you do furnishing.</div>
                        </div>
                    </div>
                    <div className="rightsection-section1">
                        <div className="textbox-rightsection-section1">
                            <div className="textbox-text-rightsection-section1">
                                <div class="heading-textbox-rightsection-section2">It's Transparent</div>
                                <div class="subheading-textbox-rightsection-section1">We help you do furnishing.We help you do furnishing.</div>
                            </div>
                            <div className="textbox-text-rightsection-section1">
                                <div class="heading-textbox-rightsection-section2">It's cost-effective</div>
                                <div class="subheading-textbox-rightsection-section1">We help you do furnishing.We help you do furnishing.</div>
                            </div>
                            <div className="textbox-text-rightsection-section1">
                                <div class="heading-textbox-rightsection-section2">It fits your needs</div>
                                <div class="subheading-textbox-rightsection-section1">We help you do furnishing.We help you do furnishing.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomsection-section1">
                    <div className="image-box-bottomsection-section1">
                         <img className="image-bottomsection-section1" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630916434/alcove/pexels-dayvison-de-oliveira-silva-5696287_2_tihdsc.png" alt="aboutpage"/>
                    </div>
                </div>
            </div> */}
            
        </div>
         </Layout>
    )
}

export default ServicesPage;