import Link from 'next/link';
import { readFileSync } from 'fs';
import { join } from 'path';
import XCMeetResults from '@/components/XCMeetResults';
import { XC_MEETS_2025, DEFAULT_TEAM, DEFAULT_SEASON } from '@/lib/xcMeets';
import type { XCTeamResult } from '@/types/results';

interface PageProps {
  params: {
    meetDate: string;
  };
}

// Required for static export - generates all possible routes at build time
export async function generateStaticParams() {
  return XC_MEETS_2025.map((meet) => ({
    meetDate: meet.date,
  }));
}

export default function MeetResultsPage({ params }: PageProps) {
  const { meetDate } = params;

  // Find meet info for display
  const meetInfo = XC_MEETS_2025.find((m) => m.date === meetDate);

  // Load data server-side during static generation
  let data: XCTeamResult | null = null;
  let error: string | null = null;

  try {
    const filePath = join(
      process.cwd(),
      'public/data/xc',
      DEFAULT_SEASON,
      meetDate,
      `team_results_${DEFAULT_TEAM}.json`
    );
    const fileContent = readFileSync(filePath, 'utf-8');
    data = JSON.parse(fileContent);
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load meet results';
  }

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
          Back to All Meets
        </Link>
      </div>

      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900">
          {meetInfo?.name || 'Meet Results'}
        </h1>
        {meetInfo && (
          <p className="text-gray-600">{meetInfo.displayDate}</p>
        )}
      </div>

      {/* Content */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Results</h3>
          <p className="text-red-700">{error}</p>
          <p className="text-sm text-red-600 mt-2">
            Meet date: {meetDate} • Team: {DEFAULT_TEAM}
          </p>
        </div>
      )}

      {data && !error && <XCMeetResults data={data} />}
    </div>
  );
}
