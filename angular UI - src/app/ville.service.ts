import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Ville {
  _id: number;
  name: string;   
  __v : number;
}

@Injectable()
export class VilleService {  
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:8080/Ville/';

  getAll() {
    return this.http.get<Ville>(this.configUrl);
  }
}   