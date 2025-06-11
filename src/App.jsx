import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext); // must be called unconditionally

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setUserRole(loggedInUser.role);
      if (loggedInUser.role === 'employee') {
        setLoggedInUserData(loggedInUser.data);
      }
    }
  }, []);

  if (!authData) return <div>Loading...</div>; // wait for context to load

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUserRole('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else {
      // ✅ Read fresh employee list from localStorage
      const freshEmployees = JSON.parse(localStorage.getItem('employees')) || [];
      const employee = freshEmployees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUserRole('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  return (
    <div>
      {!userRole && <Login handleLogin={handleLogin} />}
      {userRole === 'admin' && <AdminDashboard />}
      {userRole === 'employee' && <EmployeeDashboard />}
    </div>
  );
};

export default App;
