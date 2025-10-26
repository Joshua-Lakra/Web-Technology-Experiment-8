import React, { useEffect, useState } from 'react';

export default function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await fetch('http://localhost:5000/employees');
    const data = await res.json();
    setEmployees(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/employees/${id}`, {
      method: 'DELETE',
    });
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="card">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul className="employee-list">
          {employees.map((emp) => (
            <li key={emp._id} className="employee-item">
              <span>
                <b>{emp.name}</b> — {emp.position} ({emp.department})
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(emp._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
