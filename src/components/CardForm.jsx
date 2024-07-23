// import { useState, useContext } from 'react';
// import { ProvaContext } from '../stores/ProvaContext';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from '../redux/citiesSlice';

function CardForm({addCity}) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imgUrl: '',
        isVisited: false,
    });

    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target;
        const inputValue = type == 'checkbox' ? checked : value;
        setFormData({...formData, [name]: inputValue})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const city = {
            id: Math.random(),
            name: formData.name,
            description : formData.description,
            imgUrl:formData.imgUrl,
            isVisited: formData.isVisited,
          };
        setFormData({
            name: '',
            description: '',
            imgUrl: '',
            isVisited: false,
        });
        dispatch(add(city));
    };

    // const { count } = useContext(ProvaContext);

    return(
        <>
            <form onSubmit={handleSubmit} className="bg-zinc-900 p-5 rounded-lg flex flex-col gap-3 w-80 mb-10">
                <div className="flex flex-col">
                    <label>Nome</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                </div>
                <div className="flex flex-col">
                    <label>Descrizione</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
                </div>
                <div className="flex flex-col">
                    <label>Immagine</label>
                    <input type="text" name="imgUrl" value={formData.imgUrl} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col">
                    <label>Visitata?</label>
                    <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange} />
                </div>
                <button className="bg-zinc-950" type="submit">Add Card</button>
            </form>
        </>
    );
}
export default CardForm;