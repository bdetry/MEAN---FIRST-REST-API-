import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Nain {
  grp_fk: number;
  grp_ville: number;  
  name: string;   
  __v : number;
  _id: string;
}

@Injectable()
export class NainService {

  private all_nains;

  constructor(private http: HttpClient) { }


  getAll() {
    return this.http.get<Nain>('http://localhost:8080/nain/');
  }

  setAll(data)
  {
    this.all_nains = data;
  }

  getAllFomServiceProp()
  {
    return this.all_nains;
  }

  getOne(id)
  {
    return this.http.get<Nain>('http://localhost:8080/nain/'+id);
  }

  
} 