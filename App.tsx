
import React, { useState } from 'react';
import ProposalCard from './components/ProposalCard';
import Celebration from './components/Celebration';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleYes = () => {
    setIsAccepted(true);
  };

  return (
    <main className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#ffcc33_0%,_#ff8c00_100%)]">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ff4500 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      
      {/* Background emojis: Peaches and Eggplants */}
      <div className="absolute top-[5%] left-[10%] text-6xl animate-bounce opacity-50">🍑</div>
      <div className="absolute top-[15%] right-[20%] text-5xl animate-pulse opacity-40">🍆</div>
      <div className="absolute bottom-[20%] left-[15%] text-7xl animate-bounce delay-300 opacity-60">🍑</div>
      <div className="absolute bottom-[10%] right-[5%] text-5xl animate-pulse delay-700 opacity-30">🍆</div>
      <div className="absolute top-[40%] left-[80%] text-8xl animate-bounce delay-150 opacity-40">🍑</div>
      <div className="absolute middle-0 left-[45%] text-4xl animate-bounce delay-500 opacity-50">🍆</div>

      {!isAccepted ? (
        <ProposalCard onAccept={handleYes} />
      ) : (
        <Celebration />
      )}
    </main>
  );
};

export default App;
