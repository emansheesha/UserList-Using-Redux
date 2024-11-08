import axiosBaseUrl from "./axiosBaseUrl";

export const getUsersData = async () => {
    const usersData = await axiosBaseUrl.get('/users')
    // console.log('getUsersData', usersData);
    return usersData
}

export const addUserData = async (user) => {
    const usersData = await axiosBaseUrl.post('/users', user)
    // console.log('getUsersData', usersData, user);
    return usersData
}