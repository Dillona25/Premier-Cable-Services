import { Hero } from "./Hero/Hero";
import { Navbar } from "./Navbar/Navbar";

function App() {
  return (
    <div className="relative bg-Hero bg-cover bg-center h-screen">
      <Navbar />
      <div className="absolute inset-y-0 left-0 flex items-center">
        <div className="px-5 flex flex-col justify-center h-full">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
