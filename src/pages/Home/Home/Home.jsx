import BecomeInstructor from "../BecomeInstructor/BecomeInstructor";
import HeroSection from "../HeroSection/HeroSection";
import PopularCourses from "../PopularCourses/PopularCourses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {

  return (
    <>
      <HeroSection></HeroSection>
      <PopularCourses></PopularCourses>
      <PopularInstructor></PopularInstructor>
      <BecomeInstructor></BecomeInstructor>
    </>
  );
};

export default Home;