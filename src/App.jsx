import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button';
import NavBar from './components/navbar/';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer'


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
