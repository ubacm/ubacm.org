import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
      <div className="container mx-auto px-8 h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-hidden">
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
