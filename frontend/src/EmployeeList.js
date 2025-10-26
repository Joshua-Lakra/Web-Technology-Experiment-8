import React from "react";

function EmployeeList({ employees, onDelete }) {
  return (
    <div>
      <h3>Employee List</h3>
      <ul>
        {employees.map((emp) => (
          <li key={emp._id}>
            {emp.name} — {emp.position} ({emp.department})
            <button onClick={() => onDelete(emp._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
