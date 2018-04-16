import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NainComponent } from './nain/nain.component';
import { VilleComponent } from './ville/ville.component';
import { GroupeComponent } from './groupe/groupe.component';
import { MenuComponent } from './menu/menu.component';
import { PublishNainComponent } from './publish-nain/publish-nain.component';
import { PublishGroupeComponent } from './publish-groupe/publish-groupe.component';
import { PublishVilleComponent } from './publish-ville/publish-ville.component';
import { NainService } from './nain.service';
import { GroupeService } from './groupe.service';
import { VilleService } from './ville.service';
import { NainDetaillesComponent } from './nain-detailles/nain-detailles.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NainComponent,
    VilleComponent,
    GroupeComponent,
    MenuComponent,
    PublishNainComponent,
    PublishGroupeComponent,
    PublishVilleComponent,
    NainDetaillesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [NainService, GroupeService, VilleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
