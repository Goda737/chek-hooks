
import { useState } from 'react';
import './App.css';
import Filter from './components/filter/filter';
import Liste from './components/movielist/list';


const moviesListe = [{
  title:'movie 01',
  description:'DEC 01',
  rating: '10',
  Url: 'url01'
},
{
  title:'movie 02',
  description:'DEC 02',
  rating: '10',
  Url: 'url02'
  
},
{
  title:'movie 03',
  description:'DEC 03',
  rating: '10',
  Url: 'url03'
}
]
const App =() => {
  const [movies,useMovies]= useState(moviesListe)
  return (
    <div className="App">
      <Filter/>
      <Liste movies={movies}/>
      
   
    </div>
  );
}

export default App;
