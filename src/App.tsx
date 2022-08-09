import About from "./components/About";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-[#efefef]">
      <Navbar />
      <Container>
        <Hero />
        <About />
      </Container>
    </div>
  );
}

export default App;
