import React, { useState, Suspense, lazy } from "react";

// Lazy load komponen
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function Main() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <h1>Demo Lazy Loading</h1>
      {/* Tombol navigasi */}
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("contact")}>Contact</button>

      {/* Suspense untuk fallback */}
      <Suspense fallback={<div>Loading...</div>}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </Suspense>
    </div>
  );
}

export default Main;
