'use client';

import { useState, useEffect } from 'react';
import { RelayRankingsFile } from '@/types/results';

export function useRelayRankings(
  event: string,
  season: string = '2025'
) {
  const [data, setData] = useState<RelayRankingsFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/data/track/${season}/rankings/relay_rankings_${season}_${event}.json`
        );
        if (!response.ok) throw new Error('Failed to fetch relay rankings');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [event, season]);

  return { data, loading, error };
}
