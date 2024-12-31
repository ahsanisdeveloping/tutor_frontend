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
import TrendingBlogs from './components/BlogsPage';
import Blog from './components/Blog';
import PaymentMethod from './components/PaymentMethod';
import Discover from './components/Discover';
import "./i18n.js"
function App() {

 return (
  <div >
  <Navbar/>
  {/* <Banner/> */}
  {/* <OfferingSection/> */}
  {/* <ExplorePage/> */}
  {/* <SatisfactionSection/> */}
  {/* <Services/> */}
  {/* <LearningSolution/> */}
  {/* <SignIn/> */}
  {/* <RegisterPage/> */}
  {/* <TrendingBlogs/> */}
  {/* <Blog/> */}
  {/* <PaymentMethod/> */}
  <Discover/>
  <Footer/>

    </div>
 );
}
 
export default App;
