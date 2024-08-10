import { Component } from '@angular/core';
import { Tarefa } from '../Tarefa';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TAREFAS } from '../mock-tarefas';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusSquare, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf,
    FontAwesomeModule,
    TaskItemComponent,
    TaskModalComponent,
  ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  faPlusSquare = faPlusSquare;
  faCalendarAlt = faCalendarAlt;

  tarefas: Tarefa[] = TAREFAS;
  showModal: boolean = false;

  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
