import { Event } from './events';
import { User } from './user';

export interface Transactions {
  id: number;
  qty: number;
  total: number;
  status: string;
  event: Event;
  user: User;
}
