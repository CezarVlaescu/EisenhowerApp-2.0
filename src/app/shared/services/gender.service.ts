import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private genederSubject = new BehaviorSubject<string>('');
  gender$ = this.genederSubject.asObservable();

  setGender(gender: string) {
    this.genederSubject.next(gender);
  }
}

