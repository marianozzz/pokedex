

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemnData, getPokemons } from './api';

const {useState, useEffect} = React;


export default function App() {

  const [pokemons, setPokemons] = useState ([]);
  const fetchPokemons = async () =>
  {
    try
    {
      const data = await getPokemons() ;
     // console.log(data);
     //setPokemons(data.results);
     const promise = data.results.map(async (pokemon) =>{
       return await getPokemnData(pokemon.url);
     })
     const results = await Promise.all(promise);
     setPokemons(results);
     console.log(results);
    }
    catch(err)
    {

    }
  }
  useEffect(()=>{ 
  fetchPokemons();}, 
  []);
  return (
    <div>
      <Navbar />

      <div className="App">

          <div className ="container mt-4">

          <div className='row mt-4'>
            <div className="col-md-4">
                <Searchbar />
            </div>
          </div>
         
            
              <Pokedex pokemons ={pokemons}/>
            
          </div>

      </div>

    </div>
  );
}
//export default App;
