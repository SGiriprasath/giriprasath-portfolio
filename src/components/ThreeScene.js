import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 6;

    // =====================
    // Particle field (1200 particles)
    // =====================
    const PARTICLE_COUNT = 1200;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const velocities = [];

    const colorPrimary = new THREE.Color('#6c63ff');   // violet
    const colorSecondary = new THREE.Color('#00d4ff'); // cyan
    const colorAccent = new THREE.Color('#ff6b6b');    // coral (rare)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Spread across a wide field
      positions[i3]     = (Math.random() - 0.5) * 28;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 14;

      // Tiny random drift velocity
      velocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: 0,
      });

      // Color: 55% cyan, 38% violet, 7% coral
      const rnd = Math.random();
      const color =
        rnd < 0.55 ? colorSecondary :
        rnd < 0.93 ? colorPrimary :
                     colorAccent;
      colors[i3]     = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 1.8 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // =====================
    // Mouse tracking
    // =====================
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // =====================
    // Animation loop
    // =====================
    let animId;
    const posArr = geometry.attributes.position.array;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Slowly drift particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        posArr[i3]     += velocities[i].x;
        posArr[i3 + 1] += velocities[i].y;

        // Wrap particles back when they drift too far
        if (posArr[i3] >  14) posArr[i3] = -14;
        if (posArr[i3] < -14) posArr[i3] =  14;
        if (posArr[i3 + 1] >  10) posArr[i3 + 1] = -10;
        if (posArr[i3 + 1] < -10) posArr[i3 + 1] =  10;
      }
      geometry.attributes.position.needsUpdate = true;

      // Subtle parallax on mouse move
      particles.rotation.x += (mouse.current.y * 0.04 - particles.rotation.x) * 0.025;
      particles.rotation.y += (mouse.current.x * 0.04 - particles.rotation.y) * 0.025;

      // Very slow global rotation
      particles.rotation.z += 0.00015;

      renderer.render(scene, camera);
    };

    animate();

    // =====================
    // Resize
    // =====================
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // =====================
    // Cleanup
    // =====================
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="three-scene-background" ref={mountRef} />;
}

export default ThreeScene;