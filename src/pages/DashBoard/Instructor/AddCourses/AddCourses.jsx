import { Slide } from "react-awesome-reveal";
import AddCourse from "../../../../components/Forms/AddCourse"


const AddCourses = () => {
    return (
       <Slide triggerOnce>
         <div className="p-2 md:flex md:flex-col justify-center items-center mt-3  md:mt-8">
            <AddCourse></AddCourse>
        </div>
       </Slide>
    );
};

export default AddCourses;