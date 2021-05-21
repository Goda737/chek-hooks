
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Addmovie from './pages/addmovie/addmovie';
import Movie from './pages/movie/movie';


const App =() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Redirect to ="/movie"/></Route>
        <Route path="/movie" component={Movie}/>
        <Route path="/addmovie" component={Addmovie}/>
        <Route component={Movie}/>

      </Switch>
      
      
   
    </BrowserRouter>
  );
}

export default App;
