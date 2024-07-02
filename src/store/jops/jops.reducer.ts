import { createReducer, on } from "@ngrx/store";
import { JopsState, initialState } from "./jops.state";
import { applyForAJop, filterJops, getJopsFail, getJopsSuccess } from "./jops.actions";
import { Jop } from "../../interfaces/Jop";

export const jopsReducer = createReducer(
  initialState,
  on(getJopsSuccess, (state: JopsState, action) => {
    const newState = {...state};
    newState.jops = [...action.jops];
    newState.filteredJops = newState.jops.filter(data => (data.title || '').includes(state.filterQuery.title) && (data.location || '').includes(state.filterQuery.location));
    newState.loading = false;
    newState.error = null;
    newState.lastPage = action.lastPage;
    return newState;
  }),
  on(getJopsFail, (state: JopsState, action) => {
    const newState = {...state};
    newState.error = action.error;
    newState.loading = false;
    return newState;
  }),
  on(filterJops, (state: JopsState, action) => {
    const newState = {...state};
    const newFilterQuery = {...state.filterQuery};
    newFilterQuery.title = action.title;
    newFilterQuery.location = action.location;
    newState.filterQuery = newFilterQuery;
    newState.filteredJops = newState.jops.filter(data => (data.title || '').includes(newState.filterQuery.title) && (data.location || '').includes(newState.filterQuery.location));
    return newState;
  }),
  on(applyForAJop, (state: JopsState, action) => {
    const newState = JSON.parse(JSON.stringify({...state}));
    const jops = [...newState.jops];
    const jopIndex = jops.findIndex(d => d.id === action.id);
    if (jopIndex > -1) {
      jops[jopIndex].applied = !jops[jopIndex].applied;
    }
    newState.jops = jops;
    newState.filteredJops = newState.jops.filter((data: Jop) => (data.title || '').includes(newState.filterQuery.title) && (data.location || '').includes(newState.filterQuery.location));
    return newState;
  }),
);
