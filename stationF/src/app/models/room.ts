import {Equipement} from './equipement';

export class Room {
  id: string;
  name: string;
  description: string;
  capacity: Number;
  equipements: Equipement[];
  createdAt: string;
  updatedAt: string;
}
