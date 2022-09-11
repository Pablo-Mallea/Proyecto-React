import './Acarrito.scss'
import { Link } from 'react-router-dom'

export const Acarrito = () => {
  return (
    <div className='AcarritoContainer'>
        <Link to="/Cart" >
            <button className="Acarrito">Ir al carrito</button>
        </Link>
    </div>
  )
}