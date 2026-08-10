import React, { useRef, useLayoutEffect } from 'react';
import { Environment, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TumblerModel } from './TumblerModel';

import tumblerWithLidUrl from '../assets/tumbler1_iris_lid.glb';
import tumblerNoLidUrl from '../assets/tumbler1_iris_nolid.glb';
import tumbler2Url from '../assets/tumbler1_olive_lid.glb';

gsap.registerPlugin(ScrollTrigger);

useGLTF.preload(tumblerWithLidUrl);
useGLTF.preload(tumblerNoLidUrl);
useGLTF.preload(tumbler2Url);

export const SceneController: React.FC = () => {
    const tumblerWithLidRef = useRef<THREE.Group>(null!);
    const tumblerNoLidRef = useRef<THREE.Group>(null!);
    const tumbler2Ref = useRef<THREE.Group>(null!);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

    const { width, height } = useThree((state) => state.size);
    const isMobile = width < 768; // Mobile breakpoint check

    useLayoutEffect(() => {
        const mainWithLid = tumblerWithLidRef.current;
        const mainNoLid = tumblerNoLidRef.current;
        const tumbler2 = tumbler2Ref.current;
        const camera = cameraRef.current;

        if (!mainWithLid || !mainNoLid || !tumbler2 || !camera) return;

        // Adjust values dynamically based on screen size
        const mobileCamZFactor = isMobile ? 1.4 : 1.0;
        const sideBySideXOffset = isMobile ? 0.95 : 1.4;

        const fadeState = { opacityWithLid: 1, opacityNoLid: 0 };

        const updateOpacity = () => {
            [mainWithLid, tumbler2].forEach((grp) => {
                grp.traverse((child) => {
                    if ((child as THREE.Mesh).isMesh) {
                        const m = (child as THREE.Mesh).material;
                        if (Array.isArray(m)) m.forEach((mat) => (mat.opacity = fadeState.opacityWithLid));
                        else if (m) m.opacity = fadeState.opacityWithLid;
                    }
                });
            });
            mainNoLid.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const m = (child as THREE.Mesh).material;
                    if (Array.isArray(m)) m.forEach((mat) => (mat.opacity = fadeState.opacityNoLid));
                    else if (m) m.opacity = fadeState.opacityNoLid;
                }
            });
        };

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-container", //target to scene 0-4
                start: "top top",
                end: "bottom bottom",        // Unpins exactly at the end of Scene 4
                scrub: 1.2,
                pin: ".fixed-canvas-container", // Pins the Canvas wrapper specifically
                pinSpacing: false,            // Prevents unwanted extra whitespace before non-3D content
            },
        });

        // SCENE 0 -> SCENE 1: Focus on Handle
        tl.to(camera.position, {
            x: isMobile ? 0.4 : 0.8,
            y: 0.2,
            z: 2.2 * mobileCamZFactor,
            duration: 2
        }, "scene1")
            .to(mainWithLid.rotation, { x: 0, y: -Math.PI * 0.15, z: 0, duration: 2 }, "scene1")
            .to(mainNoLid.rotation, { x: 0, y: -Math.PI * 0.15, z: 0, duration: 2 }, "scene1");

        // SCENE 1 -> SCENE 2: Focus on Lid & Straw
        tl.to(camera.position, {
            x: isMobile ? 0.1 : 0.2,
            y: isMobile ? 2.2 : 1.8,
            z: 2.2 * mobileCamZFactor,
            duration: 2
        }, "scene2")
            .to(mainWithLid.rotation, { x: 0.3, y: Math.PI * 0.25, z: 0, duration: 2 }, "scene2")
            .to(mainNoLid.rotation, { x: 0.3, y: Math.PI * 0.25, z: 0, duration: 2 }, "scene2");

        // SCENE 2 -> SCENE 3: Top-Down Interior View
        tl.to(camera.position, {
            x: 0,
            y: isMobile ? 4.5 : 3.5,
            z: isMobile ? 0.4 : 0.2,
            duration: 2
        }, "scene3")
            .to(camera.rotation, { x: -Math.PI / 2.2, y: 0, z: 0, duration: 2 }, "scene3")
            .to(mainWithLid.rotation, { x: 0, y: -Math.PI * 0.4, z: 0, duration: 2 }, "scene3")
            .to(mainNoLid.rotation, { x: 0, y: -Math.PI * 0.4, z: 0, duration: 2 }, "scene3")
            .to(fadeState, { opacityWithLid: 0, opacityNoLid: 1, duration: 1, onUpdate: updateOpacity }, "scene3");

        // SCENE 3 -> SCENE 4: Eye-level Zoom Out & Side-by-side Alignment
        tl.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 2 }, "scene4")
            .to(camera.position, {
                x: 0,
                y: 0,
                z: 8.2 * (isMobile ? 1.35 : 1.0),
                duration: 2
            }, "scene4")
            .to(fadeState, { opacityWithLid: 1, opacityNoLid: 0, duration: 1, onUpdate: updateOpacity }, "scene4")
            .set(mainNoLid, { visible: false }, "scene4+=1")
            .to(mainWithLid.position, { x: sideBySideXOffset, y: 0, z: 0, duration: 2 }, "scene4")
            .to(mainWithLid.rotation, { x: 0, y: 0, z: 0, duration: 2 }, "scene4")
            .to(tumbler2.position, { x: -sideBySideXOffset, y: 0, z: 0, duration: 2 }, "scene4")
            .to(tumbler2.scale, { x: 1, y: 1, z: 1, duration: 1.5 }, "scene4");

        tl.set(mainNoLid, { visible: true }, "scene3");

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [width, height, isMobile]);

    return (
        <>
            <PerspectiveCamera
                makeDefault
                ref={cameraRef}
                position={[0, 0, isMobile ? 9.5 : 7]}
                fov={isMobile ? 50 : 45}
            />

            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 8, 5]} intensity={1.5} />
            <directionalLight position={[-5, -2, -2]} intensity={0.5} />

            <TumblerModel ref={tumblerWithLidRef} modelPath={tumblerWithLidUrl} />
            <TumblerModel ref={tumblerNoLidRef} modelPath={tumblerNoLidUrl} opacity={0} />
            <TumblerModel
                ref={tumbler2Ref}
                modelPath={tumbler2Url}
                position={[-5, 0, 0]}
                scale={[0, 0, 0]}
            />

            <Environment preset="city" />
        </>
    );
};