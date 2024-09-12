import { TitleCasePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskServiceService } from '../../services/task-service.service';
@Component({
  selector: 'mm-edit-tasks',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './edit-tasks.component.html',
  styleUrl: './edit-tasks.component.scss',
})
export class EditTasksComponent implements AfterViewInit {
  @ViewChild('description') description!: ElementRef;
  @ViewChild('title') title!: ElementRef;
  elementId!: number;
  constructor(
    private route: ActivatedRoute,
    private task: TaskServiceService
  ) {}
  ngAfterViewInit(): void {
    this.route.queryParamMap.subscribe(
      (parms) => (this.elementId = parseInt(parms.get('task')!))
    );
    this.title.nativeElement.value =
      this.task.allTask[this.elementId - 1].title;
    this.description.nativeElement.value =
      this.task.allTask[this.elementId - 1].discription;
  }
  editElement() {
    if (this.title.nativeElement.value.trim() == '') {
      this.task.allTask[this.elementId - 1].title = 'No Title';
    } else {
      this.task.allTask[this.elementId - 1].title =
        this.title.nativeElement.value;
    }
    this.task.allTask[this.elementId - 1].discription =
      this.description.nativeElement.value;
  }
}
