export interface Event {
  id: number;
  name: string;
  thumbnail: string;
  location: string;
  start_date: string;
  end_date: string;
  createdAt: Date;
  updatedAt: Date;
  user: { name: string };
}
