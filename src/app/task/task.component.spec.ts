import { TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

describe('TaskComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TaskComponent,
        HttpClientTestingModule,
        FormsModule,
        FontAwesomeModule,
      ],
      providers: [DataServiceService],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaskComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
