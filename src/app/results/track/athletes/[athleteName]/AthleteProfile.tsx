'use client';

import { EVENT_NAMES } from '@/lib/trackMeets';
import { AthleteEventResult, AthleteResults } from '@/types/results';
import Link from 'next/link';
import { useMemo } from 'react';

interface AthleteProfileProps {
  athlete: AthleteResults | null;
  athleteName: string;
}

export default function AthleteProfile({ athlete, athleteName }: AthleteProfileProps) {
  const [firstName, lastName] = athleteName.split('_');

  // Calculate personal records for each event
  const personalRecords = useMemo(() => {
    if (!athlete) return {};

    const records: Record<string, AthleteEventResult> = {};

    // Iterate through all results
    Object.values(athlete.results).forEach(({ results }) => {
      results.forEach((result) => {
        const currentBest = records[result.event];

        if (!currentBest) {
          records[result.event] = result;
        } else {
          // Compare results (lower is better for times, higher for field events)
          const isFieldEvent = ['LJ', 'HJ', 'SP', 'JT'].includes(result.event);

          if (isFieldEvent) {
            // For field events, compare numerically (higher is better)
            const currentValue = parseFieldResult(currentBest.result);
            const newValue = parseFieldResult(result.result);
            if (newValue > currentValue) {
              records[result.event] = result;
            }
          } else {
            // For track events, compare times (lower is better)
            const currentTime = parseFloat(currentBest.result);
            const newTime = parseFloat(result.result);
            if (newTime < currentTime) {
              records[result.event] = result;
            }
          }
        }
      });
    });

    return records;
  }, [athlete]);

  // Get all results in chronological order
  const allResults = useMemo(() => {
    if (!athlete) return [];

    const results: (AthleteEventResult & { date: string })[] = [];

    Object.entries(athlete.results).forEach(([date, { results: dateResults }]) => {
      dateResults.forEach((result) => {
        results.push({ ...result, date });
      });
    });

    // Sort by date (most recent first)
    return results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [athlete]);

  if (!athlete) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Link
            href="/results/track/athletes"
            className="text-sky-600 hover:text-sky-800 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Athletes
          </Link>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-red-900 mb-2">
            Athlete Not Found
          </h2>
          <p className="text-red-700">
            Could not find results for {firstName} {lastName}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/results/track/athletes"
          className="text-sky-600 hover:text-sky-800 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Athletes
        </Link>
      </div>

      {/* Athlete Header */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-2">
          {athlete.first_name} {athlete.last_name}
        </h1>
        <div className="flex flex-wrap gap-4 text-sky-100">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span>{athlete.grade}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span>{athlete.gender === 'M' ? 'Male' : 'Female'}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
            <span>{athlete.school}</span>
          </div>
        </div>
      </div>

      {/* Personal Records */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Records</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(personalRecords).map(([event, result]) => (
            <div
              key={event}
              className="bg-white rounded-lg shadow border border-gray-200 p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {EVENT_NAMES[event] || event}
                </h3>
                {result.overall_place && result.overall_place <= 3 && (
                  <div className={`text-2xl ${getPlacementColor(result.overall_place)}`}>
                    {getPlacementEmoji(result.overall_place)}
                  </div>
                )}
              </div>
              <div className="text-3xl font-bold text-sky-600 mb-2">
                {result.result}
              </div>
              <div className="text-sm text-gray-600">
                <div>{result.meetName}</div>
                <div className="text-xs text-gray-500">{result.meetDate}</div>
                {result.overall_place && (
                  <div className="text-xs font-medium text-gray-700 mt-1">
                    Place: {result.overall_place}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Results */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">All Results</h2>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Meet
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Result
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Heat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Place
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Overall
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allResults.map((result, index) => {
                  const isPR = personalRecords[result.event]?.id === result.id;
                  return (
                    <tr
                      key={`${result.date}-${result.id}`}
                      className={`${isPR ? 'bg-yellow-50' : ''} hover:bg-gray-50`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {result.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {result.meetName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {EVENT_NAMES[result.event] || result.event}
                        {isPR && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            PR
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-sky-600">
                        {result.result}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {result.heat || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {result.place || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {result.overall_place && (
                          <span className="flex items-center gap-1">
                            {result.overall_place <= 3 && (
                              <span className={getPlacementColor(result.overall_place)}>
                                {getPlacementEmoji(result.overall_place)}
                              </span>
                            )}
                            <span className={result.overall_place <= 3 ? 'font-semibold' : ''}>
                              {result.overall_place}
                            </span>
                          </span>
                        )}
                        {!result.overall_place && '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function parseFieldResult(result: string): number {
  // Handle formats like "10-08.00" (feet-inches) or "32.5" (meters)
  if (result.includes('-')) {
    const [feet, inches] = result.split('-').map(parseFloat);
    return feet * 12 + inches; // Convert to total inches
  }
  return parseFloat(result);
}

function getPlacementEmoji(place: number): string {
  switch (place) {
    case 1:
      return '🥇';
    case 2:
      return '🥈';
    case 3:
      return '🥉';
    default:
      return '';
  }
}

function getPlacementColor(place: number): string {
  switch (place) {
    case 1:
      return 'text-yellow-500';
    case 2:
      return 'text-gray-400';
    case 3:
      return 'text-orange-600';
    default:
      return '';
  }
}
