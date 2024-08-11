import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'tasks', component: TaskComponent },
  { path: 'dashboard', component: DashboardComponent },
];
