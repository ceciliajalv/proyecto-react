import * as React from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import productList from "../../mocks/productList/index"
import ItemList from "../../components/itemList/"
import { getFirestore } from "../../firebase";
import loader from '../../mocks/productList/img/loading-02.gif';

const ArtistasContainer = () => {
    const {id} = useParams ();
    const [bandas, setBandas] = useState([]);
    const [bandList, setBandList] = useState([]);
    // const [codArt, setCodArt] = useState([]);
    React.useEffect(()=>{
        const baseDeDatos = getFirestore(); 
        // Guardamos la referencia de la coleccion que queremos tomar
        const bandCollection = baseDeDatos.collection("artistas"); 
        const bandDoc = bandCollection.doc(id)
        
        bandDoc.get().then((doc) => {
            if (!doc.exists) {
                console.log('No existe el artista');
                return;
            }
            console.log('artista encontrado');
            setBandas({id: doc.id, bandaCod: doc.bandaCod, ...doc.data()});
            // setCodArt({bandaCod: doc.bandaCod});
        }).catch((error) => {
           console.log("Error en la busqueda de artistas", error);
        });
    }, []);

    
    const [products, setProducts] = useState([]);
    // const {codArt} = useParams ();
    // console.log('el codart es' + codArt);
    
    
    const baseDeDatos = getFirestore();
    

    const itemCollection = baseDeDatos.collection('item');
    const artFilter = itemCollection.where('artista', '==', id);

    artFilter.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('No hubo resultados');
        }
        setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    })
    if (bandas.length==0) {
        return (
            setTimeout(() => {
                <>
                <h3>No pudimos encontrar el artista que estaba buscando</h3>
                </>
            }, 400),
            <>
            <img className="loader" src={loader} alt="Cargando" />
            </>
        );
    }
    else if (products.length==0) {
        return (
            <>
                <h2 class="blur">{bandas.banda}</h2>
                <div class="d-flex flex-row cardband">
              <div>
                  <img src={bandas.fotom} alt=""/>
              </div>
              <div class="d-flex flex-column infoband">
                  <p>Año de formación: {bandas.formacion}</p>
                  <p>Géneros: {bandas.genero} </p>
                  <p>Albumes lanzados: {bandas.discos}</p>
                  <p>Miembros oficiales: {bandas.integrantes}</p>
                  <p>{bandas.bandaCod}</p>
                  <p>Breve historia sobre el artista: {bandas.descripcion}</p>
                  <Link to={`/artistas`}><button className='volver'>Volver a listado de bandas</button></Link> 
              </div>
          </div>
          <h3>Adquirir merch de {bandas.banda}</h3>
          <h4>Lo sentimos, no contamos con productos de este artista.</h4>
            
            </>
            )
        }
    else {
        return (
        <>
            <h2 class="blur">{bandas.banda}</h2>
            <div class="d-flex flex-row cardband">
          <div>
              <img src={bandas.fotom} alt=""/>
          </div>
          <div class="d-flex flex-column infoband">
              <p>Año de formación: {bandas.formacion}</p>
              <p>Géneros: {bandas.genero} </p>
              <p>Albumes lanzados: {bandas.discos}</p>
              <p>Miembros oficiales: {bandas.integrantes}</p>
              <p>Breve historia sobre el artista: {bandas.descripcion}</p>
              <Link to={`/artistas`}><button className='volver'>Volver a listado de bandas</button></Link> 
          </div>
      </div>
      <h3>Adquirir merch de {bandas.banda}</h3>
      <ItemList products={products}/>
        </>
        )
    }
}

export default ArtistasContainer;