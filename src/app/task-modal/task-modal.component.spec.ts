import { TestBed } from '@angular/core/testing';
import { TaskModalComponent } from './task-modal.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('TaskModalComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskModalComponent, HttpClientTestingModule, FormsModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(TaskModalComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
