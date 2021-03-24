import * as React from "react";
import { useState } from "react";
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemList from "../../components/itemList/"
import { getFirestore } from "../../firebase";
import loader from '../../mocks/productList/img/loading-02.gif';

const ItemListContainer = ({servicios},) => {
    const [products, setProducts] = useState([]);
    React.useEffect(()=>{
        const baseDeDatos = getFirestore(); 
        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('item'); 
        // Tomando los datos
        itemCollection.get().then((value) => {
            let aux = value.docs.map(element => { 
                return {...element.data(), id:element.id}
            })
            console.log(aux);
            setProducts(aux);
        })
    //     const baseDeDatos = getFirestore(); //conecta con la base
    //     const itemCollection = baseDeDatos.collection('item'); //Referencia a la coleccion. item es mi coleccion de fb
    //     //toma datos
    //     itemCollection.get().then((value) => {
    //         value.docs.map(element => {console.log(element.data)})
    //     })

    // //    const miPromesa = new Promise ((resolve, reject) =>{
    // //     setTimeout(() =>
    // //         resolve(productList), 2000);
    }, []);

    // miPromesa.then((result) => setProducts(result)); 
    // } , []);    

    return (
            <>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-start">
                <h2>Adquirí nuestros productos</h2>
            </section>
            <div className='listContainer'>
                <ItemList products={products}/>
            </div>
            </>
    );
}
export default ItemListContainer;
