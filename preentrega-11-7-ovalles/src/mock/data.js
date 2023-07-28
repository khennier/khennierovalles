import Imagen1 from '../multimedia/negra.jpg'
import Imagen2 from '../multimedia/azul.JPG'
import Imagen3 from '../multimedia/blanca.webp'
import Imagen4 from '../multimedia/gris.jpg'

const productList = [
    {id:'01', name:'Remera Negra', stock:30, price:10000, description:'Remera color negra', img:Imagen1},
    {id:'02', name:'Remera Azul', stock:15, price:2000, description:'Remera color azul', img:Imagen2},
    {id:'03', name:'Remera Blanca', stock:10, price:12000, description:'Remera color blanca', img:Imagen3},
    {id:'04', name:'Remera Gris', stock:45, price:15000, description:'Remera color gris', img:Imagen4}
  ]

export const getProductos = () => {
    return new Promise((resolve, reject)=>{
      let error = false
      setTimeout(()=>{
        if (error){
          reject('No hay data, intente mas tarde')
        }else {
          resolve(productList)
        }
      },2000)

    }
    )
}

export const getItem = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(productList[2])
        },2000)
    })
}