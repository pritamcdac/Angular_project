import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Use 'declarations' for components
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); // Create the component fixture
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create the app', () => {
    expect(component).toBeTruthy(); // Check if the app component is created
  });

  it(`should have the title 'sonarqube-demo'`, () => {
    expect(component.title).toEqual('sonarqube-demo'); // Verify the title
  });

  it('should render title in an h1 tag', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Access the native element
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, sonarqube-demo'); // Check if the title is rendered correctly
  });
});
