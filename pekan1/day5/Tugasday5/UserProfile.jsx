import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(Number(e.target.value));
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">👤 Profil Pengguna</h2>

      {isEditing ? (
        <div>
          <div className="form-group">
            <label className="form-label">Nama:</label>
            <input
              type="text"
              value={name}
              onChange={handleChangeName}
              className="profile-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Usia:</label>
            <input
              type="number"
              value={age}
              onChange={handleChangeAge}
              className="profile-input"
            />
          </div>
          <div className="button-group">
            <button onClick={handleSave} className="btn-save">
              💾 Simpan
            </button>
            <button onClick={handleCancel} className="btn-cancel">
              ❌ Batal
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="profile-info">
            <p><strong>Nama:</strong> {name}</p>
            <p><strong>Usia:</strong> {age} tahun</p>
          </div>
          <div className="button-group">
            <button onClick={handleEdit} className="btn-edit">
              ✏️ Edit Profil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
