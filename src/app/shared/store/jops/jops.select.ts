import { createSelector, createFeatureSelector } from '@ngrx/store';
import { JopsState } from './jops.state';

export const selectJopsState = createFeatureSelector<JopsState>('jopsState');

export const selectAllJops = createSelector(
  selectJopsState,
  (state: JopsState) => state.jops
);

export const selectJopsError = createSelector(
  selectJopsState,
  (state: JopsState) => state.error
);
