import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TarefasComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EsigGROUP';
}
