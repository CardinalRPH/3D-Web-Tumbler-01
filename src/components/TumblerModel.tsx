import { useEffect, useMemo, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface TumblerModelProps {
    modelPath: string;
    position?: [number, number, number];
    scale?: [number, number, number];
    opacity?: number;
}

export const TumblerModel = forwardRef<THREE.Group, TumblerModelProps>(
    ({ modelPath, position = [0, 0, 0], scale = [1, 1, 1], opacity = 1 }, ref) => {
        const { scene } = useGLTF(modelPath);

        const clonedScene = useMemo(() => {
            const clone = scene.clone(true);
            clone.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    if (Array.isArray(mesh.material)) {
                        mesh.material = mesh.material.map((m) => {
                            const mat = m.clone();
                            mat.transparent = true;
                            return mat;
                        });
                    } else if (mesh.material) {
                        mesh.material = mesh.material.clone();
                        mesh.material.transparent = true;
                    }
                }
            });
            return clone;
        }, [scene]);

        useEffect(() => {
            clonedScene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    if (Array.isArray(mesh.material)) {
                        mesh.material.forEach((m) => (m.opacity = opacity));
                    } else if (mesh.material) {
                        mesh.material.opacity = opacity;
                    }
                }
            });
        }, [clonedScene, opacity]);

        return (
            <group ref={ref} position={position} scale={scale}>
                <primitive object={clonedScene} />
            </group>
        );
    }
);

TumblerModel.displayName = 'TumblerModel';