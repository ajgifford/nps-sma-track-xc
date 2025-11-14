'use client';

import { useXCSeasonResults } from '@/hooks/useXCSeasonResults';
import XCSeasonResults from '@/components/XCSeasonResults';
import Link from 'next/link';

export default function XCTeamSeasonPage() {
  const { data, loading, error } = useXCSeasonResults('Nativity_St_Michael');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-6">
        <Link
          href="/results/crosscountry"
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
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
          Back to Results
        </Link>
      </div>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          Team Season Results
        </h1>
        <p className="text-gray-600">
          Performance progression and statistics throughout the season
        </p>
      </div>

      {/* Content */}
      {loading && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading season results...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Results</h3>
          <p className="text-red-700">{error.message}</p>
        </div>
      )}

      {data && !loading && !error && <XCSeasonResults data={data} />}
    </div>
  );
}
