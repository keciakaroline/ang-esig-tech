import { Component } from '@angular/core';
import { Tarefa } from '../Tarefa';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TAREFAS } from '../mock-tarefas';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})
export class TarefasComponent {
  selectedTarefa?: Tarefa;
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

  onSelect(tarefa: Tarefa): void {
    this.selectedTarefa = tarefa;
  }

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
