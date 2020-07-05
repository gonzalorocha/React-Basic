import React from 'react'

const Footer = ({fecha}) => {
    return (
        <footer>
            <label> Todos los derechos reservados &copy; - {fecha}</label>
        </footer>
    );
}
 
export default Footer;