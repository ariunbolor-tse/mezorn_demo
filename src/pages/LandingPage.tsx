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
        <div className='bg-orange-100 h-full pb-12'>
            <Header/>
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
        </div>
    </>
    )
}
export default LandingPage;