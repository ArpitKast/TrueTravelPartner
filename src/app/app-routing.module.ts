import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
     {
          path: '',
          component: HomeComponent, // Set HomeComponent directly to the root path
        },
        {
          path: 'destination/:id',
          component: DestinationDetailsComponent,
        },
        {
          path: '**', // Wildcard route for a 404 page if needed
          redirectTo: '', // Redirect to the home page or another component
          pathMatch: 'full',
        },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
     useHash: false,
     anchorScrolling: 'enabled', // Enable anchor scrolling
     scrollPositionRestoration: 'enabled', // Scroll to top on navigation
   }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
