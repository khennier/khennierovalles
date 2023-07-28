import Imagen1 from '../multimedia/negra.jpg'
import Imagen2 from '../multimedia/azul.JPG'
import Imagen3 from '../multimedia/blanca.webp'
import Imagen4 from '../multimedia/gris.jpg'


const productList = [
    {id:'01', category:'ofertas', name:'Remera Negra', stock:30, price:10000, description:'Remera color negra', img:Imagen1},
    {id:'02', category:'ofertas', name:'Remera Azul', stock:15, price:2000, description:'Remera color azul', img:Imagen2},
    {id:'03', category:'vendidos', name:'Remera Blanca', stock:10, price:12000, description:'Remera color blanca', img:Imagen3},
    {id:'04', category:'vendidos', name:'Remera Gris', stock:45, price:15000, description:'Remera color gris', img:Imagen4}
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

export const getItem = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(productList.find((item)=> item.id === id))
        },2000)
    })
}