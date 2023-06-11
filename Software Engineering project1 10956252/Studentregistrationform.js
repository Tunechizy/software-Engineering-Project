import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form data from the state variables (name, email, course)
    console.log('Submitted:', name, email, course);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Course:
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select a course</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
