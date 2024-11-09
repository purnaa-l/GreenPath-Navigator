import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

interface BuildingProps {
  position: [number, number, number];
  scale: [number, number, number];
  label: string;
  color?: string;
  rotation?: [number, number, number]; // Add optional rotation prop
}

interface TreeProps {
  position: [number, number, number];
  scale?: [number, number, number];
  label: string;
}

const Building: React.FC<BuildingProps> = ({
  position,
  scale,
  label,
  rotation = [0, 0, 0],
  color = "rosybrown",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position} scale={scale} rotation={rotation} castShadow>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              padding: "5px",
              background: "rgba(255,255,255,0.8)",
              borderRadius: "4px",
            }}
          >
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

const Tree: React.FC<TreeProps> = ({ position, scale = [1, 1, 1], label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position} scale={scale}>
      <mesh
        position={[0, 0.5, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color="saddlebrown" />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <coneGeometry args={[0.5, 1, 8]} />
        <meshStandardMaterial color="green" />
      </mesh>
      {hovered && (
        <Html distanceFactor={10}>
          <div
            style={{
              padding: "5px",
              background: "rgba(255,255,255,0.8)",
              borderRadius: "4px",
            }}
          >
            {label}
          </div>
        </Html>
      )}
    </group>
  );
};

const CampusModel: React.FC = () => {
  return (
    <>
      {/* Main building with label and tilt */}
      <Building
        position={[11, 0.5, -2]}
        scale={[3, 4, 8.5]}
        label="Main Building 6"
        rotation={[0, 10, 0]}
      />
      <Building
        position={[10, 0.5, 2]}
        scale={[4, 4, 3]}
        label="Main Building 6"
        rotation={[0, 10, 0]}
      />
      <Building
        position={[7, 0.5, 0]}
        scale={[6, 4, 3]}
        label="Main Building 5"
        rotation={[0, 10, 0]}
      />
      <Building
        position={[4, 0.5, 0]}
        scale={[4, 4, 3]}
        label="Main Building 4"
        rotation={[0, 10, 0]}
      />
      <Building
        position={[2, -0.5, -4.75]}
        scale={[2, 2, 5]}
        label="canteen"
        rotation={[0, 3.7, 0]}
        color="blue"
      />
      <Building
        position={[2, 0.5, -3]}
        scale={[4, 4, 3]}
        label="Main Building 3"
        rotation={[0, 10, 0]}
      />
      <Building
        position={[2, 0.5, 0]}
        scale={[4, 4, 3]}
        label="Main Building 2"
        rotation={[0, 10, 0]}
      />
      <Building
        position={[0, 0.5, 0]}
        scale={[4, 4, 3]}
        label="Main Building 1"
        rotation={[0, 10, 0]}
      />

      {/* Trees with labels */}
      <Tree position={[-3, -2, 3]} scale={[1.5, 1.5, 1.5]} label="Oak Tree" />
      <Tree position={[-2, -2, -4]} scale={[1.5, 1.5, 1.5]} label="Pine Tree" />
      <Tree
        position={[3, -2, 3]}
        scale={[1.5, 1.5, 1.5]}
        label="Cherry Blossom"
      />
      <Tree position={[16, -2, 3]} scale={[1.5, 1.5, 1.5]} label="Blossom 2" />
      <Tree
        position={[16, -2, 5]}
        scale={[1.5, 1.5, 1.5]}
        label="Blossom 2"
      />
    </>
  );
};

const Model: React.FC = () => {
  return (
    <Canvas
      style={{ height: "100vh" }}
      camera={{ position: [20, 20, 20], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <OrbitControls />
      <CampusModel />
    </Canvas>
  );
};

export default Model;
