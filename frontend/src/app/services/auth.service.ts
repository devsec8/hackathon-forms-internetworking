import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { filter, map, mergeMap, toArray } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from '../interfaces/credentials.interface';

@Injectable()
export default class AuthService {
  constructor(private http: HttpClient) { }

  getCredentialsByUsername = (username: string): Observable<Credentials> => {
    const api = 'https://c36f1db5-5fd9-4866-80c8-98182aa009de.mock.pstmn.io/form-internetworking/login?username=' + username;
    const cred = this.http.get<Credentials>
      (api).pipe();
    return cred;
  }
}
