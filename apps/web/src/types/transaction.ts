import { Event } from './events';

export interface Transactions {
  id: number;
  qty: number;
  total: number;
  status: string;
  event: Event;
}
