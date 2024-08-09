import { Component } from '@angular/core';
import { Tarefa } from '../Tarefa';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TAREFAS } from '../mock-tarefas';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { TaskItemComponent } from '../task-item/task-item.component';

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
  ],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  faPlusSquare = faPlusSquare;

  tarefas: Tarefa[] = TAREFAS;

  newTarefa: Tarefa = {
    id: 0,
    name: '',
    prioridade: '',
    projeto: '',
    status: '',
    responsavel: '',
    deadline: '',
  };

  addNewTarefa(): void {
    if (this.newTarefa.name) {
      const newId = this.tarefas.length + 1;
      this.tarefas.push({ ...this.newTarefa, id: newId });
      this.newTarefa = {
        id: 0,
        name: '',
        prioridade: '',
        projeto: '',
        status: '',
        responsavel: '',
        deadline: '',
      };
    }
  }
}
