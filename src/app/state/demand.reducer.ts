import { createFeature, createReducer, on } from '@ngrx/store';
import { DemandActions } from './demand.actions';
import { Demand } from './demand.interface';

export const demandFeatureKey = 'demand';

export interface State {
  tasks: Demand[]
}

export const initialState: State = {
  tasks: []
};

export const reducer = createReducer(
  initialState,
  on(DemandActions.loadDemands, state => state),
  on(DemandActions.loadDemandsSuccess, (state, action) => ({
    ...state,
    tasks: action.data
  })),
  on(DemandActions.loadDemandsFailure, (state, action) => state),
);

