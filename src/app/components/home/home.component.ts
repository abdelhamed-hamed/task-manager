import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ShowTasksComponent } from '../show-tasks/show-tasks.component';
@Component({
  selector: 'mm-home',
  standalone: true,
  imports: [TitleCasePipe, RouterOutlet, ShowTasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private route: Router) {}
  addTask() {
    this.route.navigate(['addTask']);
  }
}
