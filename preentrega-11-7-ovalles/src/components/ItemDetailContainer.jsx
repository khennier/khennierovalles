import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import getDocumentById from './useGetDocumentById';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {

        const fetchedProduct = await getDocumentById("items", id);
        setProducto(fetchedProduct);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {Object.keys(producto).length > 0 ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

/*
import React,{useEffect, useState} from 'react'
import { getItem } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import getDocumentById from './useGetDocumentById'

const ItemDetailContainer = () => {

    const [ producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(()=> {
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))

    },[])
  return (
    <div>
        <ItemDetail producto={producto} />

    </div>
  )
}

export default ItemDetailContainer
*/