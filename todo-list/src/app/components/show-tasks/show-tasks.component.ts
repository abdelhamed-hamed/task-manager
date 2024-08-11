import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { NgClass, NgIf, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'mm-show-tasks',
  standalone: true,
  imports: [TitleCasePipe, NgIf, NgClass],
  templateUrl: './show-tasks.component.html',
  styleUrl: './show-tasks.component.scss',
})
export class ShowTasksComponent implements AfterViewInit {
  @ViewChild('noTask') noTask!: ElementRef;
  tasks: Array<Task>;
  constructor(private route: Router, private task: TaskServiceService) {
    this.tasks = this.task.allTask;
  }

  // Delete Componant From Page
  deletTask(index: number) {
    this.task.allTask.splice(index, 1);
    if (this.task.allTask.length == 0) {
      localStorage.removeItem('tasks');
    } else {
      localStorage.setItem('tasks', JSON.stringify(this.task.allTask));
    }
  }

  editTAsk(index: number) {
    this.route.navigate(['/editTask'], {
      queryParams: {
        task: index,
      },
    });
  }

  // Check If There is Task Or No
  ngAfterViewInit() {
    // let tasks = this.task.allTask;
    // const element = this.noTask.nativeElement;
    // if (!tasks) {
    //   element.style.display = 'block';
    // } else {
    //   element.style.display = 'none';
    // }
  }
}
