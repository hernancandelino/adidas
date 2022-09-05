import logo from '../../img/iconos/logo.png'
import busqueda from '../../img/iconos/busqueda.png'
import perfil from '../../img/iconos/perfil.png'
import '../navbar/navbar.css'
import CartWidget from '../cartWidget/CartWidget'

const navBar = () => {
return (<header>
<div id="logo">
    <img src={logo} alt="logo"></img>
</div>
<nav>
    <div>
        MUJER
    </div>
    <div>
        HOMBRE
    </div>
    <div>
        NIÑOS
    </div>
    <div>
        DEPORTES
    </div>
    <div>
        MARCAS
    </div>
    <div>
        COLECCIONES
    </div>
</nav>
<div id="botones">
    <div id="busqueda">
        <input type="search" placeholder="Buscar"></input>
        <img src={busqueda} alt="busqueda"></img>
    </div>
    <div>
        <img src={perfil} alt="perfil"></img>
    </div>
        <CartWidget/>
    </div>
</header>);
}

export default navBar;