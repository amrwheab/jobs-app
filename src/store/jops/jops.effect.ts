import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getJops, getJopsFail, getJopsSuccess } from './jops.actions';
import { JopsService } from '../../services/jops.service';

@Injectable()
export class JopsEffects {
  constructor(private actions$: Actions, private jopsService: JopsService) {}

  getJops$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getJops),
      mergeMap((action) =>
        this.jopsService.getJops(action.page).pipe(
          map(({jops, lastPage}) => getJopsSuccess({jops, lastPage})),
          catchError(error => of(getJopsFail({ error })))
        )
      )
    )
  );

}
