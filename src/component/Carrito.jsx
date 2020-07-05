import React, { Fragment } from 'react';
import Producto from './Producto';
import './carrito.css';

const Carrito = ({carrito, setCarrito}) => {
    return (
        <div className="carrito">
            <h2>
                Carrito de compras
            </h2>
            {
                carrito.length === 0 
                ? 
                    <strong>No hay nada en el carrito</strong>
                :
                    carrito.map((producto) =>(
                        <Producto
                            key={producto.id}
                            producto={producto}
                            carrito={carrito}
                            setCarrito={setCarrito}
                            isCarrito={true}
                        />
                    ))
            }
        </div>
    )
}

export default Carrito
