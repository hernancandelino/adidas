const navBar = () => {
return (<header>
<div id="logo">
    <img src="./img/logo.png" alt="logo"></img>
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
        <img src="../img/busqueda.png" alt="busqueda"></img>
    </div>
    <div>
        <img src="../img/perfil.png" alt="perfil"></img>
    </div>
    <div>
        <img src="../img/corazon.png" alt="deseados"></img>
    </div>
    <div>
        <img src="../img/compras.png" alt="compras"></img>
    </div>
</div>
</header>);
}

export default navBar;