import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../Tarefa';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlusSquare,
  faCalendarAlt,
  faEye,
  faTrash,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { DataServiceService } from '../data-service.service';

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
export class TaskComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  faCalendarAlt = faCalendarAlt;
  faEye = faEye;
  faTrash = faTrash;
  faPenSquare = faPenSquare;

  tarefas: Tarefa[] = [];
  showModal: boolean = false;

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas(): void {
    this.dataService
      .getTarefas()
      .subscribe((tarefas) => (this.tarefas = tarefas));
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  onModalClosed(): void {
    this.showModal = false;
  }
}
