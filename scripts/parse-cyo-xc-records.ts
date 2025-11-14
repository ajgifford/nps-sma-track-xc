/**
 * Script to parse CYO Cross Country Records from PDF data into JSON format
 */

interface XCRecord {
  name: string;
  school: string;
  time: string;
  year: number;
}

interface ClassRecords {
  class: string;
  boys: XCRecord;
  girls: XCRecord;
}

interface RaceCategory {
  distance: string;
  gradeGroup: string;
  classRecords: ClassRecords[];
  overall: {
    boys: XCRecord;
    girls: XCRecord;
  };
}

interface CYOXCRecords {
  lastUpdated: string;
  year: number;
  races: RaceCategory[];
}

// Cross Country records data
const xcRecords: CYOXCRecords = {
  lastUpdated: '2024-10-19',
  year: 2024,
  races: [
    {
      distance: '1 mile',
      gradeGroup: '5/6th Grade',
      classRecords: [
        {
          class: 'A',
          girls: {
            name: 'Riley Kramer',
            school: 'Holy Spirit',
            time: '6:00.60',
            year: 2022
          },
          boys: {
            name: 'Jack Keathley-Helms',
            school: 'Corpus Christi',
            time: '5:57.24',
            year: 2015
          }
        },
        {
          class: 'AA',
          girls: {
            name: 'Savannah Moos',
            school: 'Prince of Peace',
            time: '6:07.11',
            year: 2022
          },
          boys: {
            name: 'Joey Rush',
            school: 'St. Ann',
            time: '5:45.58',
            year: 2024
          }
        },
        {
          class: 'AAA',
          girls: {
            name: 'Mary O\'Connor',
            school: 'Holy Trinity',
            time: '6:08.91',
            year: 2014
          },
          boys: {
            name: 'George Barkemeyer',
            school: 'Prince of Peace',
            time: '5:29.73',
            year: 2024
          }
        }
      ],
      overall: {
        girls: {
          name: 'Riley Kramer',
          school: 'Holy Spirit',
          time: '6:00.60',
          year: 2022
        },
        boys: {
          name: 'George Barkemeyer',
          school: 'Prince of Peace',
          time: '5:29.73',
          year: 2024
        }
      }
    },
    {
      distance: '1.5 miles',
      gradeGroup: '7/8th Grade',
      classRecords: [
        {
          class: 'A',
          girls: {
            name: 'Riley Kramer',
            school: 'Holy Spirit',
            time: '9:11.09',
            year: 2023
          },
          boys: {
            name: 'Adam Wilson',
            school: 'St. Patrick',
            time: '9:00.26',
            year: 2013
          }
        },
        {
          class: 'AA',
          girls: {
            name: 'Savannah Moos',
            school: 'Prince of Peace',
            time: '8:52.97',
            year: 2024
          },
          boys: {
            name: 'Nicholas Newkirk',
            school: 'Corpus Christi',
            time: '7:57.83',
            year: 2023
          }
        },
        {
          class: 'AAA',
          girls: {
            name: 'Olivia Sovereign',
            school: 'Holy Trinity',
            time: '8:48.45',
            year: 2014
          },
          boys: {
            name: 'Jack Keathley-Helms',
            school: 'Corpus Christi',
            time: '8:09.22',
            year: 2017
          }
        }
      ],
      overall: {
        girls: {
          name: 'Olivia Sovereign',
          school: 'Holy Trinity',
          time: '8:48.45',
          year: 2014
        },
        boys: {
          name: 'Nicholas Newkirk',
          school: 'Corpus Christi',
          time: '7:57.83',
          year: 2023
        }
      }
    }
  ]
};

// Write output file
import { writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = join(process.cwd(), 'data');

writeFileSync(
  join(outputDir, '2024_cyo_xc_records.json'),
  JSON.stringify(xcRecords, null, 2),
  'utf-8'
);

console.log('✅ Successfully generated JSON file:');
console.log('  - data/2024_cyo_xc_records.json');
