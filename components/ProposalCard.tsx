
import React from 'react';
import EvasiveButton from './EvasiveButton';

interface ProposalCardProps {
  onAccept: () => void;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ onAccept }) => {
  return (
    <div className="kawaii-glass p-6 sm:p-10 text-center max-w-[90%] sm:max-w-xl w-full mx-auto z-10 transform transition-all relative">
      <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 text-5xl sm:text-8xl rotate-12 drop-shadow-lg pointer-events-none">🍑</div>
      <div className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 text-5xl sm:text-8xl -rotate-12 drop-shadow-lg pointer-events-none">🍆</div>
      
      <div className="mb-4 sm:mb-8 relative flex flex-col items-center">
        {/* Adjusted emoji size for mobile */}
        <div className="text-7xl sm:text-[120px] leading-none mb-6 sm:mb-10 animate-bounce cursor-pointer select-none drop-shadow-2xl">
            🍑
        </div>
        
        <h1 className="font-bratz text-3xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6 drop-shadow-[3px_3px_0px_#ff4500] sm:drop-shadow-[5px_5px_0px_#ff4500]">
          Othmane, 3afak wrini tremtek
        </h1>
        
        <div className="flex gap-2 sm:gap-4 items-center justify-center flex-wrap">
          <span className="text-2xl sm:text-4xl">🍑</span>
          <p className="font-chunky text-sm sm:text-xl text-black tracking-widest uppercase bg-[#ffcc33] px-4 py-2 sm:px-6 sm:py-2 inline-block -rotate-2 border-2 border-black">
            JUST DO IT! 🍑🍆
          </p>
          <span className="text-2xl sm:text-4xl">🍆</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 mt-8 sm:mt-12 min-h-[150px]">
        <button
          onClick={onAccept}
          className="bratz-button w-full sm:w-auto px-8 py-4 sm:px-14 sm:py-6 bg-[#ff4500] hover:bg-[#ff8c00] text-white font-chunky rounded-full text-xl sm:text-3xl tracking-tighter z-20"
        >
          Ok ghanwrik trmti
        </button>

        <EvasiveButton />
      </div>
    </div>
  );
};

export default ProposalCard;
