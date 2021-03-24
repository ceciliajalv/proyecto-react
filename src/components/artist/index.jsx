import {Link} from 'react-router-dom'
const Artist = ({band}) => {
    return <div className="card">
        <h5>{band.banda}</h5>
        <img src={band.foto} alt={band.banda}/>
        <Link to={`/artista/${band.id}`}><button>Ver más</button></Link>
    </div>
}
export default Artist;