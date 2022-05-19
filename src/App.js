import "./styles/App.css";
import { Main } from "./components/main";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import React from "react";

function App() {
  return (
    // <React.StrictMode>
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
    // </React.StrictMode>
  );
}

export default App;
