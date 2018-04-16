import { Component, OnInit } from '@angular/core';
import { NainModel } from '../publish-nain/nainModel';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

import { NgForOf } from '@angular/common';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { NainService , Nain } from '../nain.service';
import { GroupeService , Groupe } from '../groupe.service';
import { VilleService , Ville } from '../ville.service';



  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private title = "Home";
  private nains = [];
  private groupes = [];
  private villes = [];
  private error : any;

  constructor(  private http: HttpClient ,
                private nainService : NainService ,
                private groupeService : GroupeService,
                private villeService : VilleService, 
              ) {

   }

  ngOnInit() {
      this.showNains();
      this.showGroupes();
      this.showVilles();
  }

  showNains() { 
    this.nainService.getAll()
      .subscribe(data => this.setNains(data)  ,
         error => this.error = error  );
  }

  setNains(nains_from_server){
    let count = 0;
    for(let nain of nains_from_server){     
      this.nains[count] = nain;
      count++;
    }

    console.log(this.nains);
  }

  showGroupes() { 
    this.groupeService.getAll()
      .subscribe(data => this.setGroupes(data)  ,
         error => this.error = error  );
  }

  setGroupes(groupe_from_server){
    let count = 0;
    for(let groupe of groupe_from_server){     
      this.groupes[count] = groupe;
      count++;
    }

    console.log(this.groupes);
  }

  showVilles() { 
    this.villeService.getAll()
      .subscribe(data => this.setVilles(data)  ,
         error => this.error = error  );
  }

  setVilles(villes_from_server){
    let count = 0;
    for(let ville of villes_from_server){     
      this.villes[count] = ville;
      count++;
    }

    console.log(this.villes);
  }
  
}
  