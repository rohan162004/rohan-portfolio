import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default App;
