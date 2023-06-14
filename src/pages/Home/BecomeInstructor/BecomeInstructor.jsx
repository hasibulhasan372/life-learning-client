import { Fade } from "react-awesome-reveal";


const BecomeInstructor = () => {
    return (
        <Fade delay={1e3} cascade damping={1e-1}>
        <div className="py-6 sm:py-8 md:py-10 lg:py-16">
           <div className="content-con">
               <div>
                   <h2 className="text-lg sm:text-xl md:text3xl lg:text-4xl font-bold text-green-500 text-center">Become an Instructor</h2>
               </div>
              
           </div>

       </div>
      </Fade>
    );
};

export default BecomeInstructor;