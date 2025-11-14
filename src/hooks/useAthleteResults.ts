'use client';

import { useState, useEffect } from 'react';
import { AthleteResults } from '@/types/results';

export function useAthleteResults(
  firstName: string,
  lastName: string,
  season: string = '2025'
) {
  const [data, setData] = useState<AthleteResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const athleteKey = `${firstName}_${lastName}`;
        const response = await fetch(
          `/data/track/${season}/individual_athletes/${athleteKey}.json`
        );
        if (!response.ok) throw new Error('Failed to fetch athlete results');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (firstName && lastName) {
      fetchData();
    }
  }, [firstName, lastName, season]);

  return { data, loading, error };
}
