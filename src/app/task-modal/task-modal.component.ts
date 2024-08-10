import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendarAlt,
  faSearch,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Tarefa } from '../Tarefa';
import { TAREFAS } from '../mock-tarefas';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent {
  @Output() modalClosed = new EventEmitter<void>();

  faTimesCircle = faTimesCircle;
  faCalendarAlt = faCalendarAlt;
  faSearch = faSearch;

  tarefas: Tarefa[] = TAREFAS;
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

  addNewTarefa(): void {
    if (this.newTarefa.title) {
      const newId = this.tarefas.length + 1;
      this.tarefas.push({ ...this.newTarefa, id: newId });
      this.newTarefa = {
        id: 0,
        title: '',
        prioridade: '',
        projeto: '',
        status: '',
        responsavel: '',
        deadline: '',
        detalhes: '',
      };
    }
  }

  closeModal(): void {
    this.modalClosed.emit();
  }

  saveTask(): void {
    this.addNewTarefa();
    this.closeModal();
  }
}
