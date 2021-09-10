import React, {useState, useEffect} from 'react';
import Typist from 'react-typist';
import './about.css'
import { Link } from 'gatsby';

const About = () => {
    // const scrolltop = () => {
    //     window.scrollTo(0,0);
    // }
    const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
    return(
        <>
            <div id="about" className="aboutsection">
                <div className="aboutleft">
                    <img id="about1" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631268365/Alcove%20spider/about1_vldgeq.jpg" alt="about1"/>
                    <img id="about2" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631270773/Alcove%20spider/home_1_vomyji.jpg" alt="about2"/>
                    <img id="about3" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631268365/Alcove%20spider/about_3_zhzsgy.jpg" alt="about3"/>
                    <img id="about4" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631268365/Alcove%20spider/about_4_c6l551.jpg" alt="about4"/>
                    <div className="aboutdesign"></div>
                </div>
                    <div className="svg-aboutsection-topleftdiv"><img classname="svg-aboutsection-topleft" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630684569/alcove/orange_top_left_z7kpbg.svg" alt=""/></div>
                <div className="aboutright">
                    <div className="heading-landing-about-head"><h1>dreaming since 2021 </h1></div>
                    <div className="underline"></div>
                    <div className="aboutcon">
                    {count ? (
                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                            <span>we build dreams</span>
                            <Typist.Backspace count={20} delay={800} />
                            <span>we build homes</span>
                            <Typist.Backspace count={20} delay={800} />
                        </Typist>
                    ) : (
                    ""
                    )}
                    </div>
                    {/* <Link className="knowmoreabout" style={{textDecoration: "none", color: "#32564C"}} to='/aboutpage' onClick={scrolltop}>
                    <button >  Know More </button>
                    </Link> */}
                    <Link  to="/aboutpage">
                        <button className="knowmoreabout">Know More</button>
                    </Link>
                </div>
            
            
            </div>
        </>
    );
}

export default About;