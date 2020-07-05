import React, {Fragment} from 'react';

const Producto = ({
    producto, 
    carrito, 
    setCarrito,
    isCarrito
}) => {
    const {nombre, precio, id} = producto;

    const agregarProducto = () => {
        const addProduct = [...carrito, producto];
        console.log(addProduct);
        setCarrito(addProduct);
    }

    const eliminarProducto = () => {
        const productos = carrito.filter(producto => producto.id !== id);
        setCarrito(productos)
    }


    return (
        <Fragment>
            <label>
                <strong>{nombre}</strong> - precio: ${precio}
            </label>
            {
                isCarrito 
                ? 
                <button 
                    type="button" 
                    style={{ marginLeft: 20}}
                    onClick={() => eliminarProducto()}
                > 
                    Eliminar
                </button>
                :
                <button 
                    type="button" 
                    style={{ marginLeft: 20}}
                    onClick={() => agregarProducto()}
                > 
                    Comprar
                </button>
            }
            <br />
        </Fragment>
    );
};

export default Producto;