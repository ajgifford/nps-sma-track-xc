import xcRecordsData from '@/../../data/2025_cyo_xc_records.json';
import trackBoysData from '@/../../data/2025_cyo_track_records_boys.json';
import trackGirlsData from '@/../../data/2025_cyo_track_records_girls.json';
import PageJumpNav from '@/components/PageJumpNav';
import Image from 'next/image';

// Types for XC Records
interface AthleteRecord {
  name: string;
  school: string;
  time: string;
  year: number;
}

interface ClassRecord {
  class: string;
  girls: AthleteRecord;
  boys: AthleteRecord;
}

interface Race {
  distance: string;
  gradeGroup: string;
  classRecords: ClassRecord[];
  overall: {
    girls: AthleteRecord;
    boys: AthleteRecord;
  };
}

interface XCRecords {
  lastUpdated: string;
  year: number;
  races: Race[];
}

// Types for Track Records
interface TrackEvent {
  event: string;
  name: string;
  school: string;
  result: string;
  year: number;
}

interface GradeClassRecord {
  grade: string;
  class: string;
  events: TrackEvent[];
}

interface TrackRecords {
  gender: string;
  year: number;
  records: GradeClassRecord[];
}

const typedXCRecords = xcRecordsData as XCRecords;
const typedTrackBoysData = trackBoysData as TrackRecords;
const typedTrackGirlsData = trackGirlsData as TrackRecords;

export default function CYORecords() {
  const navSections = [
    { id: 'cross-country', label: 'Cross Country', icon: '🏃' },
    { id: 'track-boys', label: 'Track - Boys', icon: '🏃‍♂️' },
    { id: 'track-girls', label: 'Track - Girls', icon: '🏃‍♀️' },
  ];

  // Render Cross Country Records
  const renderXCRecords = () => {
    return (
      <div id="cross-country" className="mb-12 scroll-mt-24">
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-lg shadow-lg p-6 mb-8 text-white">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span>🏃</span>
            Cross Country Records
          </h2>
          <p className="mt-2 text-sky-100">CYO Cross Country records by class and grade</p>
          <p className="mt-1 text-sm text-sky-200">Last Updated: {typedXCRecords.lastUpdated}</p>
        </div>

        {typedXCRecords.races.map((race, idx) => (
          <div key={idx} className="mb-10">
            <div className="bg-sky-100 border-l-4 border-sky-600 rounded-r-lg p-4 mb-6">
              <h3 className="text-2xl font-semibold text-sky-900">
                {race.distance} - {race.gradeGroup}
              </h3>
            </div>

            {/* Class Records */}
            <div className="space-y-6 mb-6">
              {race.classRecords.map((classRecord) => (
                <div key={classRecord.class}>
                  <h4 className="text-xl font-semibold mb-3 text-sky-800 bg-sky-50 rounded-lg p-3 border-l-4 border-sky-400">
                    Class {classRecord.class}
                  </h4>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Girls Record */}
                    <div className="bg-white rounded-lg shadow p-4 border-l-4 border-pink-400">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-pink-600 font-bold">Girls</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{classRecord.girls.name}</p>
                      <p className="text-sm text-gray-600">{classRecord.girls.school}</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-blue-600 font-bold">{classRecord.girls.time}</span>
                        <span className="text-gray-500 text-sm">({classRecord.girls.year})</span>
                      </div>
                    </div>

                    {/* Boys Record */}
                    <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-blue-600 font-bold">Boys</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{classRecord.boys.name}</p>
                      <p className="text-sm text-gray-600">{classRecord.boys.school}</p>
                      <div className="flex justify-between mt-2">
                        <span className="text-blue-600 font-bold">{classRecord.boys.time}</span>
                        <span className="text-gray-500 text-sm">({classRecord.boys.year})</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Records */}
            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-6 border-2 border-yellow-400">
              <h4 className="text-xl font-bold mb-4 text-amber-900 flex items-center gap-2">
                <span>⭐</span>
                Overall Records
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Girls Overall */}
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-pink-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-pink-600 font-bold">Girls</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{race.overall.girls.name}</p>
                  <p className="text-sm text-gray-600">{race.overall.girls.school}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-blue-600 font-bold text-lg">{race.overall.girls.time}</span>
                    <span className="text-gray-500 text-sm">({race.overall.girls.year})</span>
                  </div>
                </div>

                {/* Boys Overall */}
                <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600 font-bold">Boys</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{race.overall.boys.name}</p>
                  <p className="text-sm text-gray-600">{race.overall.boys.school}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-blue-600 font-bold text-lg">{race.overall.boys.time}</span>
                    <span className="text-gray-500 text-sm">({race.overall.boys.year})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render Track Records
  const renderTrackRecords = () => {
    const renderGenderRecords = (data: TrackRecords, genderColor: string) => {
      const borderColor = genderColor === 'pink' ? 'border-pink-600' : 'border-blue-600';
      const bgColor = genderColor === 'pink' ? 'bg-pink-100' : 'bg-blue-100';
      const textColor = genderColor === 'pink' ? 'text-pink-900' : 'text-blue-900';
      const sectionId = `track-${data.gender}`;

      return (
        <div id={sectionId} className="mb-10 scroll-mt-24">
          <div className={`${bgColor} border-l-4 ${borderColor} rounded-r-lg p-4 mb-6`}>
            <h3 className={`text-2xl font-semibold ${textColor} capitalize`}>
              {data.gender}
            </h3>
          </div>

          {data.records.map((gradeClass, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-sky-800 bg-sky-50 rounded-lg p-3 border-l-4 border-sky-400">
                {gradeClass.grade} Grade - Class {gradeClass.class}
              </h4>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gradient-to-r from-sky-500 to-blue-600">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider text-white">
                          Event
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider text-white">
                          Name
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider text-white">
                          School
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider text-white">
                          Result
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider text-white">
                          Year
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {gradeClass.events.map((event, eventIdx) => (
                        <tr key={eventIdx} className="hover:bg-sky-50 transition-colors duration-150">
                          <td className="px-4 py-3 text-sm text-gray-700 font-medium">
                            {event.event}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {event.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            {event.school}
                          </td>
                          <td className="px-4 py-3 text-sm text-blue-600 font-semibold">
                            {event.result}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            {event.year}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };

    return (
      <div className="mb-12">
        <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-lg shadow-lg p-6 mb-8 text-white">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span>🏃‍♂️</span>
            Track & Field Records
          </h2>
          <p className="mt-2 text-sky-100">CYO Track & Field records by class and grade</p>
        </div>

        {renderGenderRecords(typedTrackBoysData, 'blue')}
        {renderGenderRecords(typedTrackGirlsData, 'pink')}
      </div>
    );
  };

  return (
    <>
      <PageJumpNav sections={navSections} position="right" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow-lg p-8 mb-10 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">CYO Records</h1>
              <p className="mt-2 text-sky-100">Catholic Youth Organization all-time best performances</p>
            </div>
          </div>
        </div>

        {renderXCRecords()}

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

      {renderTrackRecords()}
      </div>
    </>
  );
}
