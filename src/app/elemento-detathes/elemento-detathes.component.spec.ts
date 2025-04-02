import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoDetathesComponent } from './elemento-detathes.component';

describe('ElementoDetathesComponent', () => {
  let component: ElementoDetathesComponent;
  let fixture: ComponentFixture<ElementoDetathesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementoDetathesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementoDetathesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
