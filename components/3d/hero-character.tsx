"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF, Float, Text3D, Center } from "@react-three/drei"
import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function AnimatedCharacter() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      // Gentle rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Body */}
        <mesh
          ref={meshRef}
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.1 : 1}
        >
          <capsuleGeometry args={[0.5, 1, 16, 32]} />
          <meshStandardMaterial color="#edff23" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Head */}
        <mesh position={[0, 1.3, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#edff23" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.15, 1.4, 0.35]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#131313" />
        </mesh>
        <mesh position={[0.15, 1.4, 0.35]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#131313" />
        </mesh>

        {/* Smile */}
        <mesh position={[0, 1.15, 0.38]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.15, 0.03, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#131313" />
        </mesh>

        {/* Arms */}
        <mesh position={[-0.6, 0.3, 0]} rotation={[0, 0, -0.3]}>
          <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
          <meshStandardMaterial color="#edff23" roughness={0.3} metalness={0.2} />
        </mesh>
        <mesh position={[0.6, 0.3, 0]} rotation={[0, 0, 0.3]}>
          <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
          <meshStandardMaterial color="#edff23" roughness={0.3} metalness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

export function HeroCharacter3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#edff23" />
        <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#edff23" />

        <AnimatedCharacter />

        {/* Ground shadow */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>
      </Canvas>
    </div>
  )
}
