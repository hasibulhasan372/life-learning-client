import useSelectCourse from "../../../../hooks/useSelectCourse";


const SelectedCourses = () => {
    const [selectCourses] = useSelectCourse()
    return (
        <div>
            <h2>{selectCourses.length}</h2>
        </div>
    );
};

export default SelectedCourses;