import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

function AddUser({ setFromState }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ name, email, phone }));
        setName('');
        setEmail('');
        setPhone('');
        setFromState(false)
    };

    return (
        <form onSubmit={handleSubmit} className='addUserForm'>
            <h2 className='formTitle'>Add User</h2>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Phone:</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} pattern={"[0-9]{11}"} required />
            <button type="submit" className='submitBtn'>Add User</button>
        </form>
    );
}

export default AddUser;
