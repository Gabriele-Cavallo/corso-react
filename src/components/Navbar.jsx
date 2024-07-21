import './Navbar.css'
import Link from './Link';

function Navbar() {
    const x = 1;
    const img = '/vite.svg';

    return (
        <>
            {/* <div className={`rounded-lg w-72 h-72 ${x < 10 ? "bg-red-500 rotate-45" : "bg-sky-500"}`}>x è {x}</div> */}
            {/* <div className={`box rounded ${x < 10 ? "rotated" : ""}`}>x è {x}</div> */}
            {/* <img style={{ height: "200px" }} src={img} alt="" />
            <nav>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>About Us</Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>
                </ul>
            </nav> */}
        </>
    )
}

export default Navbar