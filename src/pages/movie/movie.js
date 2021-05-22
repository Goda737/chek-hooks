import { useState } from 'react';
import Filter from '../../components/filter/filter';
import Liste from '../../components/movielist/list';
import f02 from '../../assete/images/f02.jpg'
import f03 from '../../assete/images/f03.jpg'
import f04 from '../../assete/images/f04.jpg'
import f05 from '../../assete/images/f05.jpg'


const moviesListe = [{
  title:'movie 01',
  rating: '10',
  posturl: f02
},
{
  title:'movie 02',
  rating: '4',
  posturl: f03
  
},
{
  title:'movie 03',
  rating: '10',
  posturl: f04
},{
  title:'movie 04',
  rating: '3',
  posturl: f05
},{
  title:'movie 04',
  rating: '3',
  posturl: f05
},{
  title:'movie 03',
  rating: '10',
  posturl: f04
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
