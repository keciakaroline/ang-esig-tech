import { Component, Input } from '@angular/core';
import { Tarefa } from '../Tarefa';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TAREFAS } from '../mock-tarefas';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlusSquare,
  faCalendarAlt,
  faEye,
  faTrash,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';

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
    TaskModalComponent,
  ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  faPlusSquare = faPlusSquare;
  faCalendarAlt = faCalendarAlt;
  faEye = faEye;
  faTrash = faTrash;
  faPenSquare = faPenSquare;

  tarefas: Tarefa[] = TAREFAS;
  showModal: boolean = false;

  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
