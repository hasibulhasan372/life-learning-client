import { Link, NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className=" ">
            <div className="content-con border bg-[#161616] py-4 sm:py-6 md:py-8 lg:py-16 px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-4 lg:gap-12">
                    <div>
                        <Link to="/" className="flex md:gap-3 items-center">
                            <img src="" alt="" />
                            <h2 className="logo-name">Life Learning</h2>
                        </Link>
                        <div className="pl-4 mt-2 md:mt-4">
                            <p className="text-white  py-2 md:py-4">This is platform of learning about different language from the best instructor. To know about the people and about the culture of a country, language is the first thing to know.</p>
                            <ul>
                                <li className="font-semibold text-xl text-green-500">Address: <span className="font-normal text-base text-white">34/2 Banani, Dhaka, Bangladesh</span></li>
                                <li className="font-semibold text-xl text-green-500">Contact: <span className="font-normal text-base text-white">+880187237493</span></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-green-500">Quick Links</h3>

                        <ul className="mt-7 text-white space-y-2">
                            <li><NavLink to="/courses">Courses</NavLink></li>
                            <li><NavLink to="/instructors">Instructors</NavLink></li>
                            <li><NavLink >Blogs</NavLink></li>
                            <li><NavLink >Contact</NavLink></li>
                        </ul>

                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-green-500">Contact</h3>
                        <div className="mt-7">
                            <input type="email" name="email" id="contactEmail" placeholder="Your Email"
                             className="border border-white pl-2 py-1 rounded-md lg:w-2/3 outline-none" />
                             <textarea name="contactMessage" id="contactMessage" cols="32" rows="5"
                             className="border border-white pl-2 py-1 rounded-md lg:w-2/3 outline-none mt-5 block"
                             ></textarea>
                             <input type="submit" value="Submit" className="mt-3 btn btn-info bg-green-500 hover:bg-green-700 hover:text-white capitalize text-lg font-semibold transition duration-500" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;