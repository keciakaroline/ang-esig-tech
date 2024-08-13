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

  getAbbreviatedStatus(status: string = '', maxLength: number = 5): string {
    return status.length > maxLength
      ? status.slice(0, maxLength) + '...'
      : status;
  }

  getPrioridadeColor(status: string = ''): string {
    switch (status.toLowerCase()) {
      case 'alta':
        return '#ff1414';
      case 'média':
        return '#ffa16c';
      case 'baixa':
        return '#14b9ff';
      default:
        return '#6c757d';
    }
  }
}
