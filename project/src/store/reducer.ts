import {createReducer} from '@reduxjs/toolkit';
import {choiceCity, choiceOffers, filterOffers} from './action';
import {Offer} from '../types/offers';
import {CITIES, FILTER} from '../components/const';
import {offers} from '../mocks/offers';

type initialStateType = {
  city: string;
  option: string;
  offers: Offer[];
}

const initialState: initialStateType = {
  city: CITIES[0],
  option: FILTER[0],
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(choiceCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(filterOffers, (state, action) => {
      state.option = action.payload;
      switch (state.option) {
        case FILTER[0]:
          state.offers = offers.filter((offer) => offer.city.name === state.city);
          break;
        case FILTER[1]:
          state.offers = [...offers].sort((min, max) => min.price - max.price);
          break;
        case FILTER[2]:
          state.offers = [...offers].sort((min, max) => max.price - min.price);
          break;
        case FILTER[3]:
          state.offers = [...offers].sort((min, max) => max.rating - min.rating);
          break;
      }
    })
    .addCase(choiceOffers, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.city);
    });
});
