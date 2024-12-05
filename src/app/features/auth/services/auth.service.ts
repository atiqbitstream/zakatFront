import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../../shared/services/token.service';
import { LoginRequest } from '../interfaces/loginRequest.interface';
import { LoginReponse } from '../interfaces/loginResponse.interface';
import { ERole } from '../../../shared/enums/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService:TokenService) {}

  loginUser(newUserLogin:LoginRequest):Observable<LoginReponse> {
    return this.http.post<LoginReponse>(`${environment.hackUrl}/auth/login`,newUserLogin).pipe(
      tap(response=>{
         this.tokenService.setAuthData(response);
      })
    );
  }




  getUserIdFromLocalStorage():number|null
{
  const authData = localStorage.getItem('authData');
  if (authData) {
    const parsedData = JSON.parse(authData);
    return parsedData.user?.id || null; // Return the user id if present
  }
  return null;
}

getUserRole():ERole
    {
       const storedData = localStorage.getItem('authData');

       let userRole:ERole=ERole.DEFAULT;

       if(storedData)
       {
        const parsedData = JSON.parse(storedData);
        if(parsedData.user && parsedData.user.role){
        userRole= parsedData.user.role;
        }
        
       }

      return userRole;
       
    }
}
