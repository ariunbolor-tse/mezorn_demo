import React from 'react'
import Header from '../components/header';
import Menu from '../components/menu';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Craft from '../components/crafts';
import PhoneCase from '../components/phone_case';
import Interior
 from '../components/interior';
import Contact from '../components/contact';
import Highlight from '../components/highlight';
import Courses from '../components/courses';
import Lars from '../components/lars';
import SocialMedia from '../components/social_media';
import Footer from '../components/footer';
const LandingPage= () => {
    return(
    <>
        <div className='relative bg-orange-100 h-max w-screen overflow-hidden pb-12'>
            <Menu/>
            <Section1/>
            <Section2/>
            <Craft/>
            <PhoneCase/>
            <Interior/>
            <Contact/>
            <Highlight/>
            <Courses/>
            <Lars/>
            <SocialMedia/>
            <Footer/>
            <Header/>
        </div>
    </>
    )
}
export default LandingPage;