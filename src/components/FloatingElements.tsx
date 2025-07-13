
import { useEffect, useState } from 'react';
import { Code, Palette, Zap, Coffee, Lightbulb, Rocket } from 'lucide-react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const icons = [
    { Icon: Code, delay: '0s', x: '10%', y: '20%' },
    { Icon: Palette, delay: '0.5s', x: '80%', y: '30%' },
    { Icon: Zap, delay: '1s', x: '15%', y: '70%' },
    { Icon: Coffee, delay: '1.5s', x: '85%', y: '80%' },
    { Icon: Lightbulb, delay: '2s', x: '60%', y: '15%' },
    { Icon: Rocket, delay: '2.5s', x: '30%', y: '85%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-20"
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
          }}
        >
          <Icon 
            size={24} 
            className="text-primary-orange animate-pulse"
            style={{ animationDelay: delay }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
