'use client';
import React, { useState } from 'react';

const StudentInfo: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    course: '',
    year: '',
    month: '',
    date: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <div className="card">
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Student Name:</label>
        <input name="name" type="text" value={form.name} onChange={handleChange} required />
        
        <label>Age:</label>
        <input name="age" type="number" value={form.age} onChange={handleChange} required />
        
        <label>Course:</label>
        <select name="course" value={form.course} onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="BS in Computer Engineering">BS in Computer Engineering</option>
          <option value="BS in Civil Engineering">BS in Civil Engineering</option>
          <option value="BS in Mechanical Engineering">BS in Mechanical Engineering</option>
        </select>

        <label>Birth Year:</label>
        <select name="year" value={form.year} onChange={handleChange} required>
          <option value="">Year</option>
          {Array.from({ length: 25 }, (_, i) => (
            <option key={2000 + i}>{2000 + i}</option>
          ))}
        </select>

        <label>Birth Month:</label>
        <select name="month" value={form.month} onChange={handleChange} required>
          <option value="">Month</option>
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            .map((m, i) => <option key={i + 1} value={m}>{m}</option>)}
        </select>

        <label>Birth Date:</label>
        <input name="date" type="number" min="1" max="31" value={form.date} onChange={handleChange} required />

        <div className="btn-row">
          <button type="submit" className="btn submit">Submit</button>
          <button type="reset" className="btn cancel" onClick={() => setForm({ name: '', age: '', course: '', year: '', month: '', date: '' })}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default StudentInfo;
