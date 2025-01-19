import Blogs from "../components/Blogs"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
const BlogsPage = () => {
     window.scrollTo(0, 0);
    return ( <>
    <div className="sm:px-10">

    <Navbar/>
    </div>
    <Blogs/>
    <Footer/>
    </> );
}
 
export default BlogsPage;