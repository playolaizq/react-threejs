import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import WebGL from 'three/addons/capabilities/WebGL.js';

import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import Model from './components/model/Model';
import './App.css';

const MODEL_URL = '/models/littlest-tokyo.glb';

function App() {
  return (
    <section className="app-section">
      <Header />
      <Canvas>
        <ambientLight intensity={1} />
        <hemisphereLight intensity={0.65} />
        <directionalLight
          intensity={3}
          position={[10, 10, 2]}
          castShadow={true}
        />
        <PerspectiveCamera
          makeDefault={true}
          position={[0, 350, 850]}
          near={100}
          far={3000}
        />
        <OrbitControls minDistance={300} maxDistance={1500} />
        <Suspense fallback={<Loader />}>
          <Model modelUrl={MODEL_URL} />
        </Suspense>
      </Canvas>
    </section>
  );
}

function AppWrapper() {
  if (!WebGL.isWebGL2Available()) {
    return (
      <section>
        <h1>WebGL is not supported, sorry for the inconvenience.</h1>
      </section>
    );
  }

  return <App />
}

export default AppWrapper;

useGLTF.preload(MODEL_URL);
