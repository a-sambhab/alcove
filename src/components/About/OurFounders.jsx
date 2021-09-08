import React from 'react';

const Aboutfoun = (props) => {
    return(
        <div className="founcard">
            <div className="founcon">
                <div className="founimg"><img alt="founimage" src={props.founimg}/></div>
                <div className="founcontent">
                    <h3>{props.name}<br/><span>{props.desig}</span></h3>
                </div>
            </div>
            <ul className="sci">
                <li className="githubic">    
                    <a href={props.gith}><img alt="founimage" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                </li>
                <li className="instaic">
                    <a href={props.insta}><img alt="founimage" src="https://cdn.icon-icons.com/icons2/2719/PNG/512/instagram_logo_icon_175119.png"/></a>
                </li>
                <li className="linkedic">
                    <a href={props.linked}><img alt="founimage" src="https://cdn-icons-png.flaticon.com/512/61/61109.png"/></a>
                </li>
            </ul>
        </div>
    );
}

const Foundata = [
    {
        founimg:"https://res.cloudinary.com/webwiznitr/image/upload/v1628923043/webwiz-portfolio/team-images/team-webwiz/sai%20sambhav%20chaini.jpg",
        name:"Sai Sambhab Chaini",
        desig:"Co-Founder",
        gith:"https://github.com/a-sambhab",
        insta:"https://www.instagram.com/a_sambhab/",
        linked:"https://www.linkedin.com/mwlite/in/sai-sambhab-chaini-1a5877210"
    },
    {
        founimg:"https://res.cloudinary.com/webwiznitr/image/upload/v1628944049/webwiz-portfolio/team-images/team-webwiz/kumar%20shantanu.jpg",
        name:"Kumar Shantanu",
        desig:"Co-Founder",
        gith:"https://github.com/kumarshantanu01",
        insta:"https://www.instagram.com/kumar_shantanu_01/",
        linked:"https://www.linkedin.com/in/kumar-shantanu01/"
    }
]

const OurFounders = () => {
    return(
        <>
            <div className="our-founders">
                <div className="text-ourfounder">
                    <div className="heading-ourfounder">
                        <h1>OUR</h1>
                        <h1>FOUNDERS</h1>
                    </div>
                </div>
                <div className="aboutfoun">
                    {Foundata.map(function ncards(val){
                        return(
                            <Aboutfoun
                                founimg={val.founimg}
                                name={val.name}
                                desig={val.desig}
                                gith={val.gith}
                                insta={val.insta}
                                linked={val.linked}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default OurFounders;