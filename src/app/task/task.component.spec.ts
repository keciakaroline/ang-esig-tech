import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { ModalServiceService } from '../modal-service.service';
import { of } from 'rxjs';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let dataService: DataServiceService;
  let modalService: ModalServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TaskComponent,
        HttpClientTestingModule,
        FormsModule,
        FontAwesomeModule,
      ],
      providers: [DataServiceService, ModalServiceService],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataServiceService);
    modalService = TestBed.inject(ModalServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTarefas with ngOnInit', () => {
    spyOn(component, 'getTarefas');
    component.ngOnInit();
    expect(component.getTarefas).toHaveBeenCalled();
  });

  it('should load tarefas from the data service', () => {
    const mockTarefas = [
      {
        id: 1,
        title: 'Task 1',
        prioridade: 'Alta',
        projeto: 'Project A',
        status: 'Concluido',
        responsavel: 'Sarah',
        deadline: '2024-12-31',
        detalhes: '',
      },
      {
        id: 2,
        title: 'Task 2',
        prioridade: 'Média',
        projeto: 'Project B',
        status: 'Concluido',
        responsavel: 'Sarah',
        deadline: '2024-12-31',
        detalhes: '',
      },
    ];

    spyOn(dataService, 'getTarefas').and.returnValue(of(mockTarefas));
    component.getTarefas();

    expect(component.tarefas).toEqual(mockTarefas);
  });

  it('should toggle modal when called', () => {
    spyOn(modalService, 'toggleModal').and.callThrough();
    component.toggleModal();

    expect(modalService.toggleModal).toHaveBeenCalled();
  });

  it('should close modal when called', () => {
    spyOn(modalService, 'closeModal').and.callThrough();
    component.onModalClosed();

    expect(modalService.closeModal).toHaveBeenCalled();
  });

  it('should abbreviate status correctly', () => {
    const longStatus = 'Concluido';
    const shortStatus = component.getAbbreviatedStatus(longStatus, 5);

    expect(shortStatus).toBe('Concl...');
  });

  it('should return correct color for prioridade', () => {
    const color = component.getPrioridadeColor('alta');

    expect(color).toBe('#ff1414');
  });
});
