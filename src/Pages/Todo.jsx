import { useEffect, useState } from 'react';
import CustomTable from '../Components/CustomTable';
import Navbar from '../Components/Navbar';
import { getAllTodo } from '../Model/Todo';

const Todo = () => {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    const getTodoData = async () => {
      const result = await getAllTodo();
      setListTodo(result);
    };
    getTodoData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'User ID', width: 130 },
    { field: 'title', headerName: 'Title', width: 130 },
  ];

  return (
    <Navbar>
      <CustomTable columns={columns} rows={listTodo} />
    </Navbar>
  );
};

export default Todo;
