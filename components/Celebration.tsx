
import React, { useEffect, useState } from 'react';

const Celebration: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; size: string; delay: string; duration: string; color: string; char: string }>>([]);

  useEffect(() => {
    const chars = ['🍑', '🍑', '🍑', '🍆', '🍆'];
    const colors = ['#ff4500', '#ff8c00', '#ffcc33', '#4b0082', '#ffa500'];
    const newParticles = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 30 + 20}px`,
      delay: `${Math.random() * 4}s`,
      duration: `${Math.random() * 2 + 1.5}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      char: chars[Math.floor(Math.random() * chars.length)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden pointer-events-none p-4">
      {/* Peach and Eggplant Rain */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="peach-particle"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.char}
        </div>
      ))}

      {/* Retro Success Card - Mobile Optimized */}
      <div className="kawaii-glass p-6 sm:p-14 w-[95%] max-w-[550px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 pointer-events-auto bg-white relative border-[#ff8c00]">
        <div className="absolute -top-10 -right-10 text-6xl sm:text-9xl animate-bounce">🍑</div>
        <div className="absolute -bottom-10 -left-10 text-6xl sm:text-9xl animate-bounce delay-500">🍆</div>
        
        <div className="text-6xl sm:text-[120px] mb-6 sm:mb-8 select-none">🍑🍆🍑</div>
        
        <h1 className="font-bratz text-3xl sm:text-5xl md:text-6xl text-[#ff4500] mb-6 sm:mb-8 drop-shadow-[3px_3px_0px_#ffcc33] sm:drop-shadow-[5px_5px_0px_#ffcc33] peach-text leading-tight">
          A777 ghatwerini trima
        </h1>
        
        <div className="bg-black text-[#ff8c00] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-chunky text-xl sm:text-3xl -rotate-2 mb-8 sm:mb-10 flex items-center gap-2 sm:gap-4 border-4 border-[#ffcc33]">
          <span>WAAA 3LA ZOK</span> <span>🍑</span>
        </div>

        <p className="font-chunky text-[#ff4500] animate-pulse text-lg sm:text-2xl uppercase tracking-tighter">
          Nshedek n3eddek mn trmtk 🍑🍑🍑
        </p>
      </div>
    </div>
  );
};

export default Celebration;
