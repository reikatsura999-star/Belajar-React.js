import React, { useState, useContext } from 'react';
import useUserContext from '../contexts/useUserContext';

function UpdateProfile() {
  const { updateProfile } = useUserContext()
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(form.name, form.email);
    setForm({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>Update Profile</h3>
      <input
        name="name"
        placeholder="Nama baru"
        value={form.name}
        onChange={handleChange}
      />
      <br />
      <input
        name="email"
        type="email"
        placeholder="Email baru"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Simpan</button>
    </form>
  );
}

export default UpdateProfile;
