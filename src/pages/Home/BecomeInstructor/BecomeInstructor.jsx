import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const BecomeInstructor = () => {
    return (
        <Fade delay={1e3} cascade damping={1e-1}>
            <div className="py-6 sm:py-8 md:py-10 lg:py-16">
                <div className="content-con">

                    <div className=" flex flex-col-reverse lg:flex lg:flex-row items-center lg:gap-32">
                        <img src="https://i.ibb.co/kKXXVHP/instructor-1x-v3.jpg" alt="" className="px-2" />
                        <div className=" text-center lg:text-left lg:pr-24">
                            <h2 className="text-lg sm:text-xl md:text3xl lg:text-4xl font-bold text-green-500">Become an Instructor</h2>
                            <p className="text-lg lg:pt-6 ">Instructors from around the world teach millions of students on Life Learning. We provide the tools and skills to teach what you love.</p>
                            <Link to='/instructors' className="mt-3 lg:mt-6 btn text-white capitalize text-lg bg-gradient-to-r from-purple-500 to-red-500">Visit Our Instructors</Link>
                        </div>
                    </div>

                </div>

            </div>
        </Fade>
    );
};

export default BecomeInstructor;