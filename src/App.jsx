import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button';
import NavBar from './components/navbar/';
import ItemListContainer from './Containers/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar/>
    <h1>Bienvenidos</h1>
    <ItemListContainer servicios={"Servicios Profesionales"}/>
    </>
  );
}

export default App;
