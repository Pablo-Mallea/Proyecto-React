import { Cart } from "./CartWidget"

export const Navbar = () => {
    return(
        <nav className="navbar">
            <h1><a href=" ">Korra</a></h1>
            <ul>
                <li><a href=" ">Inicio</a></li>
                <li><a href=" ">Productos</a></li>
                <li><a href=" ">Contacto</a></li>

            </ul>
            <div className="row">
                <Cart />
                <button type="submit" className="btn-log">Login</button>
            </div>
        </nav>
    )
}