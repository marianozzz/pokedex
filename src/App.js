

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemnData, getPokemons } from './api';

const {useState, useEffect} = React;


export default function App() {

  const [pokemons, setPokemons] = useState ([]);
  const[page, setPage] = useState(1);
  const[total, setTotal] = useState(0);
  const[loading, setLoading] = useState(true);
  const fetchPokemons = async () =>
  {
    
    try
    {
      setLoading(true);
      const data = await getPokemons(25, 25 * page) ;
     // console.log(data);
     //setPokemons(data.results);
     const promise = data.results.map(async (pokemon) =>{
       return await getPokemnData(pokemon.url);
     })
     const results = await Promise.all(promise);
     setPokemons(results);
     setLoading(false);
     setTotal(Math.ceil(data.count / 25))
     console.log(results);
    }
    catch(err)
    {

    }
  }
  useEffect(()=>{ 
  fetchPokemons();
    }, [page]);
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

              <Pokedex pokemons ={pokemons}
              page ={page}
              setPage={setPage}
              total = {total}
              />
          </div>

      </div>

    </div>
  );
}
//export default App;
