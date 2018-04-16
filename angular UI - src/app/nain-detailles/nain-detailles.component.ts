import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NainService , Nain } from '../nain.service';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};
@Component({
  selector: 'app-nain-detailles',
  templateUrl: './nain-detailles.component.html',
  styleUrls: ['./nain-detailles.component.css']
})
export class NainDetaillesComponent  implements OnInit  {

  
  private nain;


  constructor( private route: ActivatedRoute ,
               private nainService : NainService ,
               private http: HttpClient  ) {   }

  ngOnInit() {
    this.suscribeUrl();
  }

  suscribeUrl(){
    this.route.params.subscribe(params => {
      this.nain = this.getOne(params.id);
      
  });
  
  }

  getOne(params)
  {
    let nain = this.nainService.getOne(params);
    nain.subscribe( nain => {this.nain = nain} );
  }

  encode_url_for_update(name , id)
  {
    let url = "newName="+name+"&_id="+id;
   
    this.update(url);
  }

  update(url)
  {
    console.log(url);

    this.http.put<Nain>('http://localhost:8080/nain/' , url , httpOptions).subscribe();
  }

  delete(id)
  {
    console.log(id);
    this.http.delete<Nain>('http://localhost:8080/nain/' + id  , httpOptions).subscribe();
  }
}
