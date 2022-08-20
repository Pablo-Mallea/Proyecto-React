import './Navbar.scss'
import Icon from '../../../assets/img/cart.png'

export const Cart = () => {

    return(
        <div className="carrito">
            <a href=" ">
                <img src={Icon} className="cart-icon" alt="cart-icon" />
            </a>
        </div>
    )
}