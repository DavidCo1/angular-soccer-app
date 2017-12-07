import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about/:id',
    
    component:AboutComponent
  },
  {
    path:'player/:id',
    
    component:PlayerComponent
  },
  {
    path:'team/:id',
    
    component:TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
