import React from "react";
import {searchPokemn} from '../api';

const{useState} = React;


const Searchbar = () => 
{
   const[search, setSearch] = useState('');
   const [pokemon, setPokemon] = useState();

    const onChange = (e) =>{

        //console.log(e.target.value);

        setSearch(e.target.value);


    };

    const onClick = async(e) =>
    {
        const data = await searchPokemn(search);
       setPokemon(data);
    }
    return (
        <div>
            <div className="form-group">
            <input type="text" placeholder="Buscar Pokemon" className="form-control" onChange={onChange}/>
            </div>

            <button className="btn btn-primary mt-2 btn-small" onClick={onClick} >Buscar </button>
            {pokemon && 
                <div className="form-group mt-4">
                    <div className="card">
                    <div className="row">
                        <div className="col-2-sm">
                        <img src={pokemon.sprites.front_default} className="card-img-top" alt="..."/>
                        </div>
                    </div>
                   
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">Descripcion </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Peso: {pokemon.weight}</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <a href="https://pokeapi.co/api/v2/pokemon/1/" className="card-link">Ver detalle</a>
                    </div>
                    </div>
                </div>
             }
        </div>
        );
};


export default Searchbar;