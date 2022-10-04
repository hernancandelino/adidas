import logo from '../../img/iconos/logo.png'
import busqueda from '../../img/iconos/busqueda.png'
import perfil from '../../img/iconos/perfil.png'
import '../navbar/navbar.css'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const navBar = () => {
return (<header>
<div id="logo">
    <NavLink to="/productos">
        <img src={logo} alt="logo"></img>
    </NavLink>
</div>
<nav>
    <div>
        <NavLink className="nav-component" to='/productos/mujer'>MUJER</NavLink>
    </div>
    <div>
        <NavLink className="nav-component" to="/productos/hombre">HOMBRE</NavLink>
    </div>
    <div>
        <NavLink className="nav-component" to="/productos/niños">NIÑOS</NavLink>
    </div>
    <div>
        <NavLink className="nav-component" to="/productos/deportes">DEPORTES</NavLink>
    </div>
    <div>
        <NavLink className="nav-component" to="/productos/marcas">MARCAS</NavLink>
    </div>
    <div>
        <NavLink className="nav-component" to="/productos/colecciones">COLECCIONES</NavLink>
    </div>
</nav>
<div id="botones">
    <div id="busqueda">
        <input type="search" placeholder="Buscar"></input>
        <img src={busqueda} alt="busqueda"></img>
    </div>
        <CartWidget/>
    </div>
</header>);
}

export default navBar;