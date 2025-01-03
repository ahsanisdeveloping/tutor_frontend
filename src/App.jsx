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
import TrendingBlogs from './components/Blogs.jsx';
import Blog from './components/Blog';
import PaymentMethod from './components/PaymentMethod';
import Discover from './components/Discover';
import "./i18n.js"
import LandingPage from './pages/LandingPage.jsx';
import CourseSelfStudy from './components/CourseSelfStudy.jsx';
import DiscoverPage from './pages/DiscoverPage.jsx';
import SignUpPage from './pages/SignupPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import BlogsPage from './pages/BlogsPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import Navigations from './routes/Navigations.jsx';
function App() {

 return (
  <div >
    {/* <LandingPage/> */}
    {/* <DiscoverPage/> */}
    {/* <CourseSelfStudy/> */}
    {/* <SignUpPage/> */}
    {/* <SignInPage/> */}
    {/* <BlogsPage/> */}
    {/* <CoursesPage/> */}
    <Navigations/>
    </div>
 );
}
 
export default App;
