import recordsData from '@/../../data/records_stmichaels.json';
import DataTable from '@/components/DataTable';
import Image from 'next/image';

interface RecordEntry {
  event: string;
  name: string;
  year: number;
  time: string;
}

interface GradeGroup {
  '3rd-4th': RecordEntry[];
  '5th-6th': RecordEntry[];
  '7th-8th': RecordEntry[];
}

interface SportData {
  boys: GradeGroup;
  girls: GradeGroup;
}

interface RecordsData {
  crosscountry: SportData;
  track: SportData;
}

const typedRecordsData = recordsData as RecordsData;

export default function StMichaelsRecords() {
  const headers = ['Event', 'Name', 'Year', 'Time'];

  const renderSportSection = (sport: 'crosscountry' | 'track') => {
    const sportData = typedRecordsData[sport];
    const sportTitle = sport === 'crosscountry' ? 'Cross Country' : 'Track & Field';
    const sportEmoji = sport === 'crosscountry' ? '🏃' : '🏃‍♂️';

    return (
      <div key={sport} className="mb-12">
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-lg shadow-lg p-6 mb-8 text-white">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span>{sportEmoji}</span>
            {sportTitle} Records
          </h2>
          <p className="mt-2 text-sky-100">School records by grade and gender</p>
        </div>

        {/* Boys Section */}
        <div className="mb-10">
          <div className="bg-blue-100 border-l-4 border-blue-600 rounded-r-lg p-4 mb-6">
            <h3 className="text-2xl font-semibold text-blue-900 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Boys
            </h3>
          </div>

          <div className="space-y-8">
            {Object.entries(sportData.boys).map(([grade, records]) => (
              <div key={grade}>
                <h4 className="text-xl font-semibold mb-4 text-sky-800 capitalize bg-sky-50 rounded-lg p-3 border-l-4 border-sky-400">
                  {grade.replace('-', ' - ')} Grade
                </h4>
                <DataTable headers={headers} data={records} variant="compact" />
              </div>
            ))}
          </div>
        </div>

        {/* Girls Section */}
        <div className="mb-8">
          <div className="bg-pink-100 border-l-4 border-pink-600 rounded-r-lg p-4 mb-6">
            <h3 className="text-2xl font-semibold text-pink-900 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Girls
            </h3>
          </div>

          <div className="space-y-8">
            {Object.entries(sportData.girls).map(([grade, records]) => (
              <div key={grade}>
                <h4 className="text-xl font-semibold mb-4 text-sky-800 capitalize bg-sky-50 rounded-lg p-3 border-l-4 border-sky-400">
                  {grade.replace('-', ' - ')} Grade
                </h4>
                <DataTable headers={headers} data={records} variant="compact" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg p-8 mb-10 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-32 h-32 flex-shrink-0 bg-white rounded-lg p-2">
            <Image
              src="/images/sma.png"
              alt="St. Michael the Archangel"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">St. Michael's School Records</h1>
            <p className="mt-2 text-sky-100">All-time best performances by our athletes</p>
          </div>
        </div>
      </div>

      {renderSportSection('crosscountry')}

      <div className="my-12 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-sky-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-6 py-2 text-lg font-semibold text-sky-800 rounded-full border-2 border-sky-200">
            ⭐
          </span>
        </div>
      </div>

      {renderSportSection('track')}
    </div>
  );
}
