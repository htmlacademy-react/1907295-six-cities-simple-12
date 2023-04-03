import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {placesCard} from './mocks/offers';
import {reviewCard} from './mocks/review';

const Setting = {
  PlacesCount: 312,
  PlacesCard: placesCard,
  ReviewCard: reviewCard,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PlacesCount}
      placesCard={Setting.PlacesCard}
      reviewCard={Setting.ReviewCard}
    />
  </React.StrictMode>,
);
