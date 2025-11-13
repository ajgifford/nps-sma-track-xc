import resultsData from '@/../../data/results_track.json';
import DataTable from '@/components/DataTable';

export default function TrackResults() {
  const headers = ['Date', 'Meet', 'Boys', 'Girls', 'Details'];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Track & Field Results</h1>
      <DataTable headers={headers} data={resultsData} />
    </div>
  );
}
