// import React from 'react';
// import ThemeProvider from './context/ThemeProvider';
// import UserProvider from './context/UserProvider';
// import ThemedButton from './components/themeButton';
// import ThemedParagraph from './components/ThemedParagraph';
// import UserInfoDisplay from './components/UserInfoDisplay';
// import UpdateProfile from './components/UpdateProfile';
// import './App.css'

// function App() {
//   return (
//     <ThemeProvider>
//       <UserProvider>
//         <div style={{ padding: '20px', textAlign: 'center' }}>
//           <h2>Aplikasi dengan Multiple Contexts</h2>
//           <ThemedButton />
//           <ThemedParagraph />
//           <hr />
//           <UserInfoDisplay />
//           <UpdateProfile />
//         </div>
//       </UserProvider>
//     </ThemeProvider>
//   );
// }

// export default App;










// import React from "react";
// import LanguageProvider from "./context/LanguageProvider";
// import NotificationProvider from "./context/NotificationProvider";
// import Header from "./components/Header";
// import "./App.css";

// export default function App() {
//   return (
//     <LanguageProvider>
//       <NotificationProvider>
//         <Header />
//       </NotificationProvider>
//     </LanguageProvider>
//   );
// }




import React from "react";
import ShoppingCartProvider from "./providers/ShoppingCartProvider";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

export default function App() {
  return (
    <ShoppingCartProvider>
      <div style={{ padding: "20px" }}>
        <h1>Aplikasi Shopping Cart</h1>
        <ProductList />
        <hr />
        <CartDisplay />
      </div>
    </ShoppingCartProvider>
  );
}

