'use client';

import { XCTeamResult, XCRaceData, XCRaceResult } from '@/types/results';

interface XCMeetResultsProps {
  data: XCTeamResult;
}

export default function XCMeetResults({ data }: XCMeetResultsProps) {
  return (
    <div className="space-y-6">
      {/* Meet header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold mb-2">{data.teamName}</h2>
        <h3 className="text-xl text-gray-700 mb-1">{data.meetName}</h3>
        <p className="text-gray-600">{formatMeetDate(data.meetDate)}</p>
        {data.teamScoreIncluded && data.scoringPlaces && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Scoring:</strong> Top {data.scoringPlaces} runners count
              {data.displacementRunners && ` • ${data.displacementRunners} displacement runners`}
            </p>
          </div>
        )}
      </div>

      {/* Race results */}
      {data.races.map((race, idx) => (
        <RaceResults key={idx} race={race} teamName={data.teamName} />
      ))}
    </div>
  );
}

interface RaceResultsProps {
  race: XCRaceData;
  teamName: string;
}

function RaceResults({ race, teamName }: RaceResultsProps) {
  const scoringRunners = race.results.filter((r) => r.scoring);
  const displacementRunners = race.results.filter(
    (r) => !r.scoring && r.score !== null
  );
  const nonScoringRunners = race.results.filter((r) => r.score === null);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Race header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
        <h3 className="text-xl font-semibold">{race.race}</h3>
        <p className="text-blue-100 text-sm mt-1">Distance: {race.distance}</p>
        {race.teamScore !== undefined && race.teamPlace !== undefined && (
          <div className="mt-3 flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Team Score: <strong className="text-lg">{race.teamScore}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Team Place: <strong className="text-lg">{getOrdinal(race.teamPlace)}</strong>
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Results table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Place
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Athlete
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gap
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg/Mile
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Scoring runners */}
            {scoringRunners.map((result, idx) => (
              <ResultRow key={idx} result={result} isScoring={true} />
            ))}

            {/* Separator if there are displacement runners */}
            {displacementRunners.length > 0 && (
              <tr className="bg-gray-100">
                <td colSpan={8} className="px-4 py-2 text-center text-xs font-medium text-gray-600">
                  Displacement Runners
                </td>
              </tr>
            )}

            {/* Displacement runners */}
            {displacementRunners.map((result, idx) => (
              <ResultRow key={idx} result={result} isScoring={false} isDisplacement={true} />
            ))}

            {/* Separator if there are non-scoring runners */}
            {nonScoringRunners.length > 0 && (
              <tr className="bg-gray-100">
                <td colSpan={8} className="px-4 py-2 text-center text-xs font-medium text-gray-600">
                  Additional Runners
                </td>
              </tr>
            )}

            {/* Non-scoring runners */}
            {nonScoringRunners.map((result, idx) => (
              <ResultRow key={idx} result={result} isScoring={false} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface ResultRowProps {
  result: XCRaceResult;
  isScoring: boolean;
  isDisplacement?: boolean;
}

function ResultRow({ result, isScoring, isDisplacement = false }: ResultRowProps) {
  const getPlaceColor = (place: number | null) => {
    if (!place) return '';
    if (place === 1) return 'text-yellow-600 font-bold';
    if (place === 2) return 'text-gray-500 font-bold';
    if (place === 3) return 'text-orange-600 font-bold';
    if (place <= 10) return 'text-blue-600 font-semibold';
    return '';
  };

  const rowBgClass = isScoring
    ? 'bg-green-50 hover:bg-green-100'
    : isDisplacement
    ? 'bg-yellow-50 hover:bg-yellow-100'
    : 'hover:bg-gray-50';

  return (
    <tr className={rowBgClass}>
      <td className={`px-4 py-3 whitespace-nowrap text-sm ${getPlaceColor(result.place)}`}>
        {result.place || 'N/A'}
        {result.place && result.place <= 3 && (
          <span className="ml-1">{['🥇', '🥈', '🥉'][result.place - 1]}</span>
        )}
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="font-medium text-gray-900">{result.athlete}</div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-center text-sm text-gray-600">
        {result.grade}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-center font-mono font-medium">
        {result.time}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-center font-mono text-sm text-gray-600">
        {result.gap}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-center font-mono text-sm text-gray-600">
        {result.avgMile}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-center font-semibold">
        {result.score !== null ? result.score : '-'}
      </td>
      <td className="px-4 py-3 whitespace-nowrap text-center">
        {isScoring && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            ✓ Scoring
          </span>
        )}
        {isDisplacement && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Displacement
          </span>
        )}
      </td>
    </tr>
  );
}

// Helper functions
function formatMeetDate(dateStr: string): string {
  const [month, day, year] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getOrdinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
