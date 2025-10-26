import React, { useState } from 'react';

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
  });
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const handleChange = (e) =>
    setEmployee({ ...employee, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employee.name || !employee.position || !employee.department) {
      setMessage('Please fill all fields.');
      setColor('red');
      return;
    }

    await fetch('http://localhost:5000/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    });

    setMessage('✅ Employee added successfully!');
    setColor('green');
    setEmployee({ name: '', position: '', department: '' });
  };

  return (
    <div className="card">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="calc-btn">Add Employee</button>
          <button
            type="button"
            className="reset-btn"
            onClick={() => setEmployee({ name: '', position: '', department: '' })}
          >
            Reset
          </button>
        </div>
      </form>

      {message && <p style={{ color, marginTop: '10px' }}>{message}</p>}
    </div>
  );
}
