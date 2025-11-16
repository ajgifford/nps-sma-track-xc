// Cross Country Meet Configuration
// This file contains the list of available meets across all seasons

export interface MeetInfo {
  date: string;        // Format: MM-DD-YYYY (matches directory name)
  name: string;        // Display name
  displayDate: string; // Human-readable date
  year: string;        // Season year
  hasResults?: boolean; // Whether results are available (default: true for backward compatibility)
}

// Meet data organized by year
export const XC_MEETS_BY_YEAR: Record<string, MeetInfo[]> = {
  '2025': [
    {
      date: '09-27-2025',
      name: 'CYO Meet 1',
      displayDate: 'September 27, 2025',
      year: '2025',
      hasResults: true,
    },
    {
      date: '10-04-2025',
      name: 'CYO Meet 2',
      displayDate: 'October 4, 2025',
      year: '2025',
      hasResults: true,
    },
    {
      date: '10-11-2025',
      name: 'CYO Meet 3',
      displayDate: 'October 11, 2025',
      year: '2025',
      hasResults: true,
    },
    {
      date: '10-18-2025',
      name: 'CYO Final',
      displayDate: 'October 18, 2025',
      year: '2025',
      hasResults: true,
    },
    {
      date: '10-20-2025',
      name: 'KS/MO Border War',
      displayDate: 'October 20, 2025',
      year: '2025',
      hasResults: true,
    },
  ],
};

// Legacy export for backward compatibility
export const XC_MEETS_2025: MeetInfo[] = XC_MEETS_BY_YEAR['2025'];

// Helper function to get all meets across all years
export function getAllXCMeets(): MeetInfo[] {
  return Object.values(XC_MEETS_BY_YEAR).flat();
}

// Helper function to get meets for a specific year
export function getXCMeetsByYear(year: string): MeetInfo[] {
  return XC_MEETS_BY_YEAR[year] || [];
}

// Helper function to get all available years, sorted newest to oldest
export function getXCYears(): string[] {
  return Object.keys(XC_MEETS_BY_YEAR).sort((a, b) => parseInt(b) - parseInt(a));
}

// Helper function to get meets grouped by year
export function getXCMeetsGroupedByYear(): Record<string, MeetInfo[]> {
  return XC_MEETS_BY_YEAR;
}

export const DEFAULT_TEAM = 'Nativity_St_Michael';
export const DEFAULT_SEASON = '2025';
