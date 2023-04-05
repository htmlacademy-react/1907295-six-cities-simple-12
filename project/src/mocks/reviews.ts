import {Reviews} from '../types/reviews';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina'
    },
    rating: 4,
    date: 'April 2019',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    id: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Maxim'
    },
    rating: 5,
    date: 'April 2019',
    text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  }
];
