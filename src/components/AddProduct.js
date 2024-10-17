import './Components.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/ProductsSlice';

const AddProduct = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(), // уникальный ID
            name,
            description,
            price: parseFloat(price),
            available,
        };
        dispatch(addProduct(newProduct));
        setName('');
        setDescription('');
        setPrice('');
        setAvailable(true);
    };

    return (
        <form className='FormAdd' onSubmit={handleSubmit}>
            <h2 className='FormTitle'>Добавить продукт</h2>
            <input className='InputAdd' value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя продукта" required />
            <input className='InputAdd' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" required />
            <input className='InputAdd' value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Цена" required />
            <label className='Label'>
                Доступно:
                <input type="checkbox" checked={available} onChange={() => setAvailable(!available)} />
            </label>
            <button className='Button' type="submit">Добавить</button>
        </form>
    );
};

export default AddProduct;
