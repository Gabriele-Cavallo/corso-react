import Navbar from "../components/Navbar";
import useCounter from "../hooks/useCounter";

function Contatti() {
    useCounter();

    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-3x1 font-bold">Pagina Contatti 🤩</h1>
        </>
    )
}

export default Contatti;