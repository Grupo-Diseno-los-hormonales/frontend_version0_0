import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private userTypeSource: BehaviorSubject<'endocrinologist' | 'patient' | null>;

  userType$;

  constructor() {
    const savedType = localStorage.getItem('userType') as 'endocrinologist' | 'patient' | null;
    this.userTypeSource = new BehaviorSubject<'endocrinologist' | 'patient' | null>(savedType);
    this.userType$ = this.userTypeSource.asObservable();
  }

  setUserType(type: 'endocrinologist' | 'patient') {
    localStorage.setItem('userType', type);
    this.userTypeSource.next(type);
  }
}
