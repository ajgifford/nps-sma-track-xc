'use client';

import { useState } from 'react';
import { XCEventRankings, XCRankingEntry } from '@/types/results';

interface XCRankingsTableProps {
  data: XCEventRankings;
  highlightTeam?: string;
}

export default function XCRankingsTable({ data, highlightTeam = 'Nativity/St. Michael' }: XCRankingsTableProps) {
  const [expandedRank, setExpandedRank] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpanded = (rank: number) => {
    setExpandedRank(expandedRank === rank ? null : rank);
  };

  const getPlaceBadge = (rank: number): string => {
    const badges: Record<number, string> = {
      1: '🥇',
      2: '🥈',
      3: '🥉',
    };
    return badges[rank] || '';
  };

  const filteredRankings = data.rankings.filter((ranking) =>
    searchTerm === '' ||
    ranking.athlete.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ranking.team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const topThree = filteredRankings.slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-2">{data.race}</h2>
        <p className="text-gray-600">
          {data.rankings.length} Total Runners Ranked • Distance: {data.distance}
        </p>
      </div>

      {/* Search bar */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="🔍 Search athlete or team..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Podium visualization for top 3 */}
      {topThree.length >= 3 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">🏆 Top 3 Podium</h3>
          <div className="flex justify-center items-end gap-4 mb-4">
            {/* 2nd place */}
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🥈</div>
              <div className="bg-gray-300 rounded-t-lg p-4 h-32 flex flex-col justify-end items-center">
                <div className="text-xl font-bold">{topThree[1]?.athlete}</div>
                <div className="text-sm text-gray-700">{topThree[1]?.team}</div>
                <div className="text-lg font-mono mt-2">{topThree[1]?.bestTime}</div>
              </div>
              <div className="bg-gray-400 text-white font-bold text-lg py-1 px-4 rounded-b-lg">2nd</div>
            </div>

            {/* 1st place */}
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">🥇</div>
              <div className="bg-yellow-300 rounded-t-lg p-4 h-40 flex flex-col justify-end items-center">
                <div className="text-xl font-bold">{topThree[0]?.athlete}</div>
                <div className="text-sm text-gray-700">{topThree[0]?.team}</div>
                <div className="text-lg font-mono mt-2">{topThree[0]?.bestTime}</div>
              </div>
              <div className="bg-yellow-600 text-white font-bold text-lg py-1 px-4 rounded-b-lg">1st</div>
            </div>

            {/* 3rd place */}
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🥉</div>
              <div className="bg-orange-300 rounded-t-lg p-4 h-28 flex flex-col justify-end items-center">
                <div className="text-xl font-bold">{topThree[2]?.athlete}</div>
                <div className="text-sm text-gray-700">{topThree[2]?.team}</div>
                <div className="text-lg font-mono mt-2">{topThree[2]?.bestTime}</div>
              </div>
              <div className="bg-orange-600 text-white font-bold text-lg py-1 px-4 rounded-b-lg">3rd</div>
            </div>
          </div>
        </div>
      )}

      {/* Rankings table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Athlete
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Team
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Best Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg/Mile
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Meet
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRankings.map((ranking: XCRankingEntry) => {
              const isHighlighted = ranking.team === highlightTeam;
              const isExpanded = expandedRank === ranking.rank;

              return (
                <tr
                  key={ranking.rank}
                  className={`hover:bg-gray-50 ${isHighlighted ? 'bg-blue-50' : ''}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getPlaceBadge(ranking.rank)}</span>
                      <span className="font-medium">{ranking.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">
                        {ranking.athlete} ({ranking.grade})
                        {isHighlighted && <span className="ml-2">⭐</span>}
                      </div>
                    </div>
                    {ranking.performances.length > 1 && (
                      <button
                        onClick={() => toggleExpanded(ranking.rank)}
                        className="mt-1 text-xs text-blue-600 hover:text-blue-800"
                      >
                        {isExpanded ? '▼ Hide' : '▶'} All Times ({ranking.performances.length})
                      </button>
                    )}
                    {isExpanded && (
                      <div className="mt-2 text-xs text-gray-600 space-y-1">
                        {ranking.performances.map((perf, idx) => (
                          <div key={idx} className="flex gap-2">
                            <span className="font-mono">{perf.time}</span>
                            <span>({perf.meetName}, {perf.place ? `${perf.place}${getOrdinalSuffix(perf.place)}` : 'N/A'})</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ranking.team}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono font-medium">
                    {ranking.bestTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600">
                    {ranking.bestAvgMile}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div>{ranking.bestTimeMeet}</div>
                    <div className="text-xs text-gray-400">{ranking.bestTimeMeetDate}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {highlightTeam && (
        <div className="text-sm text-gray-600 mt-4">
          ⭐ = {highlightTeam} athletes
        </div>
      )}
    </div>
  );
}

function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
}
