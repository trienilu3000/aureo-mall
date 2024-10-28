import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models/user/auth.models';
@Injectable({
  providedIn: 'root'
})
export class MyInfoService {
  private url: string;
  constructor(private http: HttpClient) {
    if (isDevMode) {
      this.url = environment.apiKey;
    } else {
      this.url = environment.apiKey;
    }
  }

  getMyInfo(): Observable<any> {
    return this.http.get<UserInfo>(`${this.url}/users/myinfo`);
  }

  getMyAddress():Observable<any>{
    return this.http.get<UserInfo>(`${this.url}/address`)
  }
}
