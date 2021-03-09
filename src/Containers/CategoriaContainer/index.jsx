import * as React from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemList from "../../components/itemList/"
import { getFirestore } from "../../firebase";

const CategoriaContainer = () => {
    const {idCat} = useParams ();
    const [products, setProducts] = useState([]);

    const baseDeDatos = getFirestore();

    const itemCollection = baseDeDatos.collection('item');
    const catFilter = itemCollection.where('categoria', '==', idCat);

    catFilter.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('No hubo resultados');
        }
        setProducts(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
    })
    // catFilter.get().then((querySnapshot) => {
    //   if (querySnapshot.size === 0) {
    //     console.log("No hubo resultados");
    //   }
    //   setProducts(
    //     querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //   );
    // }); 
    // React.useEffect(()=>{
    //     let categoria = productList.filter ( (element) => {
    //         return element.categoria === idCat
    //     });
    //     setProducts(categoria);
    // }, [idCat]) 

    return (
        <>
        <h2>Adquirí nuestros productos de {idCat}</h2>
        <ItemList products={products}/>
        </>
    )
}
export default CategoriaContainer;
