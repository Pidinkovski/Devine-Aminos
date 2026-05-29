"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

export function MoleculeField({ color }: { color: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 5, 5]} intensity={1.8} />
        <Molecule color={color} />
      </Canvas>
    </div>
  );
}

function Molecule({ color }: { color: string }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.15;
    group.current.rotation.x = Math.sin(Date.now() * 0.0004) * 0.08;
  });

  return (
    <Float speed={1.7} rotationIntensity={0.35} floatIntensity={0.45}>
      <group ref={group} position={[2.4, 0.4, 0]}>
        {[
          [-1.2, 0.8, 0],
          [0, 0, 0.2],
          [1.1, 0.7, -0.1],
          [0.9, -0.9, 0.25],
          [-0.9, -0.8, -0.15],
        ].map(([x, y, z], index) => (
          <Sphere key={index} args={[0.18, 24, 24]} position={[x, y, z]}>
            <meshStandardMaterial color={index === 1 ? color : "#ffffff"} roughness={0.25} />
          </Sphere>
        ))}
        <Line from={[-1.2, 0.8, 0]} to={[0, 0, 0.2]} color={color} />
        <Line from={[0, 0, 0.2]} to={[1.1, 0.7, -0.1]} color={color} />
        <Line from={[0, 0, 0.2]} to={[0.9, -0.9, 0.25]} color={color} />
        <Line from={[0, 0, 0.2]} to={[-0.9, -0.8, -0.15]} color={color} />
      </group>
    </Float>
  );
}

function Line({
  from,
  to,
  color,
}: {
  from: [number, number, number];
  to: [number, number, number];
  color: string;
}) {
  const midpoint: [number, number, number] = [
    (from[0] + to[0]) / 2,
    (from[1] + to[1]) / 2,
    (from[2] + to[2]) / 2,
  ];
  const length = Math.hypot(to[0] - from[0], to[1] - from[1], to[2] - from[2]);

  return (
    <mesh position={midpoint} rotation={[Math.PI / 2, 0, Math.atan2(to[1] - from[1], to[0] - from[0]) + Math.PI / 2]}>
      <cylinderGeometry args={[0.025, 0.025, length, 12]} />
      <meshStandardMaterial color={color} roughness={0.35} />
    </mesh>
  );
}
