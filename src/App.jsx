import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ButtonComponent from './components/button';
import NavBar from './components/navbar/';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Home from './Containers/homeContainer';
import ArtistasContainer from './Containers/ArtistasContainer'



const App = () => {
  return (
  <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route exact path='/proyecto-react/'>
        <Home />
      </Route>
      <Route exact path='/proyecto-react/productos'>
        <ItemListContainer />
      </Route>
      <Route exact path = '/proyecto-react/artistas'>
        <ArtistasContainer />
      </Route>
      <Route exact path = '/proyecto-react/productos/:id'>
        <ItemDetailContainer />
      </Route>
      <Route path="*" children={<div>No encontramos la página que está buscando.</div>} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
