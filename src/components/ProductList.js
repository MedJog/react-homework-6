import './Components.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from '../redux/ProductsSlice';
import EditProduct from './EditProduct';

const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [editingProduct, setEditingProduct] = useState(null);

    return (
        <>
            <ul className='List'>
                {products.map((product) => (
                    <li className='ListItem' key={product.id}>
                        <h3 className='ItemName'>{product.name}</h3>
                        <div className='ItemInfo'>
                        <p className='ItemDesc'>Описание: {product.description}</p>
                        <p className='ItemPrice'>Цена: {product.price} руб.</p>
                        <p className='ItemAv'>Доступно: {product.available ? 'Да' : 'Нет'}</p>
                        </div>
                        <div className='Buttons'>
                        <button className='Button Btn' onClick={() => dispatch(toggleAvailability(product.id))}>
                            {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
                        </button>
                        <button className='Button Btn' onClick={() => dispatch(removeProduct(product.id))}>Удалить</button>
                        <button className='Button Btn' onClick={() => setEditingProduct(product)}>Редактировать</button>
                        </div>  
                    </li>
                ))}
            </ul>
            {editingProduct && (
                <div>
                    <h2 className='FormTitle'>Редактировать продукт</h2>
                    <EditProduct product={editingProduct} onClose={() => setEditingProduct(null)} />
                </div>
            )}
        </>
    );
};

export default ProductList;
