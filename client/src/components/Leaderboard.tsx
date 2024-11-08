import React, { useState } from 'react';
import Profiles from './Profile';
import { leaderboardData } from '../../data/leaderboardData';

const LeaderBoard: React.FC = () => {
  const [period, setPeriod] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setPeriod(Number(target.dataset.id));
  };

  // Function to filter leaderboard data based on the selected period
  const getFilteredData = () => {
    if (period === 0) return leaderboardData; // All time (no filtering)
    
    const now = new Date();
    return leaderboardData.filter((entry) => {
      const entryDate = new Date(entry.dt);
      const timeDiff = (now.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24); // difference in days
      return timeDiff <= period;
    });
  };

  return (
    <div className="board max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-amber-900">Leaderboard</h1>

      <div className="duration flex justify-center gap-4 mb-6">
        <button
          onClick={handleClick}
          data-id="7"
          className={`border px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white ${
            period === 7 ? 'bg-primary text-white' : 'bg-secondary text-green-700'
          }`}
        >
          Last 7 Days
        </button>
        <button
          onClick={handleClick}
          data-id="30"
          className={`border px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white ${
            period === 30 ? 'bg-primary text-white' : 'bg-secondary text-green-700'
          }`}
        >
          Last 30 Days
        </button>
        <button
          onClick={handleClick}
          data-id="0"
          className={`border px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white ${
            period === 0 ? 'bg-primary text-white' : 'bg-secondary text-green-700'
          }`}
        >
          All Time
        </button>
      </div>

      <Profiles leaderboard={getFilteredData()} />
    </div>
  );
};

export default LeaderBoard;
