import { LoginComponent } from './login/login.component';
import { AqiComponent } from './aqi/aqi.component';
import { NewsComponent } from './news/news.component';
import { CovidTrackerComponent } from './covid-tracker/covid-tracker.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component : LoginComponent},
  { path: 'login', component : LoginComponent},
  { path: "register",component : EmployeeListComponent},
  { path: "about",component : AboutComponent},
  { path: "contact",component : ContactComponent},
  { path: "covidTracker",component : CovidTrackerComponent},
  { path: "news",component : NewsComponent},
  { path: "aqi",component : AqiComponent},
  { path: '**', component : PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent,AboutComponent,ContactComponent,PagenotfoundComponent]
