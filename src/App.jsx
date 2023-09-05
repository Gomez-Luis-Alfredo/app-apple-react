import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Product } from './components/Product'
import { Route, Routes} from 'react-router-dom'
import { ProductDetail } from './components/ProductDetail'
import { Cart } from './components/Cart'
import { CheckOut } from './components/CheckOut'

function App() {
 

  return (
    <>
    <Header/>
    <Routes >
      <Route exact path= "/" Component={Home}/>
      <Route exact path= "/product" Component={Product}/>
      <Route exact path= "/product/:id" Component={ProductDetail}/>
      <Route exact path= "/cart" Component={Cart}/>
      <Route exact path= "/checkout" Component={CheckOut}/>
      <Route exact path= "/about" Component={About}/>
      <Route exact path= "/contact" Component={Contact}/>
    </Routes >
    <Footer/>
      
    </>
  )
}

export default App
