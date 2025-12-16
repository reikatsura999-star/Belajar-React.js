import React, { useState } from "react";
import NotificationContext from "./NotificationContext";

function NotificationProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <NotificationContext.Provider value={{ count, setCount }}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
