import React from "react";


const Card = (props) => {
    const {pokemon } = props;
    return (

    <div className="card mt-2" >
        <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name}/>
        <div className="card-body">
            <h5 className="card-title">#{pokemon.id}-{pokemon.name}</h5>
            <p className="card-text">Descripcion</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Experiencia base: {pokemon.base_experience}</li>
        </ul>
        <div>
          <div className="card-body">
              <span class="badge rounded-pill bg-danger">Tipo</span>
              <span class="badge rounded-pill bg-primary"  key={pokemon.types[0].name}>{pokemon.types[0].type.name}</span>
          </div>
           
        </div>
        
    </div>

    );
}
export default Card;