import { useState } from "react";
import CourseInHouse from "../components/CourseInHouse";
import CourseLiveOnline from "../components/CourseLiveOnline";
import CourseSelfStudy from "../components/CourseSelfStudy";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CoursesPage = () => {
    const [courseComponent,setCourseComponent] = useState("self-study");
    const handleToggleCourses = (comp) => {
        setCourseComponent(comp);
    }
    return ( <>
    <Navbar/>
    {
        courseComponent === "self-study" && <CourseSelfStudy handleToggleCourses={handleToggleCourses}/>
    }
    {
        courseComponent === "in-house" && <CourseInHouse handleToggleCourses={handleToggleCourses}/>
    }
    {
        courseComponent === "live-online" && <CourseLiveOnline handleToggleCourses={handleToggleCourses}/>
    }
    <Footer/>
    </> );
}
 
export default CoursesPage ;