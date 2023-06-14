


const PopularInstructorCard = ({instructor}) => {
    const {photo, name, email } = instructor;
    return (
        <div className="text-center space-y-2 sm:text-left pb-4  hover:border hover:border-green-500 transition duration">
            <img src={photo} alt="" className="w-full h-64 object-cover mx-auto sm:mx-0" />
            <div className="pl-2">
            <h2>{name}</h2>
            <h3>Email:{email}</h3>
            </div>
            
        </div>
    );
};

export default PopularInstructorCard;