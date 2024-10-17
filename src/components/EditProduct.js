import './Components.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/ProductsSlice';

const EditProduct = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [available, setAvailable] = useState(product.available);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { ...product, name, description, price: parseFloat(price), available };
        dispatch(updateProduct(updatedProduct));
        onClose(); // Закрыть форму после обновления
    };

    return (
        <form className='FormAdd' onSubmit={handleSubmit}>
            <input className='InputAdd' value={name} onChange={(e) => setName(e.target.value)} required />
            <input className='InputAdd' value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input className='InputAdd' value={price} onChange={(e) => setPrice(e.target.value)} type="number" required />
            <label className='Label'>
                Доступно:
                <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
            </label>
            <button className='Button Btn' type="submit">Сохранить изменения</button>
            <button className='Button Btn' type="button" onClick={onClose}>Отменить</button>
        </form>
    );
};

export default EditProduct;
