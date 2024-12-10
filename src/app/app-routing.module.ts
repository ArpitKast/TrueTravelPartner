import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
     // {
     //      path: 'home',
     //      loadChildren: () =>
     //        import('./home/home.module').then((m) => m.HomePageModule),
     //    },
     //    {
     //      path: '',
     //      redirectTo: 'home',
     //      pathMatch: 'full',
     //    },
     { path: 'home', component: HomeComponent },
     { path: 'destination/:id', component: DestinationDetailsComponent },
     { path: '', redirectTo: '/home', pathMatch: 'full' },
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
