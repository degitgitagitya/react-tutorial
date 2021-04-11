import Axios from 'axios';

export const getAllUser = async () => {
  const { data } = await Axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return data;
};

export const deleteUser = async () => {};
