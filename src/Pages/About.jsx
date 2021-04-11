import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { getAllUser } from '../Model/User';
import CustomTable from '../Components/CustomTable';

const About = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const result = await getAllUser();
      setListUser(result);
    };
    getUserData();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
  ];

  return (
    <Navbar title='About'>
      <CustomTable rows={listUser} columns={columns} />
    </Navbar>
  );
};

export default About;
