import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  taskAdded = {} as Task;
  allTask: Array<Task>;
  id: number = Date.now();

  constructor(private route: Router) {
    if (localStorage.getItem('tasks') == null) {
      this.allTask = [];
    } else {
      this.allTask = JSON.parse(localStorage.getItem('tasks')!);
    }
  }

  // AddTask To Local Storage
  addedTask(id: number, title: string, discription: string) {
    this.taskAdded = {
      id: id,
      title: title,
      discription: discription,
    };
  }

  // Storage Value
  storeageValue() {
    this.allTask.push(this.taskAdded);
    localStorage.setItem('tasks', JSON.stringify(this.allTask));
  }

  // // Back To All Tasks
  backAllTasks() {
    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 1500);
  }
}
