import logo from '../../img/iconos/logo.png'
import '../navbar/navbar.css'
import CartWidget from '../cartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
return (<header>
<div id="logo">
    <NavLink to="/productos">
        <img src={logo} alt="logo"></img>
    </NavLink>
</div>
<nav>
    <div>
        <NavLink className="nav-component" to="/productos/mujer">MUJER</NavLink>
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
</nav>
    <div id="botones">
        <CartWidget/>
    </div>
</header>);
}

export default NavBar;