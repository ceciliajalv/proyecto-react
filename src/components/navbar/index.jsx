import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/index.jsx';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-bordeaux">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="index.html"><h2 className="logo">Cisum Evil</h2></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#roaster">Artistas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#productos">Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#merch">Merch</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#VIP">Entradas y paquetes VIP</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contactanos">Contacto</a>
                </li>
              </ul>
              <CartWidget/>
        </div>
      </nav>    
    )
}

export default NavBar;