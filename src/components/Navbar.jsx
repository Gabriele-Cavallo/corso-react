import './Navbar.css'
// import Link from './Link';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
            {/* <div className={`rounded-lg w-72 h-72 ${x < 10 ? "bg-red-500 rotate-45" : "bg-sky-500"}`}>x è {x}</div> */}
            {/* <div className={`box rounded ${x < 10 ? "rotated" : ""}`}>x è {x}</div> */}
            {/* <img style={{ height: "200px" }} src={img} alt="" />*/
            <nav>
                <ul className='flex gap-10 mb-10'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/contatti'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'/cards'}>Cards V1</Link>
                    </li>
                    <li>
                        <Link to={'/cards-children'}>Cards V2</Link>
                    </li>
                </ul>
            </nav> }
        </>
    )
}

export default Navbar