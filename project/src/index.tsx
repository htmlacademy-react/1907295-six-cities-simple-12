import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {store} from './store/index';

const Setting = {
  PlacesCard: offers,
  PlacesReview: reviews,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placesCard={Setting.PlacesCard}
        placesReview={Setting.PlacesReview}
      />
    </Provider>
  </React.StrictMode>,
);
