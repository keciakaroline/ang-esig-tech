import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendarAlt,
  faSearch,
  faTimesCircle,
  faPlusSquare,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { Tarefa } from '../Tarefa';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent {
  @Output() modalClosed = new EventEmitter<void>();
  @Output() tarefaAdded = new EventEmitter<Tarefa>();

  faTimesCircle = faTimesCircle;
  faCalendarAlt = faCalendarAlt;
  faSearch = faSearch;
  faPlusSquare = faPlusSquare;
  faUpload = faUpload;

  newTarefa: Tarefa = {
    id: 0,
    title: '',
    prioridade: '',
    projeto: '',
    status: '',
    responsavel: '',
    deadline: '',
    detalhes: '',
  };

  constructor(private dataService: DataServiceService) {}

  addNewTarefa(): void {
    console.log('Add New task:');
  }

  closeModal(): void {
    this.modalClosed.emit();
  }

  saveTask(): void {
    this.addNewTarefa();
    this.closeModal();
  }
}
