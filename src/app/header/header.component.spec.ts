import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the user profile image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector(
      '.profile-img'
    ) as HTMLImageElement;
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain('profile.jpg');
    expect(imgElement.alt).toBe('user profile img');
  });

  it('should render the search icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const searchIcon = compiled.querySelector('fa-icon');
    expect(searchIcon).toBeTruthy();
  });
});
