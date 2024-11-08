import { getUsersData, addUserData } from "../api/usersDataFunctions";
import { ADD_USER, FAVORITE, GET_ERROR, GET_USERS } from "./types";

export const getUsers = async (dispatch) => {
  try {
    const usersData = await getUsersData();
    console.log(usersData);
    dispatch({ type: GET_USERS, payload: usersData.data });

  } catch (e) {
    dispatch({ type: GET_ERROR, payload: 'Error when get users' });
  }

};

export const addUser = (user) => async (dispatch) => {
  try {
    const userData = await addUserData(user);
    console.log(userData.data)
    dispatch({ type: ADD_USER, payload: userData.data });

  } catch (e) {
    dispatch({ type: GET_ERROR, payload: 'Error when add user' });
  }
};

export const addFavorite = (userId) => ({
  type: FAVORITE,
  payload: userId,
});
