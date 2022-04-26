import React from "react";
import Card from "./Card";

const Pokedex = (props) =>
{
    const {pokemons} = props;

    return(
        <div className="row">   
        <h1>Pokedex</h1>
        
        {pokemons.map((pokemon, index) => {
            return <div className="col-md-3">
                <Card pokemon = {pokemon} key ={pokemon.name} />
                </div>
        })}
        
        
        
        </div>
     
    );
    
};

export default Pokedex;