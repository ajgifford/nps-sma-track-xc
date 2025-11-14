'use client';

import { useState } from 'react';
import { XCSeasonResult, XCSeasonRaceData, XCRaceResult } from '@/types/results';

interface XCSeasonResultsProps {
  data: XCSeasonResult;
}

export default function XCSeasonResults({ data }: XCSeasonResultsProps) {
  const [selectedRaceIndex, setSelectedRaceIndex] = useState(0);

  const selectedRace = data.races[selectedRaceIndex];

  // Calculate athlete statistics
  const getAthleteStats = (athleteName: string, race: XCSeasonRaceData) => {
    const performances = race.meets.flatMap((meet) =>
      meet.results.filter((r) => r.athlete === athleteName)
    );

    if (performances.length === 0) return null;

    const times = performances.map((p) => parseTimeToSeconds(p.time));
    const bestTime = Math.min(...times);
    const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
    const improvement = times[0] - times[times.length - 1];

    return {
      pr: formatSecondsToTime(bestTime),
      avg: formatSecondsToTime(avgTime),
      improvement,
      performances,
    };
  };

  // Group athletes by their participation
  const athletes = new Set<string>();
  selectedRace?.meets.forEach((meet) => {
    meet.results.forEach((result) => athletes.add(result.athlete));
  });

  const athleteList = Array.from(athletes).map((athlete) => ({
    name: athlete,
    stats: getAthleteStats(athlete, selectedRace),
  })).filter((a) => a.stats !== null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-2">{data.teamName} - Season {data.season}</h2>
        <p className="text-gray-600">{data.races.length} Race Categories</p>
      </div>

      {/* Race selector */}
      <div className="bg-white rounded-lg shadow p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Race:
        </label>
        <select
          value={selectedRaceIndex}
          onChange={(e) => setSelectedRaceIndex(parseInt(e.target.value))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {data.races.map((race, idx) => (
            <option key={idx} value={idx}>
              {race.race} ({race.meets.length} meets)
            </option>
          ))}
        </select>
      </div>

      {selectedRace && (
        <>
          {/* Performance overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              {selectedRace.race} - Season Progression
            </h3>
            <p className="text-gray-600 mb-4">
              Distance: {selectedRace.distance} • {selectedRace.meets.length} Meets
            </p>
          </div>

          {/* Athlete performance table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h3 className="text-lg font-semibold">Runner Performance Table</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Athlete
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PR
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Races
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {athleteList.map((athlete) => (
                    <tr key={athlete.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium">{athlete.name}</div>
                        <div className="text-xs text-gray-500">
                          {athlete.stats?.performances[0]?.grade}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-mono text-sm">
                        {athlete.stats?.pr}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-gray-600">
                        {athlete.stats?.avg}
                      </td>
                      <td className="px-6 py-4">
                        {athlete.stats && (
                          <span className={`inline-flex items-center gap-1 ${
                            athlete.stats.improvement > 0
                              ? 'text-green-600'
                              : athlete.stats.improvement < 0
                              ? 'text-red-600'
                              : 'text-gray-600'
                          }`}>
                            {athlete.stats.improvement > 0
                              ? '⬆'
                              : athlete.stats.improvement < 0
                              ? '⬇'
                              : '→'}
                            {Math.abs(athlete.stats.improvement).toFixed(1)}s
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {athlete.stats?.performances.length} meets
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Meet-by-meet breakdown */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Meet-by-Meet Results</h3>
            <div className="space-y-6">
              {selectedRace.meets.map((meet, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">
                    {meet.meetName}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">{meet.meetDate}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {meet.results.slice(0, 10).map((result, ridx) => (
                      <div
                        key={ridx}
                        className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded"
                      >
                        <span className="font-medium truncate">
                          {result.place}. {result.athlete}
                        </span>
                        <span className="font-mono ml-2">{result.time}</span>
                      </div>
                    ))}
                  </div>
                  {meet.results.length > 10 && (
                    <p className="text-xs text-gray-500 mt-2">
                      + {meet.results.length - 10} more runners
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Helper functions
function parseTimeToSeconds(time: string): number {
  const parts = time.split(':');
  if (parts.length === 2) {
    const [min, sec] = parts;
    return parseInt(min) * 60 + parseFloat(sec);
  }
  return parseFloat(time);
}

function formatSecondsToTime(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = (seconds % 60).toFixed(1);
  return `${min}:${sec.padStart(4, '0')}`;
}
