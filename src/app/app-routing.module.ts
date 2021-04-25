import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaysComponent } from './days/days.component';
import { ActivityComponent } from './activity/activity.component';




const routes: Routes = [
  {path: '', redirectTo:"/days", pathMatch:'full' },
  { path: 'days', component: DaysComponent },
  { path: 'activity', component: ActivityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
