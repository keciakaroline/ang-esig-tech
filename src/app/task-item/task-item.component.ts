import { Component, Input } from '@angular/core';
import { Tarefa } from '../Tarefa';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faTrash, faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  faEye = faEye;
  faTrash = faTrash;
  faPenSquare = faPenSquare;

  @Input() tarefa!: Tarefa;
}
