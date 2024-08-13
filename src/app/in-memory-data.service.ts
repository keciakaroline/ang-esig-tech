import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Tarefa } from './Tarefa';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tarefas: Tarefa[] = [
      {
        id: 1,
        title: 'Adjust concentrates to behaviour and structure',
        prioridade: 'Alta',
        projeto: 'Gateway of Pacific',
        status: 'Concluido',
        responsavel: 'Miles, Esther',
        deadline: 'Wed 11 Aug',
        detalhes: 'Task 1 details',
      },
      {
        id: 2,
        title: 'Initiation/Planning Activities Completed',
        prioridade: 'Média',
        projeto: 'Renoir Hotel',
        status: 'Concluido',
        responsavel: 'Miles, Esther',
        deadline: 'Wed 11 Aug',
        detalhes: 'Task 2 details',
      },
      {
        id: 3,
        title: 'Requirements Analysis Completed',
        prioridade: 'Baixa',
        projeto: 'Grand Hyatt Union',
        status: 'Concluido',
        responsavel: 'Miles, Esther',
        deadline: 'Wed 11 Aug',
        detalhes: 'Task 3 details',
      },
      {
        id: 4,
        title: 'Security Planning',
        prioridade: 'Alta',
        projeto: '801 Brannan',
        status: 'Concluido',
        responsavel: 'Miles, Esther',
        deadline: 'Wed 11 Aug',
        detalhes: 'Task 3 details',
      },
    ];
    return { tarefas };
  }

  genId(tarefas: Tarefa[]): number {
    return tarefas.length > 0
      ? Math.max(...tarefas.map((tarefa) => tarefa.id)) + 1
      : 1;
  }
}
