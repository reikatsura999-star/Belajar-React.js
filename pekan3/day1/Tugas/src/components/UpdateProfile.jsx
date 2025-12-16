import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const UpdateProfile = () => {
  const { updateProfile } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(name, email); // update state global
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Profile</h3>
      <input
        type="text"
        placeholder="Nama baru"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Email baru"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Simpan</button>
    </form>
  );
};

export default UpdateProfile;
