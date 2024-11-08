import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, getUsers } from '../redux/actions';
import AddUser from '../icons/AddUserIcon';

export const UserList = () => {
    const { users, favorites, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(getUsers);
        console.log("get users", users, error);
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleFavoriteClick = (userId) => {
        dispatch(addFavorite(userId));
    };


    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <>
                {selectedUser !== null && (
                    <div className='userDetails'>
                        <h2>User Details</h2>
                        <p>Name: {selectedUser.name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <p>Phone: {selectedUser.phone}</p>
                    </div>
                )}
            </>
            <ul className='listContainer'>
                {users?.map((user) => (
                    <> <li key={user.id} onClick={() => { handleUserClick(user) }} className='userList'>
                        {user.name}
                        <button className="favoriteButton" onClick={(e) => {
                            e.stopPropagation();
                            handleFavoriteClick(user.id);
                        }}>
                            {favorites.includes(user.id) ? '★' : '☆'}
                        </button>
                    </li>

                    </>))}
            </ul>

        </div>
    )
}
export default UserList;
