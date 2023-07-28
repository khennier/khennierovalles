import React, {useEffect, useState} from 'react'
import ItemList from './ItemList.jsx'
import { getProductos } from '../mock/data.js';


const ItemListContainer = ({ejemplo}) => {
  const [product, setProduct]= useState([])

  useEffect(()=>{
    getProductos()
    .then((res) => setProduct(res))
    .catch((error)=> console.log(error))
  },[])




  return (
    <div>
      <h1>{ejemplo}</h1>
      <ItemList product={product}/>


    </div>
  );
};

export default ItemListContainer;
