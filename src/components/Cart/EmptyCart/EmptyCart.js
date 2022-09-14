import "./EmptyCart.scss"
import { Link } from "react-router-dom"

export const EmptyCart = () => {
  return (
    <div>
        <p>Tu carrito está vacio</p>
        <Link to="/">
            <button className="emptyCart">Ir a comprar</button>
        </Link>
    </div>
  )
}
