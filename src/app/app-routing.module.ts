import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SearchComponent} from './search.component';
import {AboutComponent} from './about.component';


const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
