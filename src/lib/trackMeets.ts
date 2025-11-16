// Track & Field Meet Configuration
// This file contains the list of available meets across all seasons

export interface TrackMeetInfo {
  date: string;        // Format: MM-DD-YYYY (matches directory name)
  name: string;        // Display name
  displayDate: string; // Human-readable date
  year: string;        // Season year
  hasResults?: boolean; // Whether results are available (default: true for backward compatibility)
}

// Meet data organized by year
export const TRACK_MEETS_BY_YEAR: Record<string, TrackMeetInfo[]> = {
  '2025': [
    {
      date: '04-05-2025',
      name: 'CYO #1 2025',
      displayDate: 'April 05, 2025',
      year: '2025',
      hasResults: true,
    },
    {
      date: '04-12-2025',
      name: 'CYO #2 2025',
      displayDate: 'April 12, 2025',
      year: '2025',
      hasResults: true,
    },
    {
      date: '04-26-2025',
      name: 'CYO #3 2025',
      displayDate: 'April 26, 2025',
      year: '2025',
      hasResults: true,
    },
    {
      date: '05-03-2025',
      name: 'CYO City Final 2025',
      displayDate: 'May 03, 2025',
      year: '2025',
      hasResults: true,
    },
  ],
};

// Legacy export for backward compatibility
export const TRACK_MEETS_2025: TrackMeetInfo[] = TRACK_MEETS_BY_YEAR['2025'];

// Helper function to get all meets across all years
export function getAllTrackMeets(): TrackMeetInfo[] {
  return Object.values(TRACK_MEETS_BY_YEAR).flat();
}

// Helper function to get meets for a specific year
export function getTrackMeetsByYear(year: string): TrackMeetInfo[] {
  return TRACK_MEETS_BY_YEAR[year] || [];
}

// Helper function to get all available years, sorted newest to oldest
export function getTrackYears(): string[] {
  return Object.keys(TRACK_MEETS_BY_YEAR).sort((a, b) => parseInt(b) - parseInt(a));
}

// Helper function to get meets grouped by year
export function getTrackMeetsGroupedByYear(): Record<string, TrackMeetInfo[]> {
  return TRACK_MEETS_BY_YEAR;
}

export const DEFAULT_TRACK_TEAM = 'SMA1'; // Saint Michael CYOKS
export const DEFAULT_TRACK_SEASON = '2025';

// Event display names
export const EVENT_NAMES: Record<string, string> = {
  '60': '60m',
  '100': '100m',
  '200': '200m',
  '400': '400m',
  '800': '800m',
  '1600': '1600m',
  '3200': '3200m',
  'LJ': 'Long Jump',
  'HJ': 'High Jump',
  'SP': 'Shot Put',
  'JT': 'Javelin Throw',
  '400S': '4x100m Relay',
  '800S': '4x800m Relay',
  'DMRS': 'Distance Medley Relay',
  'MRS': 'Medley Relay',
};

// Track events (running)
export const TRACK_EVENTS = ['60', '100', '200', '400', '800', '1600', '3200'];

// Field events
export const FIELD_EVENTS = ['LJ', 'HJ', 'SP', 'JT'];

// Relay events
export const RELAY_EVENTS = ['400', '400S', '800S', 'DMRS', 'MRS'];

// All individual events
export const INDIVIDUAL_EVENTS = [...TRACK_EVENTS, ...FIELD_EVENTS];
