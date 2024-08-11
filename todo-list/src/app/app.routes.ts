import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EditTasksComponent } from './components/edit-tasks/edit-tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addTask', component: AddTasksComponent },
  { path: 'editTask', component: EditTasksComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
];
