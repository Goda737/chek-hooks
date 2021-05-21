
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Register from './components/register/register';
import Addmovie from './pages/addmovie/addmovie';
import Movie from './pages/movie/movie';


const App =() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Redirect to ="/movie"/></Route>
        <Route path="/movie" component={Movie}/>
        <Route path="/addmovie" component={Addmovie}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route component={Movie}/>

      </Switch>
      
      
   
    </BrowserRouter>
  );
}

export default App;
