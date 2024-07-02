import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Jop } from '../interfaces/Jop';

@Injectable({
  providedIn: 'root'
})
export class JopsService {

  private apiUrl = 'https://api-next.jobsglobal.com:54902/api/v1/jobs/all';

  constructor(private http: HttpClient) { }

  getJops(page: number): Observable<{jops: Jop[], lastPage: number}> { // Jop[]
    // return of({jops: this.res.data, lastPage: this.res.meta.last_page})
    return this.http.get<{data: Jop[], meta: any}>(this.apiUrl, {params: {
      pagination_type: 'paginate',
      page,
      per_page: 20
    }}).pipe(map(({data, meta}) => ({jops: data, lastPage: meta.last_page})))
  }
}
