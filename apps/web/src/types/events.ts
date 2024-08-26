export interface Event {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  content: string;
  location: string;
  price: number;
  start_date: string;
  end_date: string;
  createdAt: Date;
  qty: number;
  booked: number;
  quota: number;
  updatedAt: Date;
  user: { name: string };
}
