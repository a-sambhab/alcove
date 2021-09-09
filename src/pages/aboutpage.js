import React from 'react';
import '../style/Aboutpage.css';
import Layout from '../components/Layout';
import AboutTop from '../components/About/AboutTop';
import AboutCompany from '../components/About/AboutCompany';
import OurDesigners from '../components/About/OurDesigners';
import LatestProjects from '../components/About/LatestProjects';
import OurFounders from '../components/About/OurFounders';
import { Seo } from '../components/Seo';

const AboutPage = () => {
    return(
        <>
        <Layout>
        <Seo
            title="About || Alcove ISTEBITS"
            description="Know more about Alcove"
        />
            <AboutTop />
            <AboutCompany/>
            <OurDesigners/>
            <LatestProjects/>
            <OurFounders/>
        </Layout>
        </>
    );
};

export default AboutPage;