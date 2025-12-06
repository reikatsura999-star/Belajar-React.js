import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang disubmit:', formData);
    alert(`Terima kasih, ${formData.firstName}! Data Anda telah disubmit.`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">📧 Formulir Kontak</h2>

      <div className="form-group">
        <label className="form-label">Nama Depan:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-input"
          placeholder="Masukkan nama depan"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Nama Belakang:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="form-input"
          placeholder="Masukkan nama belakang"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="Masukkan email"
        />
      </div>

      <button type="submit" className="btn-submit">✉️ Submit</button>
    </form>
  );
}

export default ContactForm;