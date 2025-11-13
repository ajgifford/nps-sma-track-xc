import scheduleData from '@/../../data/schedule_track.json';
import DataTable from '@/components/DataTable';

export default function TrackSchedule() {
  const headers = ['Date', 'Event', 'Location', 'Time'];
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Track & Field Schedule</h1>
      <DataTable headers={headers} data={scheduleData} />
    </div>
  );
}
