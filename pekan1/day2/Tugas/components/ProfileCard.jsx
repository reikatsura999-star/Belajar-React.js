import React from "react";

export default function ProfileCard({ name, photo, bio, skills }) {
  return (
    <div>
      <img src={photo} alt={name} width="100" />
      <div>
        <h2>{name}</h2>
        <p>{bio}</p>
        <h4>Skills</h4>
        <ul>
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
