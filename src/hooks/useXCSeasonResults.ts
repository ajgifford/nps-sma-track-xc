'use client';

import { useState, useEffect } from 'react';
import { XCSeasonResult } from '@/types/results';

export function useXCSeasonResults(teamName: string, season: string = '2025') {
  const [data, setData] = useState<XCSeasonResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/data/xc/${season}/season_results/${teamName}.json`
        );
        if (!response.ok) throw new Error('Failed to fetch XC season results');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [teamName, season]);

  return { data, loading, error };
}
