import Link from 'next/link';

export default function AthletesPage() {
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
          Athlete Profiles
        </h1>
        <p className="text-gray-600">
          Individual athlete results and personal records
        </p>
      </div>

      {/* Coming soon notice */}
      <div className="bg-white rounded-lg shadow p-12 text-center">
        <div className="text-6xl mb-4">👤</div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Athlete Profiles Coming Soon
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Individual athlete profiles with performance history, personal records, and event-by-event analysis will be available here. Check back soon!
        </p>
        <div className="mt-8">
          <Link
            href="/results/track/rankings"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Event Rankings Instead
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
