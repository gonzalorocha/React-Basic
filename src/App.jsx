import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Producto from './component/Producto';
import Carrito from './component/Carrito';


import { data } from './data';
const App = () => {

    
    const [productos, setProductos] = useState(data);
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    const fecha = new Date().getFullYear();
    return ( 
        <Fragment>
            <Header 
                titulo='Tienda virtual'
            />
            <Carrito
                carrito={carrito}
                setCarrito={setCarrito}
            />
            {productos.map((producto) => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    setCarrito={setCarrito}
                    isCarrito={false}
                />
            ))}
            <Footer 
                fecha={fecha}
            />
        </Fragment>
    );
}

export default App;