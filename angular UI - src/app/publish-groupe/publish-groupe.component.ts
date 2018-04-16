import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Groupe } from './groupeModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};


@Component({
  selector: 'app-publish-groupe',
  templateUrl: './publish-groupe.component.html',
  styleUrls: ['./publish-groupe.component.css']
})
export class PublishGroupeComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

  encode_url(name)
  {

    var NewGroupe = "name=" + encodeURIComponent(name) ;

    this.add(NewGroupe);
  }

  add( Groupe ) : Observable<Groupe> {
    this.http.post<Groupe>('http://localhost:8080/groupe/' , Groupe , httpOptions).subscribe();

      return Groupe;   
  } 
}
