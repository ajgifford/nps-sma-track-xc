export interface Coach {
  id: string;
  name: string;
  title: string;
  sports: string[];
  parish: string;
  photo: string;
  bio: string;
  experience: string[];
  kids: { name: string; grade: string }[];
  email: string;
}
