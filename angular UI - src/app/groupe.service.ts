import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Groupe {
  _id: number;
  name: string;   
  __v : number;
}

@Injectable()
export class GroupeService {  
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:8080/groupe/';

  getAll() {
    return this.http.get<Groupe>(this.configUrl);
  }
} 