import {createAction} from '@reduxjs/toolkit';

export const choiceCity = createAction<string>('main/choiceCity');
export const choiceOffers = createAction('main/choiceOffers');
export const resetOffers = createAction('main/resetOffers');
export const filterOffers = createAction<string>('main/filterOffers');
