import './Navbar.css'
import Link from './Link';

function Navbar() {
    const img = '/vite.svg';

    return (
        <>
            <img style={{ height: "200px" }} src={img} alt="" />
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
            </nav>
        </>
    )
}

export default Navbar