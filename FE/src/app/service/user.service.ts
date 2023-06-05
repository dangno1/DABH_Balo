import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8088/api/showUser')
  }

  getUserByEmail(user: any): Observable<any[]>{
    return this.http.post<any[]>('http://localhost:8088/api/getUserByEmail',user)
  }

  signIn(user: any): Observable<any[]>{
    return this.http.post<any[]>('http://localhost:8088/api/signIn', user)
  }

  signUp(user: any): Observable<any[]>{
    return this.http.post<any[]>('http://localhost:8088/api/signUp', user)
  }

}
