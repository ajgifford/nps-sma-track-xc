import { AthleteResults } from '@/types/results';
import fs from 'fs';
import path from 'path';
import AthleteProfile from './AthleteProfile';

interface PageProps {
  params: { athleteName: string };
}

// Generate static paths for all athletes
export async function generateStaticParams() {
  const athletesDir = path.join(process.cwd(), 'public/data/track/2025/individual_athletes');
  const files = fs.readdirSync(athletesDir);

  return files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      athleteName: file.replace('.json', ''),
    }));
}

// Load athlete data on the server
async function getAthleteData(athleteName: string): Promise<AthleteResults | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      'public/data/track/2025/individual_athletes',
      `${athleteName}.json`
    );
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

export default async function AthleteProfilePage({ params }: PageProps) {
  const athlete = await getAthleteData(params.athleteName);

  return <AthleteProfile athlete={athlete} athleteName={params.athleteName} />;
}
