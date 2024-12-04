import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";



function Header(){
    return (<div className="grid grid-cols-3 h-16 sm:h-20 md:h-24 lg:h-28 bg-black">
        <div className="flex justify-left items-center p-5">
            <h1 className="text-white text-4xl">Onyxx by Design</h1>
        </div>
        <div className="flex col-start-3 text-white items-center justify-end p-10">
        <FontAwesomeIcon icon={faInstagram} size="lg" className="md:text-2xl mr-10" />
        <FontAwesomeIcon icon={faHome} size="lg" className="md:text-2xl" />
        </div>
    </div>)
}


export default Header;