import React, { useState } from "react";

function EmployeeForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", position: "", department: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) return;
    onAdd(form);
    setForm({ name: "", position: "", department: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="position"
        placeholder="Position"
        value={form.position}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
