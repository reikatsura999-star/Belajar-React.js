import React from "react";

export default function Comment({ author, text, date }) {
  return (
    <div>
      <img src={author.avatarUrl} alt={author.name} width="60" />
      <div>
        <h4>{author.name}</h4>
        <p>{text}</p>
        <small>{date.toLocaleDateString()}</small>
      </div>
    </div>
  );
}
