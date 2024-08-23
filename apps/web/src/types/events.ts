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
  updatedAt: Date;
  user: { name: string };
}
