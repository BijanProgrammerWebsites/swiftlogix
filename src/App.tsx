import "./App.css";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Services from "./components/Services/Services.tsx";
import Review from "./components/Review/Review.tsx";
import Stats from "./components/Stats/Stats.tsx";
import Banner from "./components/Banner/Banner.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Review />
        <Stats />
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
