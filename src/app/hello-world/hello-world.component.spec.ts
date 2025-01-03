import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloWorldComponent], // Declare the component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent); // Create the component
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Check if component is created
  });

  it('should render Hello, World!', () => {
    const compiled = fixture.nativeElement; // Access the native element
    expect(compiled.querySelector('h1').textContent).toContain('Hello, World!'); // Check for text
  });
});
function expect(textContent: any) {
  throw new Error('Function not implemented.');
}

