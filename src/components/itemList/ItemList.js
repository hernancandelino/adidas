import Item from '../item/item'
import {Link} from 'react-router-dom';
import './itemList.css'

const ItemList = ({producto}) => {

            return (
                producto.map((producto) => {
                    return (
                    <Link className='link-producto' key={producto} to={`/producto/${producto.id}`}>
                        <Item producto={producto}/>
                    </Link>
               ) 
            })
            )
        }

export default ItemList;