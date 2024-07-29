import './Footer.css'
import { useFilters } from '../hooks/useFilters'
 

export function Footer () {
 const { filters } = useFilters()
  return (
    <footer className='footer'>
        {
            JSON.stringify(filters, null, 2)
        }
    </footer>
    
    /* .
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ － <span>@isa.rrs</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>*/ 
  )
}