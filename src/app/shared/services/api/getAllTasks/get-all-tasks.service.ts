import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TTask } from '../../types/SharedTypes';

const api = "http://localhost:3000/api"

@Injectable({
  providedIn: 'root'
})

export class GetAllTasksService {

  constructor(private http : HttpClient) { }

  public getAllTasksAsync() : Observable<TTask[]> {
    return this.http.get<TTask[]>(`${api}/tasks`)
    .pipe(
      catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error creating task"));
    }))
  }
}
