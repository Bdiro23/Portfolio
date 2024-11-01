import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './carte.css'
export default function Footer() {
    return(
        <div className="footer">
            <FaTwitterSquare className='icon'/>
            <FaFacebookSquare className='icon' />
            <FaInstagram className='icon' />
            <FaGithub className='icon' />
        </div>
    );
}