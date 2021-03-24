import * as React from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom';
import { ItemCount } from "../../components/ItemCount";
import productList from "../../mocks/productList/index"
import ItemList from "../../components/itemList/"
import { getFirestore } from "../../firebase";
import loader from '../../mocks/productList/img/loading-02.gif';

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
    if (products.length==0) {
        return (
            setTimeout(() => {
                <h2>Lo sentimos. No encontramos productos de la categoria {idCat}</h2>
            }, 400),
            <>
            <img className="loader" src={loader} alt="Cargando" />
            </>
            
        )
    }
    else {
        return (            
            <>
            <h2>Adquirí nuestros productos de {idCat}</h2>
            <ItemList products={products}/>
            </>
        )
    }
    
}
export default CategoriaContainer;
