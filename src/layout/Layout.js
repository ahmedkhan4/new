import React from 'react';
import Navbar from './navbar/Navbar';
import MainSection from './main-section/MainSection';
import Footer from './footer/Footer';
const Layout = () => {
    return (
        <>
        {/* This is our Navbar */}
            <div className='container-fluid'>
                        <Navbar />
            </div>
            {/* This is our Main-Section */}
            <div className='container main_section'>
                <div className='row'>
                    <div className='col-lg-12'>
                        {/* <MainSection /> */}
                    </div>
                </div>
            </div>
            {/* This is our Footer */}
            <div className='container-fluid footer'>
                <div className='row'>
                    <div className='col-lg-12'>
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Layout
