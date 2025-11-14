'use client';

import { useState, useEffect } from 'react';
import { XCTeamResult } from '@/types/results';

export function useXCTeamResults(teamName: string, meetDate?: string, season: string = '2025') {
  const [data, setData] = useState<XCTeamResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!meetDate) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `/data/xc/${season}/${meetDate}/team_results_${teamName}.json`
        );
        if (!response.ok) throw new Error('Failed to fetch XC team results');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [teamName, meetDate, season]);

  return { data, loading, error };
}
