import React from "react";

function MailBox(props) {
  const unreadMessages = props.unreadMessages; // konsisten plural

  return (
    <>
      <h2>Conditional Rendering dengan && Operator</h2>
      <h1>Hallo</h1>


      {unreadMessages.length > 0 && (
        <h2>
          Anda memiliki {unreadMessages.length} Pesan Belum Dibaca
        </h2>
      )}

//====================================================//

      {unreadMessages.length === 0 && (
        <p>Anda Tidak Memiliki Pesan</p>
      )}
    </>
  );
}

export default MailBox;
