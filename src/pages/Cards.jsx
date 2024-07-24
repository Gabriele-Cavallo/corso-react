import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Cards() {
    const cities = useSelector((state) => state.cities.value);

    return (
        <>
            <Navbar></Navbar>
            <h1 className="text-3x1 font-boold mb-10">
                Pagina con tutte le cards con link a sottopagina
            </h1>
            <div className="grid grid-cols-4 gap-5">
                {cities.map((city) => {
                return (
                    <Link to={`/cards/${city.id}`} key={city.id}>
                        <Card
                            title={city.name}
                            isVisited={city.isVisited}
                            imgUrl={city.imgUrl}>
                            {city.description}
                        </Card>
                    </Link>
                )
                })}
            </div>
        </>
    )
}

export default Cards;