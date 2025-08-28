import React, { useEffect, useRef } from 'react';

const VantaNetBackground = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    let script1, script2;

    const loadScripts = async () => {
      // Load three.js
      if (!window.THREE) {
        script1 = document.createElement('script');
        script1.src = '/three.r134.min.js';
        script1.async = true;
        document.body.appendChild(script1);

        await new Promise(resolve => {
          script1.onload = resolve;
        });
      }

      // Load vanta.net
      if (!window.VANTA) {
        script2 = document.createElement('script');
        script2.src = '/vanta.net.min.js';
        script2.async = true;
        document.body.appendChild(script2);

        await new Promise(resolve => {
          script2.onload = resolve;
        });
      }

      // Initialize VANTA
      if (!effectRef.current && window.VANTA && window.THREE) {
        effectRef.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 14.0,
          spacing: 18.0,
        });
      }
    };

    loadScripts();

    return () => {
      if (effectRef.current) effectRef.current.destroy();
      if (script1) document.body.removeChild(script1);
      if (script2) document.body.removeChild(script2);
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default VantaNetBackground;
