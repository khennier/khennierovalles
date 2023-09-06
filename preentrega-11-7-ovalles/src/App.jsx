import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './components/Cart/cartProvider';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>

    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer ejemplo='Bienvenidos' />} />
      <Route path='/category/:categoryId' element={<ItemListContainer ejemplo='Bienvenidos a la categoria:' />} />
      <Route path='/item/:id' element={<ItemDetailContainer/>} />

    </Routes>
    </CartProvider>
    
    </BrowserRouter>

  );
}

export default App;
