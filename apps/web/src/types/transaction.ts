import { Event } from './events';

export interface Transactions extends Event {
  id: number;
  qty: number;
  total: number;
  status: string;
}
