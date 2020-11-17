import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksViewComponent } from './pages/tasks-view/tasks-view.component'

const routes: Routes = [
  {path:'', component: TasksViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
