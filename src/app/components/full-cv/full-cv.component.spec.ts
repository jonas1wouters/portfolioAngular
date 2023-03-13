import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCvComponent } from './full-cv.component';

describe('FullCvComponent', () => {
  let component: FullCvComponent;
  let fixture: ComponentFixture<FullCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
