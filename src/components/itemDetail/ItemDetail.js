const ItemDetail = ({producto}) => {
    return (
        <div className='producto'>
            <img src={producto.pictureUrl} alt={producto.title}></img>
            <p className='producto__nombre'>
                {producto.title}
            </p>
            <p className='producto__precio'>
                ${producto.price}
            </p>
        </div>
    )
}

export default ItemDetail;