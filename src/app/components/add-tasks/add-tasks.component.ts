import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Task } from '../../interfaces/task.interface';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'mm-add-tasks',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss',
})
export class AddTasksComponent {
  taskAdded = {} as Task;
  tasksStoreage!: Array<Task>;

  constructor(private router: Router, private taskServ: TaskServiceService) {}

  // Success Message
  showAlertAfterAdd(message: string, type: string) {
    const alertPlaceholder = document.getElementById('addedPlaceholder');

    const appendAlert = (message: any, type: any) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');

      alertPlaceholder!.append(wrapper);
    };

    const alertTrigger = document.getElementById('addedBtn');
    if (alertTrigger) {
      appendAlert(`${message}`, `${type}`);
    }
  }

  // Add Task
  addTask(title: any, description: any) {
    if (description.value.trim() != '') {
      // Show Message Your Task IS Addes
      if (title.value.trim() == '') {
        this.taskServ.addedTask(
          (this.taskServ.id = Date.now()),
          (title.value = 'No Title'),
          description.value
        );
      } else {
        this.taskServ.addedTask(
          (this.taskServ.id = Date.now()),
          title.value,
          description.value
        );
      }
      this.taskServ.storeageValue();
      this.taskServ.backAllTasks();
      this.showAlertAfterAdd('Nice, Your Task Is Added', 'success');
    } else {
      this.showAlertAfterAdd(
        'Sorry, Your Should Add Disciption To Add Task',
        'danger'
      );
    }
  }
}
