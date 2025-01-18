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
        <div>
            <Navbar />
            <Banner />
            <Carousel/>
            <OfferingSection />
            <ExplorePage />
            <SatisfactionSection />
            <Services />
            <LearningSolution />
            <Footer />
        </div>
    )
}
export default LandingPage;