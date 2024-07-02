import { Jop } from "../../interfaces/Jop";

export interface JopsState {
  filteredJops: Jop[];
  filterQuery: {
    title: string,
    location: string,
  };
  jops: Jop[];
  error: any;
  loading: boolean;
  lastPage: number
}

export const initialState: JopsState = {
  filteredJops: [],
  filterQuery: {
    title: '',
    location: '',
  },
  jops: [],
  error: null,
  loading: true,
  lastPage: 0
};
