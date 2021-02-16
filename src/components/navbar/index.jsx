import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/index.jsx';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-bordeaux">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={`/`} className="navbar-brand" ><h2 className="logo">Cisum Evil</h2></Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to={`/`} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/artistas`}className="nav-link" >Artistas</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/productos`} className="nav-link">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/categoria/${'merch'}`} className="nav-link">Merch</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/categoria/${'vip'}`} className="nav-link">Entradas y paquetes VIP</Link>
                </li>
                <li className="nav-item">
                    <Link to={`/contactanos`}className="nav-link">Contacto</Link>
                </li>
              </ul>
              <CartWidget/>
        </div>
      </nav>    
    )
}

export default NavBar;