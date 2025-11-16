import scheduleData from '@/../../data/schedule_track.json';
import DataTable from '@/components/DataTable';

interface ScheduleEntry {
  date: string;
  event: string;
  location: string;
  time: string;
  [key: string]: string | number;
}

export default function TrackSchedule() {
  const headers = ['Date', 'Event', 'Location', 'Time'];

  // Group schedule entries by year
  const scheduleByYear = scheduleData.reduce((acc, entry) => {
    // Extract year from date (format: YYYY-MM-DD or 'TBD')
    if (entry.date === 'TBD') {
      // If date is TBD, try to infer year from other entries or use current year
      const years = Object.keys(acc);
      const latestYear = years.length > 0 ? Math.max(...years.map(y => parseInt(y))).toString() : new Date().getFullYear().toString();
      if (!acc[latestYear]) {
        acc[latestYear] = [];
      }
      acc[latestYear].push(entry);
    } else {
      const year = entry.date.split('-')[0];
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(entry);
    }
    return acc;
  }, {} as Record<string, ScheduleEntry[]>);

  // Sort years newest to oldest
  const sortedYears = Object.keys(scheduleByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg p-8 mb-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Track & Field Schedule</h1>
        <p className="mt-2 text-sky-100">Spring season meets and competitions</p>
      </div>

      {/* Display schedules by year */}
      {sortedYears.map((year) => (
        <div key={year} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            {year} Season
          </h2>
          <DataTable headers={headers} data={scheduleByYear[year]} />
        </div>
      ))}

      {sortedYears.length === 0 && (
        <p className="text-center text-gray-600">No schedule data available.</p>
      )}
    </div>
  );
}
