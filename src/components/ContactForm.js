import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" value={form.subject} onChange={handleChange} />
        </label>
        <label>
          Message:
          <textarea name="message" value={form.message} onChange={handleChange} />
        </label>
        <button type="submit">Send</button>
      </form>
      <p>
        Email: <a href="mailto:ztt@bu.edu">ztt@bu.edu</a><br />
        Phone: <a href="tel:+16179063155">617-906-3155</a>
      </p>
    </div>
  );
};

export default ContactForm;
