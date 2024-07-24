import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Card() {
    const { cardID } = useParams();

    const cities = useSelector((state) =>
    state.cities.value.filter((city) => city.id == cardID.toString())
    );

    return(
        <>
        <Navbar></Navbar>
        <h1 className="text-3xl font-bold">{cities[0].name}</h1>
        <div className="flex flex-col p-4">
            {cities[0].isVisited && (
                <span className="text-green-600">✔ visitata</span>
            )}
            {!cities[0].isVisited && (
                <span className="text-red-600">❌ non visitata</span>
            )}
        </div>
        <img src={cities[0].imgUrl} alt="" width="400"/>
        </>
    )
}

export default Card;