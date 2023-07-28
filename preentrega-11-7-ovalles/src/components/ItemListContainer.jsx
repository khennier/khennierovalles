import React, {useEffect, useState} from 'react'
import ItemList from './ItemList.jsx'
import { getProductos } from '../mock/data.js';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ejemplo}) => {
  const [product, setProduct]= useState([])
  const {categoryId}= useParams()

  useEffect(()=>{
    getProductos()
    .then((res) => {
      if(categoryId){
        setProduct(res.filter((item)=> item.category === categoryId))
      }else{
        setProduct(res)
      }
    })
    .catch((error)=> console.log(error))
  },[categoryId])




  return (
    <div>
      <h1>{ejemplo} <span>{categoryId && categoryId}</span></h1>
      <ItemList product={product}/>


    </div>
  );
};

export default ItemListContainer;
