// ============================================================================
// CROSS COUNTRY TYPES
// ============================================================================

export type XCAgeGroup = '34' | '56' | '78';
export type XCGender = 'Male' | 'Female';

// XC Race Result (individual runner in a race)
export interface XCRaceResult {
  place: number | null;
  athlete: string;
  grade: string;
  score: number | null;
  time: string;
  gap: string;
  avgMile: string;
  scoring?: boolean;  // true if runner contributed to team score
}

// XC Race Data (one race within a meet)
export interface XCRaceData {
  race: string;           // Display name (e.g., "5th & 6th Grade Boys (1 mile)")
  ageGroup: XCAgeGroup;
  gender: XCGender;
  distance: string;
  teamScore?: number;     // Total score (sum of scoring places)
  teamPlace?: number;     // Team's placement in this race
  results: XCRaceResult[];
}

// XC Team Result (per-meet)
export interface XCTeamResult {
  teamName: string;
  meetName: string;
  meetDate: string;
  season: string;
  teamScoreIncluded: boolean;
  scoringPlaces?: number;        // e.g., 5 (top 5 score)
  displacementRunners?: number;  // e.g., 2 (6th and 7th displace)
  races: XCRaceData[];
}

// XC Season Meet Result (one meet within season results)
export interface XCSeasonMeetResult {
  meetName: string;
  meetDate: string;
  results: XCRaceResult[];
}

// XC Season Race Data
export interface XCSeasonRaceData {
  race: string;
  ageGroup: XCAgeGroup;
  gender: XCGender;
  distance: string;
  meets: XCSeasonMeetResult[];
}

// XC Season Result (season-long team results)
export interface XCSeasonResult {
  teamName: string;
  season: string;
  races: XCSeasonRaceData[];
}

// XC Performance (single performance in rankings)
export interface XCPerformance {
  time: string;
  timeSeconds: number;
  avgMile: string;
  place: number | null;
  meetName: string;
  meetDate: string;
}

// XC Ranking Entry
export interface XCRankingEntry {
  rank: number;
  athlete: string;
  grade: string;
  team: string;
  bestTime: string;
  bestTimeSeconds: number;
  bestAvgMile: string;
  bestTimeMeet: string;
  bestTimeMeetDate: string;
  performances: XCPerformance[];  // All performances, sorted by time
}

// XC Event Rankings File
export interface XCEventRankings {
  season: string;
  race: string;           // Display name
  ageGroup: XCAgeGroup;
  gender: XCGender;
  distance: string;
  generatedDate: string;
  rankings: XCRankingEntry[];
}

// XC Race metadata
export interface XCRaceInfo {
  ageGroup: XCAgeGroup;
  gender: XCGender;
  distance: string;
  displayName: string;
}

// XC Race metadata map
export const XC_RACES: Record<string, XCRaceInfo> = {
  '34girls': {
    ageGroup: '34',
    gender: 'Female',
    distance: '1000m',
    displayName: '3rd & 4th Grade Girls (1000m)'
  },
  '34boys': {
    ageGroup: '34',
    gender: 'Male',
    distance: '1000m',
    displayName: '3rd & 4th Grade Boys (1000m)'
  },
  '56girls': {
    ageGroup: '56',
    gender: 'Female',
    distance: '1 mile',
    displayName: '5th & 6th Grade Girls (1 mile)'
  },
  '56boys': {
    ageGroup: '56',
    gender: 'Male',
    distance: '1 mile',
    displayName: '5th & 6th Grade Boys (1 mile)'
  },
  '78girls': {
    ageGroup: '78',
    gender: 'Female',
    distance: '1.5 mile',
    displayName: '7th & 8th Grade Girls (1.5 mile)'
  },
  '78boys': {
    ageGroup: '78',
    gender: 'Male',
    distance: '1.5 mile',
    displayName: '7th & 8th Grade Boys (1.5 mile)'
  }
};

// ============================================================================
// TRACK & FIELD TYPES (for future use)
// ============================================================================

export type Gender = 'M' | 'F' | 'Male' | 'Female';
export type Grade = '5th grade' | '6th grade' | '7th grade' | '8th grade';
export type Season = string;  // e.g., "2025"

export interface EventInfo {
  abbr: string;
  name: string;
  type: 'track' | 'field' | 'relay';
  unit: 'time' | 'distance' | 'height';
}

// Event metadata
export const EVENTS: Record<string, EventInfo> = {
  '60': { abbr: '60', name: '60m', type: 'track', unit: 'time' },
  '100': { abbr: '100', name: '100m', type: 'track', unit: 'time' },
  '200': { abbr: '200', name: '200m', type: 'track', unit: 'time' },
  '400': { abbr: '400', name: '400m', type: 'track', unit: 'time' },
  '800': { abbr: '800', name: '800m', type: 'track', unit: 'time' },
  '1600': { abbr: '1600', name: '1600m', type: 'track', unit: 'time' },
  '3200': { abbr: '3200', name: '3200m', type: 'track', unit: 'time' },
  'LJ': { abbr: 'LJ', name: 'Long Jump', type: 'field', unit: 'distance' },
  'HJ': { abbr: 'HJ', name: 'High Jump', type: 'field', unit: 'height' },
  'SP': { abbr: 'SP', name: 'Shot Put', type: 'field', unit: 'distance' },
  'JT': { abbr: 'JT', name: 'Javelin Throw', type: 'field', unit: 'distance' },
  '400S': { abbr: '400S', name: '4x400m Relay', type: 'relay', unit: 'time' },
  '800S': { abbr: '800S', name: '4x800m Relay', type: 'relay', unit: 'time' },
};

// ============================================================================
// TRACK & FIELD DATA TYPES
// ============================================================================

// Team Results
export interface TrackResult {
  athlete: string;
  event: string;
  result: string;
  place: number | null;
  gender: string;
  grade: string;
}

export interface TrackRelayResult {
  event: string;
  result: string;
  place: number | null;
  gender: string;
  grade: string;
  athletes: string[];
}

export interface TrackMeetResult {
  teamName: string;
  teamCode: string;
  meetName: string;
  meetDate: string;
  results: TrackResult[];
  relayResults?: TrackRelayResult[];
}

export interface TrackTeamResultsFile {
  teamName: string;
  teamCode: string;
  meets: TrackMeetResult[];
}

// Event Rankings (Individual)
export interface TrackEventResult {
  result: string;
  meet: string;
  date: string;
  place: number | null;
}

export interface TrackEventRanking {
  rank: number;
  athlete: string;
  team: string;
  bestResult: string;
  bestResultMeet: string;
  bestResultDate: string;
  allResults: TrackEventResult[];
}

export interface TrackEventCategory {
  gender: string;
  grade: string;
  totalAthletes: number;
  rankings: TrackEventRanking[];
}

export interface TrackEventRankingsFile {
  season: string;
  event: string;
  eventAbbr: string;
  generatedDate: string;
  categories: TrackEventCategory[];
}

// Relay Rankings
export interface RelayAthlete {
  lastName: string;
  firstName: string;
  gender: string;
  grade: string;
}

export interface RelayResult {
  result: string;
  meet: string;
  date: string;
  place: number | null;
  athletes: RelayAthlete[];
}

export interface RelayRanking {
  rank: number;
  teamName: string;
  teamCode: string;
  athletes: string[];
  athleteDetails: RelayAthlete[];
  bestResult: string;
  bestResultMeet: string;
  bestResultDate: string;
  allResults: RelayResult[];
}

export interface RelayCategory {
  gender: string;
  grade: string;
  totalTeams: number;
  rankings: RelayRanking[];
}

export interface RelayRankingsFile {
  season: string;
  event: string;
  eventAbbr: string;
  type: 'relay';
  generatedDate: string;
  categories: RelayCategory[];
}

// Individual Athlete Results
export interface AthleteEventResult {
  id: string;
  event: string;
  overall_place: number | null;
  heat: number | null;
  place: number | null;
  result: string;
  meetName: string;
  meetDate: string;
  relay?: {
    teammates: string[];
  };
}

export interface AthleteResults {
  first_name: string;
  last_name: string;
  gender: string;
  grade: string;
  school: string;
  school_code: string;
  results: {
    [date: string]: {
      results: AthleteEventResult[];
    };
  };
}

export interface IndividualResultsFile {
  [athleteKey: string]: AthleteResults;
}
