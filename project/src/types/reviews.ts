import {Host} from './offers';

export type Review = {
  id: number;
  user: Host;
  rating: number;
  date: string;
  text: string;
};

export type Reviews = Review[];
