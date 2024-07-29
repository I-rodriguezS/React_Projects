import { products as initialProducts} from './mocks/products.json'
import { Products } from './componets/Products.jsx'
import { Header } from './componets/Header.jsx'
import { Footer } from './componets/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './componets/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


function App() {

  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider> 
    <Cart> </Cart>
    <Header changeFilters={setFilters}/>
    <Products products={filteredProducts}/> 
    {IS_DEVELOPMENT && <Footer/>}
    </ CartProvider>
  )
}

export default App
