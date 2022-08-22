import logo from '../../img/logo.png'
import busqueda from '../../img/busqueda.png'
import favoritos from '../../img/corazon.png'
import perfil from '../../img/perfil.png'
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
    <div>
        <img src={favoritos} alt="deseados"></img>
    </div>
        <CartWidget/>
</div>
</header>);
}

export default navBar;