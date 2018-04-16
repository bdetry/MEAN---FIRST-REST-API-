import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { NainModel } from './nainModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};


@Component({
  selector: 'app-publish-nain',
  templateUrl: './publish-nain.component.html',
  styleUrls: ['./publish-nain.component.css']
})
export class PublishNainComponent implements OnInit {
  constructor(  private http: HttpClient ) { }
  ngOnInit() { }


  encode_url(name , grp_fk , grp_ville)
  {

    var NewNain = "name=" + encodeURIComponent(name) +  "&grp_fk=" + encodeURIComponent(grp_fk) +  "&grp_ville=" + encodeURIComponent(grp_ville)  ;

    this.add(NewNain);
  }

  add( Nain ) : Observable<NainModel> {

    console.log(Nain);
     
    this.http.post<NainModel>('http://localhost:8080/nain/' , Nain , httpOptions).subscribe();

      return Nain;
  } 

}
 