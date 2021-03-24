import Artist from "../artist/"
import {Link} from 'react-router-dom'
const ArtistList = ({bandas}) => {
    return (
        <div className="listProd">
            {bandas.map((band)=> {
                return <>
                 <Artist key={band.id} band={band} />
                </>
            })};
        </div>
    )
}
export default ArtistList;