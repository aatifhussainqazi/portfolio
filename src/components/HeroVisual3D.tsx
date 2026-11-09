import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroVisual3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    let width = currentMount.clientWidth;
    let height = currentMount.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    currentMount.appendChild(renderer.domElement);

    // Root Group for interactive rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Primary Outer Wireframe: Icosahedron / Geodesic
    const outerGeo = new THREE.IcosahedronGeometry(1.4, 2);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x3d4434, // Subtle muted dark olive green
      transparent: true,
      opacity: 0.6,
      linewidth: 1,
    });
    const wireframeMesh = new THREE.LineSegments(wireframeGeo, wireframeMat);
    mainGroup.add(wireframeMesh);

    // 2. Accent Edges / Floating Rings (Electric Lime #C5F467)
    const ringGeo1 = new THREE.TorusGeometry(1.6, 0.008, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xc5f467,
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(1.5, 0.006, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x929292,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 3. Inner Core: Dark Octahedron with lime vertex points
    const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.35,
      metalness: 0.85,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Core Wireframe overlay in accent
    const coreWireGeo = new THREE.WireframeGeometry(coreGeo);
    const coreWireMat = new THREE.LineBasicMaterial({
      color: 0xc5f467,
      transparent: true,
      opacity: 0.9,
    });
    const coreWire = new THREE.LineSegments(coreWireGeo, coreWireMat);
    mainGroup.add(coreWire);

    // 4. Subtle Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc5f467, 2.5, 10);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.2, 10);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);

    // 5. Minimal Particle Dust
    const particlesCount = 90;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 5;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.025,
      color: 0xc5f467,
      transparent: true,
      opacity: 0.5,
    });
    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // Mouse Interaction Tracking with Smooth Interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / width - 0.5;
      const y = (event.clientY - rect.top) / height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      width = currentMount.clientWidth;
      height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Subtle autonomous rotation + mouse tilt
      mainGroup.rotation.y = elapsedTime * 0.2 + mouseX * 0.9;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.2 + mouseY * 0.7;
      mainGroup.rotation.z = Math.cos(elapsedTime * 0.1) * 0.1;

      // Independent counter-rotation for rings
      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.18;

      // Gentle vertex particle drift
      particleSystem.rotation.y = -elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      outerGeo.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Elegant geometric SVG fallback
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <svg viewBox="0 0 200 200" className="w-72 h-72 text-[#C5F467]/30 stroke-current fill-none animate-pulse">
          <polygon points="100,20 180,80 150,170 50,170 20,80" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="#292929" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="4" fill="#C5F467" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[380px] sm:min-h-[440px] md:min-h-[500px] cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D viewport of geometric wireframe sculpture created with Three.js"
    />
  );
};
