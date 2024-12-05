import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private http: HttpClient) {}

  private readonly AUTH_KEY = 'authData';

  setAuthData(authData:any):void
  {
    localStorage.setItem(this.AUTH_KEY, JSON.stringify(authData));
  }

  getAuthData():any|null
  {
    const authData = localStorage.getItem(this.AUTH_KEY);
    return authData ? JSON.parse(authData) : null;
  }

  
  clearAuthData():void {
    localStorage.removeItem(this.AUTH_KEY);
  }
  
  logOut()
  {
    localStorage.removeItem('user');

    sessionStorage.clear();


  }

  

  geUserRole():string| null
  {
    const authData = this.getAuthData();
    return authData?.user?.role || null;
  }

  getUserId(): number| null
  {
    const authData = this.getAuthData();
    return authData?.user?.id || null;
  }
}
