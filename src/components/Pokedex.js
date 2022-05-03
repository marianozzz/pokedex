import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Pokedex = (props) =>
{
    const {pokemons, page, setPage, total, loading} = props;
    const lastPage = ()=>{
        const nextPage = Math.max(page -1, 0);
        setPage(nextPage);
    }
    const nextPage = ()=>{
        const nextPage = Math.min(page +1, total);
        setPage(nextPage);
    }


    return(<div className="row">   
            <h1>Pokedex</h1>
            <Pagination page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRightClick ={nextPage}/>

           
            {pokemons.map((pokemon, index) => {
                return <div className="col-md-3">
                        <Card pokemon = {pokemon} key = {pokemon.name} />;
                      </div>
            })}
            
         </div>);
    
};

export default Pokedex;