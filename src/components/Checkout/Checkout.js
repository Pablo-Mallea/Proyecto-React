import "./Checkout.scss"
import Swal from 'sweetalert2'
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { addDoc, collection, query, writeBatch, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import {  Navigate } from "react-router-dom"

export const Checkout = () => {

    const {cart, cartTotal, terminarCompra} = useContext(CartContext) 
    const [orderId, setOrderId] = useState(null)
    
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleImputChange =  (e) =>{
         setValues({
            ...values, //el spred copia todas las propiedades y sus valores anteriores
            [e.target.name]: e.target.value
         })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
            date: new Date()
        }
        console.log(orden)

        //Verifico que hay stock disponible y descuento cantidad si se efectuo la compra

        const batch = writeBatch(db) //Actualizo muchos documentos en una sola operación
        const ordenesRef = collection(db, 'ordenes')  //si la colección no existe firestore la crea y la agrega al documento
        const productosRef = collection(db, 'productos')
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id))) //con el documentId comparo mis productos con los que esten en el cart y los meto en un array nuevo(los id)
        
        const productos = await getDocs(q) //
        const outOfStock = [] //array de control

        productos.docs.forEach(doc => {  //recorro la coleccion getDocs 
            
            const itemInCart = cart.find(item => item.id === doc.id) //comparo el array de mi base de datos con el de carrito, retorno un unico item

            if (doc.data().stock >= itemInCart.cantidad){  //si el stock dispo es mayor a la cantidad que quiero comprar
                batch.update(doc.ref, {                             //preparo un paquete de datos con alguna actualización  doc.ref= referencia del documento
                    stock: doc.data().stock - itemInCart.cantidad
                })
            }else{
                outOfStock.push(itemInCart) //Si no tehgo stock le pusheo una compia del item in cart, paso los items que no tienen stock a un array 
            }

        });

        if(outOfStock.length === 0){ //Si el array de control esta vacio pasaron las compras y se actualiza el stock de los productos
            batch.commit() //Commiteo los cambios, retorna una promesa
                .then(() =>{
                    addDoc(ordenesRef, orden)
                        .then((doc) =>{
                            setOrderId(doc.id)
                            terminarCompra()
                        })
                })
        }else{
            console.log((outOfStock.map( e => e.nombre)) )
          
            Swal.fire(
                {
                icon: 'error',
                title: 'Compra rechazada',
                showConfirmButton: false,
                html: `No hay suficiente stock disponible de ${outOfStock.map( e => e.nombre )}`,
                footer: '<a href="/cart">Revisar carrito</a>',
              })
        }
    }

    if(orderId){
        return(
            <div className="checkoutContainer">
                <h2>Gracias por tu compra!</h2>
                <p>Este es tu numero de orden: 
                    <strong className="nroDeOrden">{orderId}</strong>
                </p>
            </div>
        )
    }

    if( cart.length === 0 ){
        return <Navigate to="/"/>
    }

  return (
    <div className="checkoutContainer">
        <h2>Checkout</h2>

        <p>Completa los ultimos datos</p>

        <form onSubmit={handleSubmit} className="formulario">
                <input 
                    name="nombre"
                    value={values.nombre}
                    onChange={handleImputChange}
                    type={'text'} placeholder='Nombre'
                    required
                />
                <input 
                    name="email"
                    value={values.email}
                    onChange={handleImputChange}
                    type={'email'} placeholder='Email'
                    required

                />
                <input
                    name="direccion"
                    value={values.direccion}
                    onChange={handleImputChange}
                    type={'text'} placeholder='Dirección'
                    required

                />

                <button type="submit" className="btn-enviar">Comprar</button>
        </form>
    </div>
  )
}
