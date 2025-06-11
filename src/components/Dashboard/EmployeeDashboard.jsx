import React, { useEffect, useState } from 'react';
import Header from "../../other/Header";
import TaskListNumbers from '../../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('loggedInUser'));
    if (data) {
      setUserData(data.data);
    }
  }, []);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data={userData} />
      <TaskListNumbers data={userData} />
      <TaskList task={userData.tasks || []} />
    </div>
  );
};

export default EmployeeDashboard;
