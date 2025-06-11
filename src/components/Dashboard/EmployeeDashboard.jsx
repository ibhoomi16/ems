import React, { useEffect, useState } from 'react';
import Header from "../../other/Header";
import TaskListNumbers from '../../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  const [userData, setUserData] = useState(null);

  const fetchLatestUser = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const allEmployees = JSON.parse(localStorage.getItem('employees')) || [];

    if (loggedInUser?.role === 'employee') {
      const freshEmployee = allEmployees.find(emp =>
        emp.firstName.toLowerCase() === loggedInUser.data?.firstName.toLowerCase()
      );

      if (freshEmployee) {
        console.log("✅ Found fresh employee data:", freshEmployee);
        setUserData(freshEmployee);
      } else {
        console.warn("⚠️ Employee not found in employees list.");
      }
    }
  };

  useEffect(() => {
    fetchLatestUser();

    // 🔁 Re-fetch every 3 seconds to get new tasks
    const interval = setInterval(() => {
      fetchLatestUser();
    }, 3000);

    // 🔁 Re-fetch when tab becomes active
    window.addEventListener("focus", fetchLatestUser);

    return () => {
      clearInterval(interval);
      window.removeEventListener("focus", fetchLatestUser);
    };
  }, []);

  if (!userData) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen'>
      <Header data={userData} />
      <TaskListNumbers data={userData} />
      <TaskList task={userData.tasks || []} />
    </div>
  );
};

export default EmployeeDashboard;
