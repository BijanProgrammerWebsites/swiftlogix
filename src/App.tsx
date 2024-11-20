import "./App.css";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Services from "./components/Services/Services.tsx";
import Review from "./components/Review/Review.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Review />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
