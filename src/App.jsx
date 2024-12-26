import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ExplorePage from './components/ExplorePage';
import SatisfactionSection from './components/SatisfationPage';
import OfferingSection from './components/OfferingSection';
function App() {

 return (
  <div >
  <Navbar/>
  <Banner/>
  <OfferingSection/>
  <ExplorePage/>
  <SatisfactionSection/>
  <Footer/>
    </div>
 );
}
 
export default App;
