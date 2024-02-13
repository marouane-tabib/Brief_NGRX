import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Demand } from './demand.interface';

export const DemandActions = createActionGroup({
  source: 'Demand',
  events: {
    'Load Demands': emptyProps(),
    'Load Demands Success': props<{ data: Demand[] }>(),
    'Load Demands Failure': props<{ error: any }>(),
  }
});
