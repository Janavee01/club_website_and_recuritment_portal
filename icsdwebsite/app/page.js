import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Departments from "../components/Departments";
import Activities from "../components/Activities";
import Contact from "../components/Contact";
import Particles from "../components/Particles";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <Particles
          particleColors={["#4A9EFF"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={200}
          cameraDistance={30}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Activities />
      <Contact />
    </main>
  );
}
