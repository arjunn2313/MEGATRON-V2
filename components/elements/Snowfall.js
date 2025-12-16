 'use client'
import { useEffect } from "react";

export default function ChristmasSnow() {
  useEffect(() => {
    // 1. Setup Canvas
    const canvas = document.createElement("canvas");
    canvas.id = "christmas-snowfall";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas.remove();
      return;
    }

    // Canvas styling (fixed position, behind content)
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999"; 

    // 2. Resize Handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 3. Flake Initialization (Increased complexity for originality)
    const totalFlakes = 150; // A few more flakes for a dense, soft snow
    const flakes = Array.from({ length: totalFlakes }, () => {
      const density = Math.random() * 0.7 + 0.3; // Slower speed: 0.3 to 1.0 (originally 1 to 2)
      const radius = Math.random() * 2.5 + 1; // Flake size: 1 to 3.5
      
      // Originality: Add color and wind properties
      const isBlue = Math.random() < 0.2; // 20% of flakes have a blue tint
      const color = isBlue ? 'rgba(200, 220, 255,' : 'rgba(255, 255, 255,';
      const opacity = Math.random() * 0.5 + 0.5; // Opacity 0.5 to 1.0
      const wind = Math.random() * 0.5 - 0.25; // Random initial wind force

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: radius, 
        d: density, 
        color: color,
        opacity: opacity,
        wind: wind,
        // Used for sine wave calculation for smoother, less uniform movement
        sineOffset: Math.random() * Math.PI * 2,
      };
    });

    let angle = 0; // Global angle for wind effect

    // 4. Draw Function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      flakes.forEach(f => {
        // Set individual flake style
        ctx.fillStyle = f.color + f.opacity + ')'; 
        
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      });
      
      update();
    };

    // 5. Update Flake Positions (Slower & more original movement)
    const update = () => {
      angle += 0.005; // Global angle update for slow, gentle sway (slower than 0.01)

      flakes.forEach(f => {
        // **Slower Vertical Movement:** Reduced base speed and power factor
        f.y += f.d * 0.7; 

        // **Originality: Gentler Horizontal Movement (Wind)**
        // Combines global sine wave with individual wind factor for variety
        f.x += (Math.sin(angle + f.sineOffset) * 0.2) + (f.wind * 0.1); 

        // Reset flakes when they fall off the bottom
        if (f.y > canvas.height) {
          f.y = -5;
          // Reset x position to a new random spot
          f.x = Math.random() * canvas.width;
        }
      });
    };

    // 6. Animation Loop
    let animationId;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // 7. Cleanup Function
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      // Ensure the dynamically created canvas is removed from the DOM
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  // The component renders nothing, as the effect handles the visual output via canvas
  return null;
}