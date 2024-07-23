import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {API_ENDPOINTS} from './api-endpoints'
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url:string = API_ENDPOINTS.BACKEND_URL;

  constructor(private http:HttpClient) { }

  selectClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }

  registerClient(clientData:Client):Observable<Client>{
    return this.http.post<Client>(this.url, clientData);
  }
}
