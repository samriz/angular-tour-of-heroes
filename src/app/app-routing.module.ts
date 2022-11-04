import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//tell the Router which view to display when a user clicks a link or pastes a URL into the browser address bar
//path: string that matches the URL in the browser address bar
//component: component that the router should create when navigating to this route
const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];

//@NgModule metadata initializes the router and starts it listening for browser location changes
@NgModule({
  //adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot()
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //AppRoutingModule exports RouterModule to be available throughout the application
})
export class AppRoutingModule { }
