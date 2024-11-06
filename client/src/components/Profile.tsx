interface ProfileData {
  name: string;
  img: string;
  location: string;
  score: number;
}

interface ProfilesProps {
  leaderboard: ProfileData[];
}

const Profiles: React.FC<ProfilesProps> = ({ leaderboard }) => {
  return (
    <div id="profile" className="mt-6">
      {leaderboard.map((value, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-yellow-100 bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6 mb-4 transition-all hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex items-center">
            <img src={value.img} alt="avatar" className="w-16 h-16 rounded-full" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-800">{value.name}</h3>
              <span className="text-sm text-gray-600">{value.location}</span>
            </div>
          </div>
          <span className="text-gray-700 font-medium text-xl">{value.score} pts</span>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
