'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTrackEventRankings } from '@/hooks/useTrackEventRankings';
import { useRelayRankings } from '@/hooks/useRelayRankings';
import TrackEventRankings from '@/components/TrackEventRankings';
import { INDIVIDUAL_EVENTS, RELAY_EVENTS, EVENT_NAMES } from '@/lib/trackMeets';

export default function TrackRankingsPage() {
  const [selectedEvent, setSelectedEvent] = useState('100');
  const [eventType, setEventType] = useState<'individual' | 'relay'>('individual');

  const isRelay = RELAY_EVENTS.includes(selectedEvent);

  const { data: eventData, loading: eventLoading, error: eventError } = useTrackEventRankings(
    selectedEvent,
    '2025'
  );

  const { data: relayData, loading: relayLoading, error: relayError } = useRelayRankings(
    selectedEvent,
    '2025'
  );

  const data = isRelay ? relayData : eventData;
  const loading = isRelay ? relayLoading : eventLoading;
  const error = isRelay ? relayError : eventError;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/results/track"
          className="text-purple-600 hover:text-purple-800 flex items-center gap-2"
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
          Back to Track Results
        </Link>
      </div>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          Track & Field Rankings
        </h1>
        <p className="text-gray-600">
          2025 Season event leaderboards
        </p>
      </div>

      {/* Event type selector */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setEventType('individual')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              eventType === 'individual'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Individual Events
          </button>
          <button
            onClick={() => setEventType('relay')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              eventType === 'relay'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Relay Events
          </button>
        </div>

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Event:
        </label>
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {eventType === 'individual' ? (
            <>
              <optgroup label="Track Events">
                <option value="60">60m</option>
                <option value="100">100m</option>
                <option value="200">200m</option>
                <option value="400">400m</option>
                <option value="800">800m</option>
                <option value="1600">1600m</option>
              </optgroup>
              <optgroup label="Field Events">
                <option value="LJ">Long Jump</option>
                <option value="HJ">High Jump</option>
                <option value="SP">Shot Put</option>
                <option value="JT">Javelin Throw</option>
              </optgroup>
            </>
          ) : (
            <optgroup label="Relay Events">
              <option value="400">4x100m Relay</option>
              <option value="400S">4x400m Relay</option>
              <option value="800S">4x800m Relay</option>
            </optgroup>
          )}
        </select>
      </div>

      {/* Content */}
      {loading && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-600">Loading rankings...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Rankings</h3>
          <p className="text-red-700">{error.message}</p>
        </div>
      )}

      {data && !loading && !error && (
        <TrackEventRankings data={data} highlightTeam="Saint Michael CYOKS" />
      )}
    </div>
  );
}
