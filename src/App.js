import "./styles/App.css";
import { Main } from "./components/main";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
