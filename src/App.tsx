import "./App.css";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Services from "./components/Services/Services.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
