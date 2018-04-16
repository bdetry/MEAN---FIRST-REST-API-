import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router }          from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private url ;
  private home = "home";
  private nain = "nain";
  private groupe = "groupe";
  private ville = "ville";

  constructor(private location: Location , private router: Router) {
    this.setUrl();
  }

  ngOnInit() {
  }

  setUrl()
  {
    this.url =this.location.path().split("/")[1];
  }

  ChangeRoute()
  {
    this.setUrl();
  }

}
