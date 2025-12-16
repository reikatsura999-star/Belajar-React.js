import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import UpdateProfile from "./UpdateProfile.jsx";

const UserProfile = () => {
  const { user, logout } = useContext(UserContext);

  if (!user.isLoggedIn) {
    return <p>User belum login</p>;
  }

  return (
    <div>
      <h2>Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>

      {/* Form update profile */}
      <UpdateProfile />
    </div>
  );
};

export default UserProfile;
