import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BlogsPage from "../pages/BlogsPage";
import DiscoverPage from "../pages/DiscoverPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignupPage";
import CoursesPage from "../pages/CoursesPage";
const   Navigations = () => {
  return <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage/>} />
                <Route exact path="/blogs" element={<BlogsPage/>} />
                <Route exact path="/discover" element={<DiscoverPage/>} />
                <Route exact path="/signin" element={<SignInPage/>} />
                <Route exact path="/signup" element={<SignUpPage/>} />
                <Route exact path="/courses" element={<CoursesPage/>} />
            </Routes>
      </BrowserRouter>
  </>;
};

export default Navigations;
