import PopularInstructorCard from "../../components/Card/PopularInstructorCard";
import useInstructor from "../../hooks/useInstructor";


const Instructors = () => {
    const [instructors] = useInstructor()
    return (
        <div>
            <div className="py-6 sm:py-8 md:py-10 lg:py-16">
            <div className="content-con">
                <div>
                    <h2 className="text-lg sm:text-xl md:text3xl lg:text-4xl font-bold text-green-500 text-center">Popular Instructors</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 justify-center items-center gap-6 mt-4 md:mt-8 lg:mt-12">
                    {
                        instructors.map(instructor => <PopularInstructorCard instructor={instructor} key={instructor._id}></PopularInstructorCard>)
                    }
                </div>
            </div>

        </div>
        </div>
    );
};

export default Instructors;