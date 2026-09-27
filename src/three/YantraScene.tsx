import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';

/* ────────────────────────────────────────────────────────────────
   A yantra rendered as real geometry: concentric rings, a square
   enclosure, two interlocking triangles (shatkona) and a bindu at
   the centre. Abstracted sacred geometry — no deity, no ornament.
   ──────────────────────────────────────────────────────────────── */

const GOLD = '#D08A3A';
const GOLD_DEEP = '#8A4A18';

/** Equilateral triangle frame: outer triangle with a triangular hole. */
function triangleFrame(radius: number, thickness: number, pointDown: boolean): THREE.Shape {
  const corner = (r: number, i: number) => {
    const base = pointDown ? -Math.PI / 2 : Math.PI / 2;
    const angle = base + (i * 2 * Math.PI) / 3;
    return new THREE.Vector2(Math.cos(angle) * r, Math.sin(angle) * r);
  };

  const shape = new THREE.Shape();
  const outer = [corner(radius, 0), corner(radius, 1), corner(radius, 2)];
  shape.moveTo(outer[0].x, outer[0].y);
  shape.lineTo(outer[1].x, outer[1].y);
  shape.lineTo(outer[2].x, outer[2].y);
  shape.closePath();

  const hole = new THREE.Path();
  const innerR = radius - thickness;
  const inner = [corner(innerR, 0), corner(innerR, 1), corner(innerR, 2)];
  hole.moveTo(inner[0].x, inner[0].y);
  hole.lineTo(inner[1].x, inner[1].y);
  hole.lineTo(inner[2].x, inner[2].y);
  hole.closePath();
  shape.holes.push(hole);

  return shape;
}

function Yantra({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);

  const extrude = useMemo(
    () => ({ depth: 0.07, bevelEnabled: true, bevelSize: 0.012, bevelThickness: 0.012, bevelSegments: 2 }),
    [],
  );

  const upTriangle = useMemo(() => triangleFrame(1.85, 0.14, false), []);
  const downTriangle = useMemo(() => triangleFrame(1.85, 0.14, true), []);

  // Eight lotus-petal markers riding the outer ring.
  const petals = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return [Math.cos(a) * 2.62, Math.sin(a) * 2.62, 0] as const;
      }),
    [],
  );

  useFrame((state, delta) => {
    if (reduced || !group.current || !inner.current) return;
    const t = state.clock.elapsedTime;

    // Continuous slow rotation, clockwise as the viewer sees it. The camera
    // sits on +Z, so a positive rotation.z would read counter-clockwise —
    // hence the subtraction.
    inner.current.rotation.z -= delta * 0.09;
    group.current.position.y = Math.sin(t * 0.5) * 0.07;

    // Cursor parallax: the whole yantra leans toward the pointer.
    const targetX = state.pointer.y * 0.26;
    const targetY = state.pointer.x * 0.34;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.045;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.045;
  });

  return (
    <group ref={group} rotation={[0.18, -0.25, 0]}>
      <group ref={inner}>
        {/* Concentric rings */}
        <mesh>
          <torusGeometry args={[2.62, 0.022, 16, 160]} />
          <meshStandardMaterial color={GOLD} metalness={0.98} roughness={0.22} />
        </mesh>
        <mesh>
          <torusGeometry args={[2.44, 0.014, 12, 140]} />
          <meshStandardMaterial color={GOLD_DEEP} metalness={0.95} roughness={0.3} />
        </mesh>
        <mesh>
          <torusGeometry args={[2.05, 0.03, 16, 150]} />
          <meshStandardMaterial color={GOLD} metalness={0.98} roughness={0.2} />
        </mesh>
        <mesh>
          <torusGeometry args={[0.82, 0.02, 14, 110]} />
          <meshStandardMaterial color={GOLD} metalness={0.98} roughness={0.2} />
        </mesh>

        {/* Square enclosure — four bars, offset slightly in depth */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * Math.PI) / 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 2.24, Math.sin(angle) * 2.24, -0.08]}
              rotation={[0, 0, angle + Math.PI / 2]}
            >
              <boxGeometry args={[4.5, 0.05, 0.05]} />
              <meshStandardMaterial
                color={GOLD}
                metalness={0.8}
                roughness={0.34}
                envMapIntensity={1.6}
              />
            </mesh>
          );
        })}

        {/* Interlocking triangles */}
        <mesh position={[0, 0, 0.02]}>
          <extrudeGeometry args={[upTriangle, extrude]} />
          <meshStandardMaterial
            color={GOLD}
            metalness={0.82}
            roughness={0.3}
            envMapIntensity={1.5}
            emissive={GOLD_DEEP}
            emissiveIntensity={0.16}
          />
        </mesh>
        <mesh position={[0, 0, -0.02]}>
          <extrudeGeometry args={[downTriangle, extrude]} />
          <meshStandardMaterial
            color={GOLD_DEEP}
            metalness={0.82}
            roughness={0.38}
            envMapIntensity={1.5}
            emissive={GOLD_DEEP}
            emissiveIntensity={0.12}
          />
        </mesh>

        {/* Petal markers */}
        {petals.map((p, i) => (
          <mesh key={i} position={p as unknown as [number, number, number]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial
              color={GOLD}
              metalness={1}
              roughness={0.14}
              emissive={GOLD_DEEP}
              emissiveIntensity={0.35}
            />
          </mesh>
        ))}
      </group>

      {/* Bindu — the still centre, deliberately not spinning */}
      <mesh position={[0, 0, 0.14]}>
        <icosahedronGeometry args={[0.15, 2]} />
        <meshStandardMaterial
          color="#FBE7BE"
          metalness={1}
          roughness={0.08}
          emissive={GOLD}
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

/** Frees GPU memory when the hero unmounts. */
function Disposer() {
  useEffect(
    () => () => {
      THREE.Cache.clear();
    },
    [],
  );
  return null;
}

export default function YantraScene() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      className="yantra3d__canvas"
      camera={{ position: [0, 0, 8.2], fov: 42 }}
      dpr={[1, 1.75]}
      frameloop={reduced ? 'demand' : 'always'}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      // Decorative: the hero headline already carries the meaning.
      aria-hidden="true"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 6]} intensity={1.5} color="#FFDCA6" />
      <pointLight position={[-5, -3, 3]} intensity={28} color="#B5451B" distance={18} />
      <pointLight position={[3, 4, -4]} intensity={22} color="#FFB460" distance={20} />

      {/*
        Lightformers build the reflection map in-scene. Metal without an
        environment map renders black — and a preset HDR would mean a CDN
        fetch, which this page does not make.
      */}
      <Environment resolution={256} frames={1}>
        <Lightformer intensity={2.4} color="#FFD49A" position={[0, 3.5, -4]} scale={[9, 4, 1]} />
        <Lightformer intensity={1.2} color="#B5451B" position={[-5, -1, -3]} scale={[7, 7, 1]} />
        <Lightformer intensity={1.8} color="#FFFFFF" position={[4, 2, 4]} scale={[4, 4, 1]} />
        <Lightformer intensity={0.9} color="#2A1508" position={[0, -4, 2]} scale={[10, 3, 1]} />
        {/* Behind the camera — this is what the front-facing flat surfaces see. */}
        <Lightformer
          intensity={1.5}
          color="#FFE6C2"
          position={[0, 0.5, 9]}
          scale={[14, 14, 1]}
        />
      </Environment>

      <Yantra reduced={reduced} />
      <Disposer />
    </Canvas>
  );
}
