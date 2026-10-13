import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, Line } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

// Abstract trade-network sculpture; colours are read from the site design tokens.
function Network({ gold, ink, still }: { gold: string; ink: string; still: boolean }) {
  const group = useRef<THREE.Group>(null);
  const particles = useRef<THREE.InstancedMesh>(null);
  const time = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const shape = useMemo(() => {
    const coords: [number, number][] = [[-2.5,2.8],[-1.8,3.5],[-.5,3.6],[.4,3.3],[1.5,3.35],[1.8,2.8],[2.3,1.7],[3,1.3],[2.4,.7],[1.8,.1],[1.45,-1.2],[.8,-2.5],[.2,-3.4],[-.4,-3.1],[-.9,-1.5],[-1.5,-.4],[-1.5,.5],[-2.4,.8],[-2.9,1.7]];
    const s = new THREE.Shape();coords.forEach(([x,y],i) => i ? s.lineTo(x,y) : s.moveTo(x,y));s.closePath();return s;
  }, []);
  const points = useMemo(() => {
    const pts: number[] = []; const poly = shape.getPoints();
    for (let y=-3.5;y<3.65;y+=.095) for(let x=-3;x<3.1;x+=.095) {
      let inside=false; for(let i=0,j=poly.length-1;i<poly.length;j=i++) { const a=poly[i],b=poly[j];if(!a || !b) continue;if((a.y>y)!==(b.y>y)&&x<(b.x-a.x)*(y-a.y)/(b.y-a.y)+a.x)inside=!inside; }
      if(inside)pts.push(x,y,.10*Math.sin(x*3+y*2));
    }return new Float32Array(pts);
  }, [shape]);
  const routes = useMemo(() => Array.from({length:18},(_,i) => {
    const a=new THREE.Vector3(.35,-1.65,.15); const angle=i*2.399; const b=new THREE.Vector3(Math.sin(angle)*(1+i%3*.3),.1+Math.cos(angle)*2.4,.15);
    return new THREE.QuadraticBezierCurve3(a,new THREE.Vector3((a.x+b.x)/2,(a.y+b.y)/2,.8+(i%4)*.23),b);
  }), []);
  useFrame((state,delta) => {
    if(!still)time.current+=Math.min(delta,.05);
    if(group.current) {group.current.rotation.y=Math.sin(time.current*.16)*.2+state.pointer.x*.12;group.current.rotation.x=state.pointer.y*.08;}
    if(particles.current) {routes.forEach((curve,i)=>{dummy.position.copy(curve.getPoint((time.current*.12+i/18)%1));dummy.scale.setScalar(.05);dummy.updateMatrix();particles.current?.setMatrixAt(i,dummy.matrix);});particles.current.instanceMatrix.needsUpdate=true;}
  });
  return <group ref={group} rotation={[0,-.1,-.08]}><mesh position={[0,0,-.09]}><shapeGeometry args={[shape]} /><meshStandardMaterial color={ink} metalness={.75} roughness={.5} side={THREE.DoubleSide} /></mesh><points><bufferGeometry><bufferAttribute attach="attributes-position" args={[points,3]} /></bufferGeometry><pointsMaterial color={gold} size={.033} sizeAttenuation /></points>{routes.map((curve,i)=><Line key={i} points={curve.getPoints(40)} color={gold} transparent opacity={.2+(i%3)*.12} lineWidth={.7} />)}<instancedMesh ref={particles} args={[undefined,undefined,18]}><sphereGeometry args={[1,8,8]} /><meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={1.5} /></instancedMesh><mesh position={[.35,-1.65,.2]}><sphereGeometry args={[.10,16,16]} /><meshStandardMaterial color={gold} emissive={gold} emissiveIntensity={1} /></mesh></group>;
}
export default function TradeNetwork() {
  const [settings,setSettings]=useState<{gold:string;ink:string;still:boolean}|null>(null);
  const [supported,setSupported]=useState(true);
  useEffect(()=>{const canvas=document.createElement('canvas');if(!canvas.getContext('webgl2')){setSupported(false);return;}const style=getComputedStyle(document.documentElement);const media=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setSettings({gold:style.getPropertyValue('--scene-gold').trim(),ink:style.getPropertyValue('--scene-ink').trim(),still:media.matches});update();media.addEventListener('change',update);return ()=>media.removeEventListener('change',update);},[]);
  if(!supported)return <div className="network-fallback">BOTSWANA → SADC → AFRICA</div>;
  return <div className="network-canvas" role="img" aria-label="Animated three-dimensional African trade network connecting Botswana to regional markets">{settings && <Canvas dpr={[1,1.5]} camera={{position:[0,0,10],fov:48}} gl={{alpha:true,antialias:true}}><ambientLight intensity={.7} /><directionalLight position={[2,4,6]} intensity={2} /><Suspense fallback={null}><Environment resolution={64}><Lightformer position={[0,0,5]} intensity={2} scale={[10,10,1]} /><Lightformer position={[-5,3,2]} color={settings.gold} intensity={3} scale={[4,6,1]} /></Environment><Network {...settings} /></Suspense></Canvas>}</div>;
}