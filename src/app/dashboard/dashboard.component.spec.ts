import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ModalServiceService } from '../modal-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let modalService: ModalServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardComponent,
        FontAwesomeModule,
        TaskModalComponent,
        HttpClientTestingModule,
      ],
      providers: [ModalServiceService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(ModalServiceService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the username', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.greeting h1')?.textContent).toContain(
      'Olá Kécia'
    );
  });

  it('should initialize the chart on ngOnInit', () => {
    spyOn(component, 'initializeChart');
    component.ngOnInit();
    expect(component.initializeChart).toHaveBeenCalled();
  });

  it('should toggle the modal when called', () => {
    spyOn(modalService, 'toggleModal').and.callThrough();
    component.toggleModal();
    expect(modalService.toggleModal).toHaveBeenCalled();
  });

  it('should close the modal then onModalClosed is called', () => {
    spyOn(modalService, 'closeModal').and.callThrough();
    component.onModalClosed();
    expect(modalService.closeModal).toHaveBeenCalled();
  });

  it('should display the correct task counts', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.status-block.todo h2')?.textContent).toBe(
      '4'
    );
    expect(compiled.querySelector('.status-block.doing h2')?.textContent).toBe(
      '2'
    );
    expect(compiled.querySelector('.status-block.done h2')?.textContent).toBe(
      '64'
    );
  });

  it('should display the delayed count correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.delayed h5')?.textContent).toBe(
      '1 tarefa em atraso!'
    );
  });
});
