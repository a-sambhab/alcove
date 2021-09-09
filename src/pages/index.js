import React, {useState} from "react"
import TextTransition, {presets} from "react-text-transition"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Shop from "../components/Shop/Shop"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import Review from "../components/Review/Review"
import '../style/landing.css'
import Preloader from "../components/Preloader"

const Infobox = (props) => {
    return(
        <>
            <div className={props.classn}>
                <span className="infohead">{props.infohead}</span>
                <span className="infocon">{props.infocon}</span>
            </div>
        </>
    );
}
const Infodet = [
    {
        infohead:"$5.2 M",
        infocon:"Worth Revenue",
        classn:"infobox"
    },
    {
        infohead:"5.6K+",
        infocon:"Homes Built",
        classn:"infobox"
    },
    {
        infohead:"200K+",
        infocon:"Happy Clients",
        classn:"infobox"
    },
    {
        infohead:"4.8/5",
        infocon:"Review",
        classn:"infobox last"
    },
]
export default function Home() {
    const Text = [
        "Dynamic",
        "Dreams",
        "Design"
      ];
      const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
  const [state, setstate] = useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setstate(state => state + 1),
            2000 // every 2 seconds
            );
            return () => clearTimeout(intervalId);
        }, []);
  return loading ?(
      <Preloader/>
  ) : (
    <>
    <Layout>
    <Seo
        title="Alcove ISTEBITS"
        description="We provide Design Solutions for Interior Decor"
    />
      <div id="home" className="landing">

    <div className="left-landing">
        <div className="text-box-landing">
            <div className="heading-landing"><h1>ALCOVE</h1></div>
                <div className="subheading-landing">
                    <h2>
                        <TextTransition
                            text={ Text[state % Text.length]}
                            springConfig={presets.gentle}
                        />
                    </h2>
                </div>
        </div>
    <div className="image-box-right-landing"><img className="image-right-landing" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630352710/alcove/landing_2_mtdftd.jpg" alt="landing"></img></div>
    <div className="svg-landingpage-bottomleftdiv"><img className="svg-landingpage-bottomleft" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630684569/alcove/landing_page_left_bottom_f11x1w.svg" alt=""/></div>

</div>

<div className="right-landing">
    <div className="vertical-box-landing">
    <div className="vertical-text"><h1>INTERIOR</h1></div>
    </div>
</div>

<div className="bottom-info">
    {Infodet.map(function map(val){
        return(
            <Infobox
                classn={val.classn}
                infocon={val.infocon}
                infohead={val.infohead}
            />
        );
    })}
</div>
</div>
<About/>
<Services/>
<Shop/>
<Review/>
</Layout>
    </>
  )
}
