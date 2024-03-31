import LogoAndName from "../assets/logo/logoandname.png";
import { useLocation } from 'react-router-dom';
import Button from "./Button.jsx"

const Header = () => {

    const navStyles =  
     "text-white leading-5 px-6 py-6 text-xs block relative font-mono uppercase text-2xl transition-colors hover:text-sky-400";
    
    const navStylesButton=  
     "rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white leading-5 px-6 py-6 text-xs block relative font-mono uppercase text-2xl transition-colors hover:text-sky-400";

    const divStyle = {
        marginBottom: "1rem"
    }

    return (
        <div style={divStyle} className="fixed top-0 left-0 w-full z-50 bg-neutral-950 backdrop-blur-sm border-b w-full">
            <div className="flex items-center px-5 justify-between"> 
                <a href="#home" className="flex items-center px-5">
                    <img src={LogoAndName} alt="Logo" width={190} height={40}/>
                </a>
                <nav className="ml-10 flex items-center">
                    <a href="#features" className={navStyles}>Features</a>
                </nav>
                <div className="flex items-center px-5">
                    <a href="#instructors" className={navStyles}>Instructors</a>
                    <Button title="STUDENTS"> </Button>
                </div>          
            </div>
        </div>

    );
};

export default Header;