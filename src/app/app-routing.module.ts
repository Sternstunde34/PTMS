import { NgModule } from '@angular/core';
import { RouteReuseStrategy,RouterModule, Routes } from '@angular/router';
import { RouterStrategy } from './routeStrategy';

import { AppComponent } from './app.component';



const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes
    //, {onSameUrlNavigation: 'reload'}
    )],
  exports: [RouterModule],
  providers:[
    {provide:RouteReuseStrategy,useClass:RouterStrategy}
  ]
})
export class AppRoutingModule { }
