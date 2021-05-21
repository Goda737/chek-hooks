import { useState } from 'react';
import Filter from '../../components/filter/filter';
import Liste from '../../components/movielist/list';


const moviesListe = [{
  title:'movie 01',
  description:'DEC 01',
  rating: '10',
  Url: 'url01'
},
{
  title:'movie 02',
  description:'DEC 02',
  rating: '9',
  Url: 'url02'
  
},
{
  title:'movie 03',
  description:'DEC 03',
  rating: '10',
  Url: 'url03'
},{
  title:'movie 04',
  description:'DEC 04',
  rating: '3',
  Url: 'url04'
}
]
const Movie =() => {
  const [movies,setMovies]= useState(moviesListe)
  return (
    <div className="App">
      <Filter movies={movies} setMovies={setMovies} moviesList={moviesListe}/>
      <Liste movies={movies}/>
      
   
    </div>
  );
}

export default Movie;
