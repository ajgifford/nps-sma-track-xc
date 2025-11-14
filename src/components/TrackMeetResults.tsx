'use client';

import { TrackTeamResultsFile, TrackMeetResult } from '@/types/results';
import { EVENT_NAMES, TRACK_EVENTS, FIELD_EVENTS } from '@/lib/trackMeets';

interface TrackMeetResultsProps {
  data: TrackTeamResultsFile;
}

export default function TrackMeetResults({ data }: TrackMeetResultsProps) {
  return (
    <div className="space-y-6">
      {/* Team header */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold mb-2">{data.teamName}</h2>
        <p className="text-gray-600">Team Code: {data.teamCode}</p>
        <p className="text-sm text-gray-500 mt-2">{data.meets.length} meet(s)</p>
      </div>

      {/* Meet results */}
      {data.meets.map((meet, idx) => (
        <MeetResultsCard key={idx} meet={meet} />
      ))}
    </div>
  );
}

interface MeetResultsCardProps {
  meet: TrackMeetResult;
}

function MeetResultsCard({ meet }: MeetResultsCardProps) {
  // Group results by category
  const trackResults = meet.results.filter((r) => TRACK_EVENTS.includes(r.event));
  const fieldResults = meet.results.filter((r) => FIELD_EVENTS.includes(r.event));

  // Group by gender and grade
  const groupedResults = groupByGenderAndGrade(meet.results);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Meet header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4">
        <h3 className="text-xl font-semibold">{meet.meetName}</h3>
        <p className="text-purple-100 text-sm mt-1">{meet.meetDate}</p>
        <div className="mt-3 flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full">
              {meet.results.length} individual results
            </span>
          </div>
          {meet.relayResults && meet.relayResults.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {meet.relayResults.length} relay results
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Results by category */}
      <div className="p-6 space-y-6">
        {Object.entries(groupedResults).map(([category, results]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold mb-3 text-gray-900 border-b pb-2">
              {category}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.map((result, idx) => (
                <ResultCard key={idx} result={result} />
              ))}
            </div>
          </div>
        ))}

        {/* Relay results */}
        {meet.relayResults && meet.relayResults.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-900 border-b pb-2">
              Relay Results
            </h4>
            <div className="space-y-3">
              {meet.relayResults.map((relay, idx) => (
                <div key={idx} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {EVENT_NAMES[relay.event] || relay.event} ({relay.gender} {relay.grade})
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {relay.athletes.join(' • ')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        {relay.place && relay.place <= 3 && (
                          <span className="text-2xl">{getPlaceBadge(relay.place)}</span>
                        )}
                        <span className={`font-semibold ${getPlaceColor(relay.place)}`}>
                          {relay.place ? `${relay.place}${getOrdinalSuffix(relay.place)}` : 'N/A'}
                        </span>
                      </div>
                      <div className="font-mono font-medium text-lg">{relay.result}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultCard({ result }: { result: any }) {
  return (
    <div className={`rounded-lg p-3 border ${getBackgroundColor(result.place)}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-medium text-gray-900">{result.athlete}</div>
          <div className="text-sm text-gray-600 mt-1">
            {EVENT_NAMES[result.event] || result.event}
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 justify-end">
            {result.place && result.place <= 3 && (
              <span className="text-xl">{getPlaceBadge(result.place)}</span>
            )}
            <span className={`font-semibold ${getPlaceColor(result.place)}`}>
              {result.place ? `${result.place}${getOrdinalSuffix(result.place)}` : 'N/A'}
            </span>
          </div>
          <div className="font-mono font-medium mt-1">{result.result}</div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function groupByGenderAndGrade(results: any[]) {
  const grouped: Record<string, any[]> = {};

  results.forEach((result) => {
    const key = `${result.gender === 'M' ? 'Boys' : 'Girls'} ${result.grade}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(result);
  });

  return grouped;
}

function getPlaceBadge(place: number | null): string {
  if (!place) return '';
  const badges: Record<number, string> = {
    1: '🥇',
    2: '🥈',
    3: '🥉',
  };
  return badges[place] || '';
}

function getPlaceColor(place: number | null): string {
  if (!place) return 'text-gray-500';
  if (place === 1) return 'text-yellow-600';
  if (place === 2) return 'text-gray-500';
  if (place === 3) return 'text-orange-600';
  if (place <= 5) return 'text-blue-600';
  return 'text-gray-600';
}

function getBackgroundColor(place: number | null): string {
  if (!place) return 'bg-gray-50 border-gray-200';
  if (place === 1) return 'bg-yellow-50 border-yellow-300';
  if (place === 2) return 'bg-gray-100 border-gray-300';
  if (place === 3) return 'bg-orange-50 border-orange-300';
  if (place <= 5) return 'bg-blue-50 border-blue-200';
  return 'bg-white border-gray-200';
}

function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) return 'st';
  if (j === 2 && k !== 12) return 'nd';
  if (j === 3 && k !== 13) return 'rd';
  return 'th';
}
