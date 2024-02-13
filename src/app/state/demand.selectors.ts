import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDemand from './demand.reducer';

export const selectDemandState = createFeatureSelector<fromDemand.State>(
  fromDemand.demandFeatureKey
);

export const selectTasks = createSelector(
  selectDemandState,
  (state) => state.tasks
);

