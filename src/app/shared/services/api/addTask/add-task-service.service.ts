import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TTask } from 'src/app/shared/types/SharedTypes';

const api = "https:localhost:3000/api";

@Injectable({
  providedIn: 'root'
})
export class AddTaskServiceService {

  constructor(private http : HttpClient) { }
  
  public createTaskAsync(task: TTask): Observable<TTask> {
    return this.http.post<TTask>(`${api}/route`, task, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error creating task"));
    }))
  }


}
