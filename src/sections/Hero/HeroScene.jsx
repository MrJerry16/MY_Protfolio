import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, ContactShadows, PresentationControls, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const CareerNode = ({ position, color, label, icon: Icon, index }) => {
    const [hovered, setHovered] = useState(false);
    const meshRef = useRef();

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        // Subtle independent movement
        meshRef.current.position.y = position[1] + Math.sin(time + index) * 0.15;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={hovered ? 1.2 : 1}
                transition="scale 0.3s"
            >
                <boxGeometry args={[1.2, 1.2, 0.2]} />
                <meshStandardMaterial
                    color={hovered ? '#2563eb' : color}
                    roughness={0.3}
                    metalness={0.8}
                    transparent
                    opacity={0.9}
                />

                <Text
                    position={[0, 0, 0.15]}
                    fontSize={0.12}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={1}
                >
                    {label.toUpperCase()}
                </Text>
            </mesh>
        </Float>
    );
};

const Scene = () => {
    const centerMesh = useRef();

    useFrame((state) => {
        if (centerMesh.current) {
            centerMesh.current.rotation.y += 0.01;
            centerMesh.current.rotation.x += 0.005;
        }
    });

    const nodes = [
        { label: 'Java Developer', color: '#60a5fa', position: [-2, 1, 0] },
        { label: 'Software Dev', color: '#93c5fd', position: [2, 1, 0] },
        { label: 'Data Analyst', color: '#3b82f6', position: [-2, -1, 0] },
        { label: 'Project Mgmt', color: '#1d4ed8', position: [2, -1, 0] }
    ];

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

            <mesh ref={centerMesh}>
                <octahedronGeometry args={[0.8, 0]} />
                <MeshDistortMaterial
                    color="#2563eb"
                    speed={2}
                    distort={0.4}
                    radius={1}
                />
            </mesh>

            {nodes.map((node, i) => (
                <CareerNode key={i} {...node} index={i} />
            ))}

            <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </>
    );
};

const HeroScene = () => {
    return (
        <div className="hero-3d-container" style={{ width: '100%', height: '500px' }}>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                >
                    <Scene />
                </PresentationControls>
            </Canvas>
        </div>
    );
};

export default HeroScene;
