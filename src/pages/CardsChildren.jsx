import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

function CardsChildren() {
    const cities = useSelector((state) => state.cities.value);
    return(
        <>
            <Navbar></Navbar>
            <h1 className="text3xl font-bold mb-10">Pagina CardsChildren</h1>
            <div className="grid grid-cols-4 gap-5">
                {cities.map((city) => (
                    <Link to={`/cards-children/${city.id}`} key={city.id}>
                        <Card
                            title={city.name}
                            isVisited={city.isVisited}
                            imgUrl={city.imgUrl}>
                                {city.description}
                        </Card>
                    </Link>
                ))}
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default CardsChildren