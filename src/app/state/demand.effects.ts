import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { DemandActions } from './demand.actions';
import { DemandsService } from '../services/demands.service';


@Injectable()
export class DemandEffects {

  loadDemands$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DemandActions.loadDemands),
      concatMap(() =>
        this.service.getTasks().pipe(
          map(data => DemandActions.loadDemandsSuccess({ data })),
          catchError(error => of(DemandActions.loadDemandsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private service: DemandsService) {}
}
