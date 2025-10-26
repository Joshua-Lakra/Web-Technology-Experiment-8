import React, { useState } from 'react';
import AddEmployee from './pages/AddEmployee';
import ViewEmployees from './pages/ViewEmployees';
import './App.css';

function App() {
  const [page, setPage] = useState('add');

  return (
    <div className="container">
      <h1>Corporate HR Employee Portal</h1>
      <div className="nav-buttons">
        <button
          className={page === 'add' ? 'active' : ''}
          onClick={() => setPage('add')}
        >
          Add Employee
        </button>
        <button
          className={page === 'view' ? 'active' : ''}
          onClick={() => setPage('view')}
        >
          View Employees
        </button>
      </div>

      {page === 'add' ? <AddEmployee /> : <ViewEmployees />}
    </div>
  );
}

export default App;
