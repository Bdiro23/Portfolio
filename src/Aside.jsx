import './carte.css'
export default function Aside(){
    return(
        <div className="resaside">
        <div>
            <span className='titre'>About</span>
            <p className='p1'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
            <div>
                <span className='titre'>Interests</span>
                <p className='p1'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    );
}