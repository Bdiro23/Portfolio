import "./carte.css"
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
export default function Section() {
    return(
        <div className='reseau'>
            <div className='cont1'>
                <MdOutlineEmail  className='email'/>
                <span>Email</span>
            </div>
            <div className='cont2'>
                <CiLinkedin  className='linkin'/>
                <span>LinkdIn</span>
            </div>
        </div>
    );
}