import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ExplorePage from './components/ExplorePage';
import SatisfactionSection from './components/SatisfationPage';
import OfferingSection from './components/OfferingSection';
import Services from './components/Services';
import LearningSolution from './components/LearningSolution';
import SignIn from './components/SignIn';
import RegisterPage from './components/Register';
function App() {

 return (
  <div >
  <Navbar/>
  <Banner/>
  <OfferingSection/>
  <ExplorePage/>
  <SatisfactionSection/>
  <Services/>
  <LearningSolution/>
  <Footer/>
  <SignIn/>
  <RegisterPage/>
    </div>
 );
}
 
export default App;
