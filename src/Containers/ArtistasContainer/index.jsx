import * as React from "react";
import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import Artist from "../../components/artist/"
import { getFirestore } from "../../firebase";
import ArtistList from "../../components/artistList";
import loader from '../../mocks/productList/img/loading-02.gif';


const ArtistasContainer = () => {
    const [bandas, setBandas] = useState([]);
    React.useEffect(()=>{
        const baseDeDatos = getFirestore(); 
        // Guardamos la referencia de la coleccion que queremos tomar
        const bandCollection = baseDeDatos.collection('artistas'); 
        // Tomando los datos
        bandCollection.get().then((value) => {
            let aux = value.docs.map(element => { 
                return {...element.data(), id:element.id}
            })
            console.log(aux);
            setBandas(aux);
        })}, []);
        return (
                <>
                <section id="hero" class="d-flex flex-column justify-content-center align-items-start">
                    <h2>Nuestras bandas</h2>
                </section>
                <div className='listContainer'>
                    <ArtistList bandas={bandas}/>
                </div>
                </>
            )
}

export default ArtistasContainer;

// const ItemListContainer = ({servicios},) => {
//     const [products, setProducts] = useState([]);
//     React.useEffect(()=>{
//         const baseDeDatos = getFirestore(); 
//         // Guardamos la referencia de la coleccion que queremos tomar
//         const itemCollection = baseDeDatos.collection('item'); 
//         // Tomando los datos
//         itemCollection.get().then((value) => {
//             let aux = value.docs.map(element => { 
//                 return {...element.data(), id:element.id}
//             })
//             console.log(aux);
//             setProducts(aux);
//         })}, []);

//     // miPromesa.then((result) => setProducts(result)); 
//     // } , []);    

//     return (
//         <>
//         <section id="hero" class="d-flex flex-column justify-content-center align-items-start">
//             <h2>Adquirí nuestros productos</h2>
//         </section>
//         <div className='listContainer'>
//             <ItemList products={products}/>
//         </div>
        
//         </>
//     )
// }
// export default ItemListContainer;
