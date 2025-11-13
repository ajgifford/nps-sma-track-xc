import Link from 'next/link';
import resultsData from '@/../../data/results_crosscountry.json';

interface ResultGroup {
  boys_3rd_4th: string;
  girls_3rd_4th: string;
  boys_5th_6th: string;
  girls_5th_6th: string;
  boys_7th_8th: string;
  girls_7th_8th: string;
}

interface Result {
  date: string;
  meet: string;
  groups: ResultGroup;
  detailsId: string;
}

export default function CrossCountryResults() {
  const results = resultsData as Result[];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Cross Country Results</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Meet</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">Girls 3rd/4th</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">Boys 3rd/4th</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">Girls 5th/6th</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">Boys 5th/6th</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">Girls 7th/8th</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">Boys 7th/8th</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700 border-b">{result.date}</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-b font-medium">{result.meet}</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-b text-center">{result.groups.girls_3rd_4th}</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-b text-center">{result.groups.boys_3rd_4th}</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-b text-center">{result.groups.girls_5th_6th}</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-b text-center">{result.groups.boys_5th_6th}</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-b text-center">{result.groups.girls_7th_8th}</td>
                <td className="px-4 py-3 text-sm text-gray-700 border-b text-center">{result.groups.boys_7th_8th}</td>
                <td className="px-4 py-3 text-sm border-b text-center">
                  <Link 
                    href={`/results/crosscountry/${result.detailsId}`}
                    className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors"
                    title="View Details"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
