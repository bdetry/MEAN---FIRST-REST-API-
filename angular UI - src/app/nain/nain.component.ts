import { Component, OnInit , Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NainService , Nain } from '../nain.service';

import {NainDetaillesComponent} from '../nain-detailles/nain-detailles.component';


@Component({
  selector: 'app-nain',
  templateUrl: './nain.component.html',
  styleUrls: ['./nain.component.css']
})
export class NainComponent  implements OnInit  {


  @Input() nains = [];
  private error;

  constructor(  
               private nainService : NainService ) {   }

  ngOnInit() {
    this.showNains();
    
  }

  showNains() { 
    this.nainService.getAll()
      .subscribe(data => this.setNains(data),
         error => this.error = error  );
  }

  setNains(nains_from_server){
    let count = 0;
    for(let nain of nains_from_server){     
      this.nains[count] = nain;
      count++;
    }

    this.nainService.setAll(this.nains);

    
  }

}
