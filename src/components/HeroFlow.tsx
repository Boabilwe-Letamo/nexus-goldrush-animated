import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function Routes({ gold, still }: { gold: string; still: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const time = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const curves = useMemo(() => Array.from({ length: 6 }, (_, i) => new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.5, -1.8-i*.12, 0),
    new THREE.Vector3(.8, -.2-i*.09, -1),
    new THREE.Vector3(4, -.7+i*.08, -2),
    new THREE.Vector3(7, .9+i*.12, -3),
  ])), []);
  useFrame((_, delta) => {
    if (!still) time.current += Math.min(delta, .05);
    const instance = mesh.current;
    if (!instance) return;
    for (let i = 0; i < 36; i++) {
      const curve = curves[i % 6];
      if (!curve) continue;
      const progress = (i / 36 + time.current * .035) % 1;
      dummy.position.copy(curve.getPoint(progress));
      dummy.rotation.set(time.current*.3, time.current*.2+i, 0);
      dummy.scale.setScalar(.035);
      dummy.updateMatrix();
      instance.setMatrixAt(i, dummy.matrix);
    }
    instance.instanceMatrix.needsUpdate = true;
  });
  return <>{curves.map((curve, i) => <Line key={i} points={curve.getPoints(50)} color={gold} transparent opacity={.16} lineWidth={.65} />)}<instancedMesh ref={mesh} args={[undefined, undefined, 36]}><boxGeometry args={[1,1,1]} /><meshBasicMaterial color={gold} transparent opacity={.8} /></instancedMesh></>;
}
export default function HeroFlow() {
  const [settings, setSettings] = useState<{gold:string;still:boolean}|null>(null);
  useEffect(() => {
    const test = document.createElement('canvas');
    if (!test.getContext('webgl2')) return;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setSettings({gold:getComputedStyle(document.documentElement).getPropertyValue('--scene-gold').trim(),still:media.matches});
    update();media.addEventListener('change',update);
    return () => media.removeEventListener('change',update);
  }, []);
  return <div className="hero-flow" aria-hidden="true">{settings && <Canvas camera={{position:[0,0,9],fov:48}} dpr={1} gl={{alpha:true,antialias:true}}><Routes {...settings} /></Canvas>}</div>;
}