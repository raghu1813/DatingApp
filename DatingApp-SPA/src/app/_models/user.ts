import { Photo } from './photo';

export interface User {
  id: number;
  username: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  lastActive: any;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string;
  intriduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}