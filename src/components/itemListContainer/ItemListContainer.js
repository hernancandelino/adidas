import '../itemListContainer/itemListContainer.css'
import ItemList from '../itemList/ItemList';

const ItemListContainer = () => {
    return (
        <>
            <div>        
                <h1>
                    Adidas
                </h1>
            </div>
            <div className='contenedor-cards'>
                <ItemList/>
            </div>
        </>
    )
}

export default ItemListContainer;