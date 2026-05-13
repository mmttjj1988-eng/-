import { useRef, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, ContactShadows, Environment } from '@react-three/drei';
import { Plus, Minus, Coffee, MapPin, Tent, Car, Info } from 'lucide-react';
import * as THREE from 'three';

const markers = [
  { id: 1, position: [2.5, 0.5, 1.5], label: "مقهى ومطعم الحديقة", icon: Coffee, color: "#10b981" },
  { id: 2, position: [-3, 0.5, -2], label: "منطقة التخييم", icon: Tent, color: "#f59e0b" },
  { id: 3, position: [0.5, 0.5, -3.5], label: "نقطة التجمع الرئيسية", icon: MapPin, color: "#ef4444" },
  { id: 4, position: [-2, 0.5, 3], label: "مواقف السيارات", icon: Car, color: "#3b82f6" },
  { id: 5, position: [3, 0.5, -1], label: "مركز استعلامات", icon: Info, color: "#8b5cf6" },
];

function Model() {
  return (
    <group>
      {/* Base Plane (Ground) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color="#064e3b" roughness={1} metalness={0.1} />
      </mesh>

      {/* Grid Helper for tech look */}
      <gridHelper args={[15, 15, "#10b981", "#042f2e"]} position={[0, -0.04, 0]} />

      {/* Abstract Mountains / Hills */}
      <mesh position={[-4, 1, -4]} castShadow receiveShadow>
        <dodecahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#065f46" />
      </mesh>
      
      <mesh position={[5, 1.5, -4]} castShadow receiveShadow>
        <coneGeometry args={[2.5, 3, 8]} />
        <meshStandardMaterial color="#047857" />
      </mesh>

      {/* Abstract Trees */}
      {Array.from({ length: 20 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 12;
        const z = (Math.random() - 0.5) * 12;
        // avoid center
        if (Math.abs(x) < 2 && Math.abs(z) < 2) return null;
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh position={[0, 0.4, 0]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.8]} />
              <meshStandardMaterial color="#78350f" />
            </mesh>
            <mesh position={[0, 1, 0]} castShadow>
              <icosahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial color="#10b981" />
            </mesh>
          </group>
        );
      })}

      {/* Central Area Base */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[2, 32]} />
        <meshStandardMaterial color="#059669" />
      </mesh>
    </group>
  );
}

function Marker({ position, label, icon: Icon, color, isActive, onClick }: any) {
  return (
    <Html position={position} center className="pointer-events-none z-10">
      <div 
        className={`flex flex-col items-center group pointer-events-auto cursor-pointer transition-all duration-300 ${
          isActive ? 'scale-125 z-50' : 'scale-100 hover:scale-110 z-10'
        }`}
        onClick={onClick}
      >
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl shadow-black/40 relative"
          style={{ backgroundColor: color }}
        >
          {isActive && (
            <div className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ backgroundColor: color }} />
          )}
          <Icon size={20} />
        </div>
        <div 
          className={`mt-2 px-3 py-1.5 bg-[#042f2e]/90 border border-white/10 backdrop-blur-md text-emerald-50 text-sm font-bold rounded-full shadow-lg whitespace-nowrap transition-all duration-300 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          {label}
        </div>
      </div>
    </Html>
  );
}

export default function Map3D() {
  const controlsRef = useRef<any>(null);
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleZoom = (direction: 'in' | 'out') => {
    if (controlsRef.current) {
      const scale = direction === 'in' ? 0.8 : 1.2;
      controlsRef.current.object.position.multiplyScalar(scale);
      controlsRef.current.update();
    }
  };

  return (
    <div className="w-full relative bg-[#042f2e] border border-white/10 rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[700px]">
      {/* Overlay UI */}
      <div className="absolute top-6 right-6 z-10 bg-[#022c22]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl max-w-[200px]">
        <h3 className="text-white font-bold mb-2">خريطة الحديقة</h3>
        <p className="text-emerald-400/80 text-xs leading-relaxed mb-4">
          استخدم الماوس أو اللمس للتحريك. انقر على المؤشرات لعرض التفاصيل.
        </p>
      </div>

      <div className="absolute left-6 bottom-6 flex flex-col gap-3 z-10">
        <button 
          onClick={() => handleZoom('in')}
          className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          aria-label="تكبير"
        >
          <Plus size={24} />
        </button>
        <button 
          onClick={() => handleZoom('out')}
          className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          aria-label="تصغير"
        >
          <Minus size={24} />
        </button>
      </div>

      {activeMarker && (
         <div className="absolute bottom-6 right-6 z-10 bg-[#022c22]/90 backdrop-blur-md border border-emerald-500/30 p-5 rounded-2xl shadow-xl w-64 translate-y-0 transition-transform">
           <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold text-lg">
                {markers.find(m => m.id === activeMarker)?.label}
              </h4>
           </div>
           <p className="text-sm text-slate-300 leading-relaxed mb-4">
             منطقة مخصصة لزوار حديقة الاستقلال الوطنية مع كافة التجهيزات اللازمة.
           </p>
           <button 
              className="w-full py-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-bold hover:bg-emerald-500 hover:text-[#042f2e] transition-colors"
              onClick={() => setActiveMarker(null)}
           >
             إغلاق
           </button>
         </div>
      )}

      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 8, 8], fov: 45 }}>
        <color attach="background" args={['#022c22']} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 15, 10]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#10b981" />

        <Model />

        {markers.map((marker) => (
          <Marker 
            key={marker.id} 
            {...marker} 
            isActive={activeMarker === marker.id}
            onClick={() => setActiveMarker(marker.id)}
          />
        ))}

        <ContactShadows position={[0, -0.04, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        <Environment preset="city" />
        <OrbitControls 
          ref={controlsRef}
          makeDefault 
          maxPolarAngle={Math.PI / 2 - 0.1} 
          minDistance={3} 
          maxDistance={20}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
