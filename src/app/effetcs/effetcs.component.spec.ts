import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetcsComponent } from './effetcs.component';

describe('EffetcsComponent', () => {
  let component: EffetcsComponent;
  let fixture: ComponentFixture<EffetcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffetcsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffetcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
