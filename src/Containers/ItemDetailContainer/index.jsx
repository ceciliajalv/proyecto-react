import * as React from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";
import productList from "../../mocks/productList/index"
import { ItemCount } from "../../components/ItemCount";
import ItemDetail from "../../components/itemDetail";
import { getFirestore } from "../../firebase";
import loader from '../../mocks/productList/img/loading-02.gif';


const ItemDetailContainer = () => {
    const {id} = useParams ();
    const [item, setItem] = useState([]);
    const [itemList, setItemList] = useState([]);
    React.useEffect(()=>{
        const baseDeDatos = getFirestore(); 
        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection("item"); 
        const itemDoc = itemCollection.doc(id)
        
        itemDoc.get().then((doc) => {
            if (!doc.exists) {
                console.log('No existe el item');
                return;
            }
            console.log('item encontrado');
            setItem({id: doc.id, ...doc.data()});
        }).catch((error) => {
           console.log("Error en la busqueda de items", error);
        }) 
    }, []);
    if (item.length==0) {
        return (
            setTimeout(() => {
                <>
                <h3>No pudimos encontrar el producto que estaba buscando</h3>
                </>
            }, 400),
            <>
            <img className="loader" src={loader} alt="Cargando" />
            </>
        );
    }
    else {
        return (
            <>
            <ItemDetail item={item}/>
            </>
        )
    }

    
}
console.log(productList)
export default ItemDetailContainer;