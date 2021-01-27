import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './components/button';
import NavBar from './components/navbar/';
// import ItemListContainer from './Containers/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar/>
    {/* <ButtonComponent text={`Prueba`} /> */}
      {/* <h1>Hola mundo!</h1>
      <ButtonComponent text={`Prueba`} />
      <ItemListContainer greeting={"Bienvenidos a React.JS"}/> */}
    </>
  );
}

export default App;
