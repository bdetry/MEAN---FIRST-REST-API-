import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Ville } from './villeModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

@Component({
  selector: 'app-publish-ville',
  templateUrl: './publish-ville.component.html',
  styleUrls: ['./publish-ville.component.css']
})
export class PublishVilleComponent implements OnInit {

  constructor(  private http: HttpClient ) { }

  ngOnInit() {
  }

  encode_url(name )
  {

    var NewVille = "name=" + encodeURIComponent(name)  ;

    this.add(NewVille);
  }

  add( Ville ) : Observable<Ville> {

    console.log(Ville);
     
    this.http.post<Ville>('http://localhost:8080/ville/' , Ville , httpOptions).subscribe();

      return Ville;
  } 

}
