import Link from 'next/link';
import { TRACK_MEETS_2025 } from '@/lib/trackMeets';

export default function TrackResults() {
  const meets = TRACK_MEETS_2025;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Track & Field Results</h1>

      {/* Quick navigation cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/results/track/rankings"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-600"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-900">🏆 Event Rankings</h2>
          <p className="text-gray-600">View leaderboards for individual and relay events</p>
        </Link>

        <Link
          href="/results/track/athletes"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-green-600"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-900">👤 Athlete Profiles</h2>
          <p className="text-gray-600">Search for individual athlete results and PRs</p>
        </Link>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">2025 Season Meets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meets.map((meet, index) => (
          <Link
            key={meet.date}
            href={`/results/track/${meet.date}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-600 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {meet.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{meet.displayDate}</p>
                <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                  View Results
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-300">
                {index + 1}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
