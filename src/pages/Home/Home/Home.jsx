import { useLocation } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import PopularCourses from "../PopularCourses/PopularCourses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import { useEffect } from "react";


const Home = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <>
      <HeroSection></HeroSection>
      <PopularCourses></PopularCourses>
      <PopularInstructor></PopularInstructor>
    </>
  );
};

export default Home;