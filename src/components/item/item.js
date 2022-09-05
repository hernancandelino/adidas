import './item.css'

const Item = ({producto}) => {
    return (
        <div className='producto'>
            <div className='card'>
                <img className='imagen-producto' src={producto.pictureUrl} alt={producto.title}></img>
                <div className='container-precio'>
                    <p className='precio'>
                        ${producto.price}
                    </p>
                </div>
            </div>
            <div className='informacion-producto'>
                <p className='producto-titulo'>
                    {producto.title}
                </p>
                <p className='producto-categoria'>
                    {producto.categoria} {producto.subCategoria}
                </p>
            </div>
        </div>
    )
}

export default Item;