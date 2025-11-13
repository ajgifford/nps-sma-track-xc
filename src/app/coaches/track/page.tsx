import coachesData from '@/../../data/coaches.json';
import { Coaches } from '../coaches';
import { Coach } from '@/api/coaches';

export default function TrackCoaches() {
  const coaches = coachesData.filter((coach: Coach) => coach.sports.includes('track'));

  return (
    <Coaches coaches={coaches} title='Track & Field Coaches'/>
  );
}
