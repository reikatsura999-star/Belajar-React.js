import React from "react";

export default function ConditionalStatus({ isLoggedIn, unreadCount }) {
  return (
    <div>
      <div>{isLoggedIn ? <strong>Anda sudah login</strong> : <strong>Silakan login</strong>}</div>
      <div>{unreadCount > 0 && <span>Pesan belum dibaca: {unreadCount}</span>}</div>
    </div>
  );
}
