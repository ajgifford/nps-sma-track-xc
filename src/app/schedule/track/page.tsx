import scheduleData from '@/../../data/schedule_track.json';
import DataTable from '@/components/DataTable';

export default function TrackSchedule() {
  const headers = ['Date', 'Event', 'Location', 'Time'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg p-8 mb-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Track & Field Schedule</h1>
        <p className="mt-2 text-sky-100">Spring season meets and competitions</p>
      </div>

      <DataTable headers={headers} data={scheduleData} />
    </div>
  );
}
