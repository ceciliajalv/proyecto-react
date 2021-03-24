import logo from './logo.svg';
import loader from '../src/mocks/productList/img/loading-02.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ButtonComponent from './components/button';
import NavBar from './components/navbar/';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Home from './Containers/homeContainer';
import ArtistasContainer from './Containers/ArtistasContainer';
import ContactoContainer from './Containers/ContactoContainer/index.jsx';
import CategoriaContainer from './Containers/CategoriaContainer';
import Cart from './components/cart';
import Customer from './components/customer';
import OrderConfirm from './components/orderConfirm';
import { GlobalContext } from './context/GlobalContext';
import CartProvider from './context/cartContext/';
import CartItem from './components/cartItems/';
import ArtistaDetailContainer from './Containers/ArtistaDetailContainer';


const App = () => {
  return (
  <GlobalContext.Provider>
  <BrowserRouter>
  <CartProvider>
      <NavBar/>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/proyecto-react'>
        <Home />
      </Route>
      <Route exact path='/productos'>
        <ItemListContainer />
      </Route>
      <Route exact path = '/artistas'>
        <ArtistasContainer />
      </Route>
      <Route exact path = '/artista/:id'>
        <ArtistaDetailContainer />
      </Route>
      <Route exact path = '/productos/:id'>
        <ItemDetailContainer />
      </Route>
      <Route exact path = '/categoria/:idCat'>
        <CategoriaContainer />
      </Route>
      <Route exact path = '/contactanos'>
        <ContactoContainer />
      </Route>
      <Route exact path = '/cart'>
        <Cart />
      </Route>
      <Route exact path = '/customer'>
        <Customer />
      </Route>
      <Route exact path = '/orderConfirm'>
        <OrderConfirm />
      </Route>
      <Route exact path = '/pruebacart'>
        <CartItem />
      </Route>
      <Route path="*" children={<div>No encontramos la página que está buscando. <img src="../src/mocks/productList/img/logo.png" alt="" /></div>} />
    </Switch>
 
  </CartProvider>
  </BrowserRouter>
  </GlobalContext.Provider>
  );
}

export default App;
