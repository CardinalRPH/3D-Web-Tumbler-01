import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SceneController } from './components/SceneController';
import { UIOverlay } from './components/UIOverlay';

export default function App() {
  return (
    <div className="relative w-full bg-[#2b2b2b] text-white">
      {/* Sticky 3D Canvas Context */}
      <div className="sticky top-0 left-0 w-full h-screen z-10 pointer-events-none">
        <Canvas gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <SceneController />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Content Overlay */}
      <UIOverlay />
    </div>
  );
}