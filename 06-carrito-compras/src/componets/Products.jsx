import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.jsx';

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  console.log('addToCart:', addToCart);
  console.log('removeFromCart:', removeFromCart);
  console.log('cart:', cart);

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id);
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {

          const isProductInCart = checkProductInCart(product);

          return (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> ${product.price}
            </div>
            <div>
              <button 
              style={{backgroundColor: isProductInCart ? '#800404' : '#07ACBF'}}
              onClick={() => isProductInCart 
              ?  removeFromCart(product)
              :  addToCart(product)}>
                {
                  isProductInCart
                  ? <RemoveFromCartIcon /> 
                  :  <AddToCartIcon />               
                }
              </button>
            </div>
          </li>
          )
        })}
      </ul>
    </main>
  );
}
