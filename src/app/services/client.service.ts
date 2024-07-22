import { Injectable } from '@angular/core';
import {API_ENDPOINTS} from './api-endpoints'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url:string = API_ENDPOINTS.BACKEND_URL;

  constructor(private http:HttpClient) { }
}
