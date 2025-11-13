import Link from 'next/link';
import resultsData from '@/../../data/results_crosscountry.json';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return resultsData.map((result) => ({
    id: result.detailsId,
  }));
}

export default function CrossCountryResultDetails({ params }: PageProps) {
  const { id } = params;
  
  // Find the meet details from the static data
  const meetData = resultsData.find((result) => result.detailsId === id);
  const title = meetData?.meet || 'Meet Results';

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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

      <h1 className="text-4xl font-bold mb-8 text-gray-900">{title}</h1>
      
      <div className="bg-white border border-gray-300 shadow-sm rounded-lg p-6">
        <p className="text-gray-600 mb-4">
          Meet ID: <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{id}</span>
        </p>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Results</h2>
          <p className="text-gray-600">
            Detailed results content will be loaded here based on the meet ID: <strong>{id}</strong>
          </p>
          <p className="text-gray-500 text-sm mt-4">
            This section will be populated with detailed race results, individual times, team scores, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
