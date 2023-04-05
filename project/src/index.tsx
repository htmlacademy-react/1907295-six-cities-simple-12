import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  PlacesCount: 312,
  PlacesCard: offers,
  PlacesReview: reviews,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PlacesCount}
      placesCard={Setting.PlacesCard}
      placesReview={Setting.PlacesReview}
    />
  </React.StrictMode>,
);
