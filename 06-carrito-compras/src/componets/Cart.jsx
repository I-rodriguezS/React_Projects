import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.jsx'


function CartItem ({ thumbnail, price, tittle, quantity, addToCart, cart}) {
 
  return (
    <>
        <il>
          <img 
          src={thumbnail}
          alt={tittle}
          />
          <div>
            <strong>{tittle}</strong> - ${price}
          </div>

          <footer>
            <small>
              Qty: {quantity}
            </small>
            <button onClick={addToCart}>+</button>
          </footer>
        </il>
        </>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  
 const totalPrice = cart.reduce((total, product) => {
    return total + (product.price || 0)
  }, 0)


  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>

      <input id={cartCheckboxId} type='checkbox' hidden/>

      <aside className='cart'>
        <ul>  
          {cart.map(product => (
            <CartItem
              key={product.id} 
              addToCart={() => addToCart(product)}
              {...product} 
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <p>Total price: ${totalPrice.toFixed(2)}</p>


  
      </aside>
    </>
  );
}