import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the sidebar expansion', () => {
    expect(component.isExpanded).toBeFalse();

    component.toggleSidebar();
    expect(component.isExpanded).toBeTrue();
  });

  it('should update the CSS variable on toggle sidebar', () => {
    spyOn(document.documentElement.style, 'setProperty');

    component.toggleSidebar();
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith(
      '--sidebar-width',
      '300px'
    );

    component.toggleSidebar();
    expect(document.documentElement.style.setProperty).toHaveBeenCalledWith(
      '--sidebar-width',
      '80px'
    );
  });
});
