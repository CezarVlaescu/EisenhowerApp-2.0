import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TRegisterUserInput } from '../../types/SharedTypes';
import { catchError, Observable, throwError } from 'rxjs';

const api = "https://localhost:7048/api/User";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http : HttpClient) { }

  public registerUser(registerInput: TRegisterUserInput) : Observable<TRegisterUserInput> {
    return this.http.post<TRegisterUserInput>(`${api}`, registerInput, 
      { headers: { 'Content-Type': 'application/json'}}
    ).pipe(catchError((err) => {
      console.error(err);
      return throwError(() => new Error("Error creating user"));
    }));
  }
}
