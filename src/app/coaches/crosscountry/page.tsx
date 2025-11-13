import coachesData from '@/../../data/coaches.json';
import { Coaches } from '../coaches';
import { Coach } from '@/api/coaches';

export default function CrossCountryCoaches() {
  const coaches = coachesData.filter((coach: Coach) => coach.sports.includes('crosscountry'));

  return (
    <Coaches coaches={coaches} title='Cross Country Coaches'/>
  );
}
