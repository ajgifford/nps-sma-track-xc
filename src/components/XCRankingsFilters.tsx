'use client';

interface XCRankingsFiltersProps {
  ageGroup: '34' | '56' | '78';
  gender: 'boys' | 'girls';
  onAgeGroupChange: (ageGroup: '34' | '56' | '78') => void;
  onGenderChange: (gender: 'boys' | 'girls') => void;
}

export default function XCRankingsFilters({
  ageGroup,
  gender,
  onAgeGroupChange,
  onGenderChange,
}: XCRankingsFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Age Group Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age Group:
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => onAgeGroupChange('34')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                ageGroup === '34'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              3rd & 4th
            </button>
            <button
              onClick={() => onAgeGroupChange('56')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                ageGroup === '56'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              5th & 6th
            </button>
            <button
              onClick={() => onAgeGroupChange('78')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                ageGroup === '78'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              7th & 8th
            </button>
          </div>
        </div>

        {/* Gender Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender:
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => onGenderChange('boys')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                gender === 'boys'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Boys
            </button>
            <button
              onClick={() => onGenderChange('girls')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                gender === 'girls'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Girls
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
