import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlusSquare,
  faCalendarAlt,
  faSpinner,
  faTerminal,
  faCheckSquare,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ModalServiceService } from '../modal-service.service';
import { TaskModalComponent } from '../task-modal/task-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TaskModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  faCalendarAlt = faCalendarAlt;
  faSpinner = faSpinner;
  faTerminal = faTerminal;
  faCheckSquare = faCheckSquare;
  faCircle = faCircle;

  userName = 'Kécia'; //hard-coded

  todoCount = 4; //hard-coded
  doingCount = 2; //hard-coded
  doneCount = 64; //hard-coded
  delayedCount = 1; //hard-coded

  showModal$ = this.modalService.isVisible$;

  constructor(private modalService: ModalServiceService) {}

  ngOnInit(): void {
    this.initializeChart();
  }

  toggleModal(): void {
    this.modalService.toggleModal();
  }

  onModalClosed(): void {
    this.modalService.closeModal();
  }

  initializeChart(): void {
    if (typeof document !== 'undefined') {
      Chart.register(...registerables);
      const ctx = document.getElementById('tasksChart') as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            '01/06',
            '02/06',
            '03/06',
            '04/06',
            '05/06',
            '06/06',
            '07/06',
            '08/06',
            '09/06',
            '10/06',
            '11/06',
            '12/06',
            '13/06',
            '14/06',
            '15/06',
          ],
          datasets: [
            {
              label: 'Tarefas Concluídas',
              data: [1, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 3, 2],
              borderColor: '#4ad894',
              fill: false,
              tension: 0.5,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                display: true,
              },
              min: 0,
              max: 5,
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });
    }
  }
}
