import recordsData from '@/../../data/records_stmichaels.json';
import DataTable from '@/components/DataTable';

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
    const sportTitle = sport === 'crosscountry' ? 'Cross Country' : 'Track';
    
    return (
      <div key={sport} className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">{sportTitle} Records</h2>
        
        {/* Boys Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Boys</h3>
          
          {Object.entries(sportData.boys).map(([grade, records]) => (
            <div key={grade} className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-gray-700 capitalize">
                {grade.replace('-', ' - ')} Grade
              </h4>
              <DataTable headers={headers} data={records} />
            </div>
          ))}
        </div>
        
        {/* Girls Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-pink-700">Girls</h3>
          
          {Object.entries(sportData.girls).map(([grade, records]) => (
            <div key={grade} className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-gray-700 capitalize">
                {grade.replace('-', ' - ')} Grade
              </h4>
              <DataTable headers={headers} data={records} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">St. Michael's School Records</h1>
      
      {renderSportSection('crosscountry')}
      
      <hr className="my-12 border-t-2 border-gray-300" />
      
      {renderSportSection('track')}
    </div>
  );
}
