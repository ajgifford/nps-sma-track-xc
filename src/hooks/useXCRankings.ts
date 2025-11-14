'use client';

import { useState, useEffect } from 'react';
import { XCEventRankings } from '@/types/results';

export function useXCRankings(
  ageGroup: '34' | '56' | '78',
  gender: 'boys' | 'girls',
  season: string = '2025'
) {
  const [data, setData] = useState<XCEventRankings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const raceId = `${ageGroup}${gender}`;
        const response = await fetch(
          `/data/xc/${season}/rankings/${raceId}.json`
        );
        if (!response.ok) throw new Error('Failed to fetch XC rankings');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ageGroup, gender, season]);

  return { data, loading, error };
}
