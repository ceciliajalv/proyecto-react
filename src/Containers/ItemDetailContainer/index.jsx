import * as React from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";
import productList from "../../mocks/productList/index"
import { ItemCount } from "../../components/ItemCount";
import ItemDetail from "../../components/itemDetail";
import { getFirestore } from "../../firebase";


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
   

    return (
        <>
        <ItemDetail item={item}/>
        </>
    )
}
console.log(productList)
export default ItemDetailContainer;


 //     const baseDeDatos = getFirestore(); //conecta con la base
    //     const itemCollection = baseDeDatos.collection('item'); //Referencia a la coleccion. item es mi coleccion de fb
    //     //toma datos
    //     itemCollection.get().then((value) => {
    //         value.docs.map(element => {console.log(element.data)})
    //     })

    // //    const miPromesa = new Promise ((resolve, reject) =>{
    // //     setTimeout(() =>
    // //         resolve(productList), 2000);





    // React.useEffect(()=>{
    //    const miPromesaDos = new Promise ((resolve, reject) =>{
    //     const producDetail = productList.find(prod => prod.id === id)
    //     setTimeout(() =>
    //         resolve(productList[id]), 2000);
            
    // });

    // miPromesaDos.then((result) => setItem(result)); 
    // }, [id]);



     //     itemCollection.get().then((value) => {
    //         let aux = value.docs.map(element => { 
    //             return {...element.data(), id:element.id}
    //         })
    //         console.log(aux);
    //         setItemList(aux);
    //         const producDetail = productList.find(prod => prod.id === id)
    //         // resolve(itemList[id]);
    //         setItem(itemList[id])
    //     })


   
    // }, []);
    

    //.finally(() => {
          //  setLoading(false);
        //});