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
        <div className="w-10/12 md:w-6/12 h-48 rounded-xl mx-auto border-2 border-[#efefef] flex justify-center items-center mb-20">
        Skills & Certifications coming soon...
        </div>
      </Container>
    </div>
  );
}

export default App;
