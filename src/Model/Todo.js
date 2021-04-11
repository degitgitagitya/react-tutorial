import Axios from 'axios';

export const getAllTodo = async () => {
  const { data } = await Axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );
  return data;
};
