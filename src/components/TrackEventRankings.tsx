'use client';

import { useState } from 'react';
import { TrackEventRankingsFile, RelayRankingsFile } from '@/types/results';
import { EVENT_NAMES } from '@/lib/trackMeets';

interface TrackEventRankingsProps {
  data: TrackEventRankingsFile | RelayRankingsFile;
  highlightTeam?: string;
}

export default function TrackEventRankings({ data, highlightTeam = 'Saint Michael CYOKS' }: TrackEventRankingsProps) {
  const [expandedRank, setExpandedRank] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<string>('');

  const isRelay = 'type' in data && data.type === 'relay';

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

  // Filter categories
  const categories = data.categories.filter((cat) => {
    if (selectedGender && cat.gender !== selectedGender) return false;
    if (selectedGrade && cat.grade !== selectedGrade) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-2">{data.event}</h2>
        <p className="text-gray-600">
          {data.categories.reduce((sum, cat) => sum + (isRelay ? cat.totalTeams : (cat as any).totalAthletes), 0)} total {isRelay ? 'teams' : 'athletes'} • Season {data.season}
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder={`🔍 Search ${isRelay ? 'team or athlete' : 'athlete or team'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Gender filter */}
          <select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>

          {/* Grade filter */}
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Grades</option>
            <option value="5th grade">5th Grade</option>
            <option value="6th grade">6th Grade</option>
            <option value="7th grade">7th Grade</option>
            <option value="8th grade">8th Grade</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
      </div>

      {/* Categories */}
      {categories.map((category, idx) => {
        const filteredRankings = category.rankings.filter((ranking: any) => {
          if (searchTerm === '') return true;
          const searchLower = searchTerm.toLowerCase();
          if (isRelay) {
            return ranking.teamName.toLowerCase().includes(searchLower) ||
                   ranking.athletes.some((a: string) => a.toLowerCase().includes(searchLower));
          } else {
            return ranking.athlete.toLowerCase().includes(searchLower) ||
                   ranking.team.toLowerCase().includes(searchLower);
          }
        });

        if (filteredRankings.length === 0) return null;

        return (
          <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
            {/* Category header */}
            <div className="bg-purple-100 px-6 py-3 border-b">
              <h3 className="font-semibold text-gray-900">
                {category.gender} - {category.grade} ({filteredRankings.length} {isRelay ? 'teams' : 'athletes'})
              </h3>
            </div>

            {/* Rankings table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {isRelay ? 'Team / Athletes' : 'Athlete'}
                    </th>
                    {!isRelay && (
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Team
                      </th>
                    )}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Best Result
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Meet
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRankings.map((ranking: any) => {
                    const isHighlighted = isRelay
                      ? ranking.teamName === highlightTeam
                      : ranking.team === highlightTeam;
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
                            <div>
                              {isRelay ? (
                                <>
                                  <div className="font-medium">
                                    {ranking.teamName}
                                    {isHighlighted && <span className="ml-2">⭐</span>}
                                  </div>
                                  <div className="text-sm text-gray-600 mt-1">
                                    {ranking.athletes.join(', ')}
                                  </div>
                                </>
                              ) : (
                                <div className="font-medium">
                                  {ranking.athlete}
                                  {isHighlighted && <span className="ml-2">⭐</span>}
                                </div>
                              )}
                            </div>
                          </div>
                          {ranking.allResults.length > 1 && (
                            <button
                              onClick={() => toggleExpanded(ranking.rank)}
                              className="mt-1 text-xs text-purple-600 hover:text-purple-800"
                            >
                              {isExpanded ? '▼ Hide' : '▶'} All Results ({ranking.allResults.length})
                            </button>
                          )}
                          {isExpanded && (
                            <div className="mt-2 text-xs text-gray-600 space-y-1">
                              {ranking.allResults.map((res: any, idx: number) => (
                                <div key={idx} className="flex gap-2">
                                  <span className="font-mono">{res.result}</span>
                                  <span>({res.meet}, {res.place ? `${res.place}${getOrdinalSuffix(res.place)}` : 'N/A'})</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>
                        {!isRelay && (
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {ranking.team}
                          </td>
                        )}
                        <td className="px-6 py-4 whitespace-nowrap font-mono font-medium">
                          {ranking.bestResult}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <div>{ranking.bestResultMeet}</div>
                          <div className="text-xs text-gray-400">{ranking.bestResultDate}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {highlightTeam && (
        <div className="text-sm text-gray-600 mt-4">
          ⭐ = {highlightTeam} {isRelay ? 'teams' : 'athletes'}
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
