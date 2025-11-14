// Cross Country Meet Configuration
// This file contains the list of available meets for the 2025 season

export interface MeetInfo {
  date: string;        // Format: MM-DD-YYYY (matches directory name)
  name: string;        // Display name
  displayDate: string; // Human-readable date
}

export const XC_MEETS_2025: MeetInfo[] = [
  {
    date: '09-27-2025',
    name: 'CYO Meet 1',
    displayDate: 'September 27, 2025',
  },
  {
    date: '10-04-2025',
    name: 'CYO Meet 2',
    displayDate: 'October 4, 2025',
  },
  {
    date: '10-11-2025',
    name: 'CYO Meet 3',
    displayDate: 'October 11, 2025',
  },
  {
    date: '10-18-2025',
    name: 'CYO Final',
    displayDate: 'October 18, 2025',
  },
  {
    date: '10-20-2025',
    name: 'KS/MO Border War',
    displayDate: 'October 20, 2025',
  },
];

export const DEFAULT_TEAM = 'Nativity_St_Michael';
export const DEFAULT_SEASON = '2025';
