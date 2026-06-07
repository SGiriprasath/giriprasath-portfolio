import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // Track cursor position, trailing position, and scaling/rotation physics
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const vel = useRef(0);
  const angle = useRef(0);
  
  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    // Listeners to hover over interactive targets
    const addHoverListeners = () => {
      const targets = document.querySelectorAll(
        'a, button, input, textarea, select, .contact-chip, .tech-tag, .social-icon-btn, .resume-btn, .project-action-btn, .nav-link, .nav-logo, [style*="cursor: pointer"]'
      );
      
      targets.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          if (ringRef.current) ringRef.current.classList.add('hovered');
          if (dotRef.current) dotRef.current.classList.add('hovered');
        });
        el.addEventListener('mouseleave', () => {
          if (ringRef.current) ringRef.current.classList.remove('hovered');
          if (dotRef.current) dotRef.current.classList.remove('hovered');
        });
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    
    const onMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.classList.add('hidden');
        dotRef.current.classList.add('hidden');
      }
    };

    const onMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.classList.remove('hidden');
        dotRef.current.classList.remove('hidden');
      }
    };

    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // Request Animation Frame physics loop
    let rafId;
    const render = () => {
      // 1. Instant dot position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      // 2. Smooth ring interpolation (Damping / Trailing physics)
      const dx = mouse.current.x - ringPos.current.x;
      const dy = mouse.current.y - ringPos.current.y;
      
      ringPos.current.x += dx * 0.15;
      ringPos.current.y += dy * 0.15;

      // 3. Velocity / Stretching calculations
      const mdx = mouse.current.x - lastMouse.current.x;
      const mdy = mouse.current.y - lastMouse.current.y;
      
      // Calculate instantaneous speed
      const targetVel = Math.sqrt(mdx * mdx + mdy * mdy);
      // Ease speed
      vel.current += (targetVel - vel.current) * 0.1;
      
      // Calculate rotation angle matching direction of motion
      if (targetVel > 0.5) {
        angle.current = Math.atan2(mdy, mdx) * (180 / Math.PI);
      }

      // Stretch factor (maintain volume: scale X up, scale Y down)
      const stretch = Math.min(vel.current * 0.012, 0.45);
      const scaleX = 1 + stretch;
      const scaleY = 1 - stretch;

      if (ringRef.current) {
        // Apply velocity stretching only when not hovered
        const isHovered = ringRef.current.classList.contains('hovered');
        const transformString = isHovered
          ? `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
          : `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotate(${angle.current}deg) scale(${scaleX}, ${scaleY})`;
        
        ringRef.current.style.transform = transformString;
      }

      // Update history
      lastMouse.current.x = mouse.current.x;
      lastMouse.current.y = mouse.current.y;

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}

export default CustomCursor;
