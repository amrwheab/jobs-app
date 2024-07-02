import { createAction, props } from '@ngrx/store';
import { Jop } from '../../interfaces/Jop';

export const getJops = createAction('[Jops] get jops', props<{page: number}>());
export const getJopsSuccess = createAction('[Jops] get jops success', props<{jops: Jop[], lastPage: number}>());
export const getJopsFail = createAction('[Jops] get jops fail', props<{error: string}>());

export const filterJops = createAction('[Jops] filter jops', props<{title: string, location: string}>());
export const applyForAJop = createAction('[Jops] apply for a jop', props<{id: string}>());
