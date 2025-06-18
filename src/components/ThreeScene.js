import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    console.log('ThreeScene useEffect called.');
    if (!mountRef.current) {
      console.log('mountRef.current is null.');
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable alpha for transparency

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    console.log('Renderer DOM element appended.', renderer.domElement);

    // Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Objects (Spheres)
    const spheres = [];
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x8c7ae6, transparent: true, opacity: 0.6 }); // Purple translucent

    for (let i = 0; i < 10; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      sphere.userData.originalPosition = sphere.position.clone();
      scene.add(sphere);
      spheres.push(sphere);
    }
    console.log('Spheres added to scene.', spheres);

    camera.position.z = 5;

    // Mouse movement interaction
    const handleMouseMove = (event) => {
      // Convert mouse position to normalized device coordinates (-1 to +1)
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = performance.now() * 0.0005;

      spheres.forEach((sphere, index) => {
        // Keep the original floating animation
        sphere.position.y = sphere.userData.originalPosition.y + Math.sin(time + index) * 0.5;
        sphere.position.x = sphere.userData.originalPosition.x + Math.cos(time + index) * 0.5;
        
        // Add mouse interaction
        const mouseInfluence = 0.1; // Adjust this value to control the strength of mouse influence
        sphere.position.x += (mouse.current.x * 2 - sphere.position.x) * mouseInfluence;
        sphere.position.y += (mouse.current.y * 2 - sphere.position.y) * mouseInfluence;
        
        // Keep the rotation animation
        sphere.rotation.x += 0.005;
        sphere.rotation.y += 0.005;
      });

      renderer.render(scene, camera);
    };

    animate();
    console.log('Animation loop started.');

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      console.log('Window resized.');
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
        console.log('Renderer DOM element removed.');
      }
    };
  }, []);

  return (
    <div className="three-scene-background" ref={mountRef}>
      {/* Three.js scene will be rendered here */}
    </div>
  );
}

export default ThreeScene; 