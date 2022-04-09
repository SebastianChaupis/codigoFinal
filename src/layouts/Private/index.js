import { Box, Grid,Button } from "@mui/material";
import { Link,Outlet } from "react-router-dom";
import "./main.css";
import logo from "../../assets/logo.jpeg";
const Private = ()=>{
    return(
        <div className="div-container">
            <nav className="navegar">
                <div className="div-nav">
                    <img className="logo" src={logo} alt="" />
                    <li className="li-nav-user">
                            <h4>Bienvenido(a) Usuario</h4>
                    </li>
                </div>
                <div className="div-nav2">
                    <ul className="ul-nav">
                        <li className="li-nav">
                            <Link to="/admin">Productos</Link>
                        </li>
                        <li className="li-nav">
                            <Link to="/admin/cuenta">Cuenta</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            {/*Esto va a recibir los componentes hijos */}
            <Outlet />
        </div>
    );
}
export default Private;
