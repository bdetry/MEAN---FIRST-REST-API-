import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { GroupeComponent }      from './groupe/groupe.component';
import { NainComponent }      from './nain/nain.component';
import { VilleComponent }      from './ville/ville.component';
import { PublishNainComponent }      from './publish-nain/publish-nain.component';
import { PublishGroupeComponent }      from './publish-groupe/publish-groupe.component';
import { PublishVilleComponent }      from './publish-ville/publish-ville.component';

import { NainDetaillesComponent }      from './nain-detailles/nain-detailles.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'groupe', component: GroupeComponent },
  { path: 'nain', component: NainComponent ,
      children: [
        { path: 'new', component: PublishNainComponent },
        {path : ':id' , component : NainDetaillesComponent}
      ]},
  { path: 'ville', component: VilleComponent },
  { path: 'ville/new', component: PublishVilleComponent },
  { path: 'groupe/new', component: PublishGroupeComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
