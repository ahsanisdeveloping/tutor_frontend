import React from "react";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ExplorePage from '../components/ExplorePage';
import SatisfactionSection from '../components/SatisfationPage';
import OfferingSection from '../components/OfferingSection';
import Services from '../components/Services';
import LearningSolution from '../components/LearningSolution';
import Carousel from "../components/Carousel";
const LandingPage = () => {
    return (
        <div >
            <div className="sm:px-10">

            <Navbar />
            <Banner />
            <Carousel/>
            <OfferingSection />
            </div>
            
           
            <ExplorePage />
            <div className="sm:px-10">
                
            
            <SatisfactionSection />
            <Services />
            <LearningSolution />
            </div>
           
            <Footer />
        </div>
    )
}
export default LandingPage;